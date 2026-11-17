"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import type { Dict } from "@/app/lib/dictionary";
import { links } from "@/app/lib/site";
import { socialLinks } from "./Icons";
import { Magnetic, Reveal, SplitWords } from "./motion";
import { SectionLabel } from "./SectionLabel";

type Status = "idle" | "sending" | "sent" | "error" | "invalid";

export default function Contact({
  dict,
  lang,
  external,
  h1 = false,
}: {
  dict: Dict["contact"];
  lang: string;
  external: string;
  h1?: boolean;
}) {
  const Title = h1 ? "h1" : "h2";
  const f = dict.form;
  const [status, setStatus] = useState<Status>("idle");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!data.name?.trim() || !/^\S+@\S+\.\S+$/.test(data.email ?? "") || !data.message?.trim()) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 text-base text-paper placeholder:text-graphite focus:border-accent focus:bg-white/[0.07] focus:outline-none transition";

  return (
    <section id="contact" ref={ref} className="grain relative isolate overflow-hidden bg-ink text-paper">
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="absolute left-1/2 top-0 -z-10 h-[60vmax] w-[60vmax] -translate-x-1/2 rounded-full"
      />
      <motion.div
        aria-hidden
        style={{
          y: glowY,
          background: "radial-gradient(closest-side, rgba(255,214,10,0.28), transparent 72%)",
        }}
        className="absolute left-1/2 top-0 -z-10 h-[70vmax] w-[70vmax] -translate-x-1/2 rounded-full"
      />

      <div className={`mx-auto max-w-7xl px-5 pb-28 sm:px-8 sm:pb-40 ${h1 ? "pt-40 sm:pt-48" : "pt-28 sm:pt-40"}`}>
        <SectionLabel text={dict.label} light />

        <Title className="font-display mt-8 text-[clamp(2.4rem,8vw,7.5rem)] font-bold leading-[0.98]">
          <span className="block">
            <SplitWords text={dict.title.pre} />
          </span>
          <span className="block">
            <SplitWords text={dict.title.em} className="text-accent-em" delay={0.2} />
          </span>
        </Title>

        <Reveal>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">{dict.lead}</p>
        </Reveal>

        <div className="mt-14">
          <p className="label text-mist">{dict.emailLabel}</p>
          <Magnetic strength={0.15} className="mt-3 max-w-full">
            <a
              href={`mailto:${links.email}`}
              data-cursor="Email"
              className="font-display group inline-flex max-w-full items-center gap-3 break-all text-[clamp(1.4rem,4.4vw,3.6rem)] font-bold underline decoration-accent decoration-2 underline-offset-[0.3em] transition hover:text-accent"
            >
              {links.email}
              <ArrowUpRight className="h-[0.8em] w-[0.8em] shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Magnetic>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-10">
              {status === "sent" ? (
                <div className="grid place-items-center py-14 text-center" role="status">
                  <CheckCircle2 size={52} className="text-accent" />
                  <h3 className="font-display mt-6 text-3xl font-bold">{f.sentTitle}</h3>
                  <p className="mt-3 max-w-sm text-mist">{f.sentText}</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-accent hover:text-accent"
                  >
                    {f.again}
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={f.name} id="c-name">
                      <input id="c-name" name="name" type="text" required autoComplete="name" placeholder={f.namePh} className={input} />
                    </Field>
                    <Field label={f.email} id="c-email">
                      <input id="c-email" name="email" type="email" required autoComplete="email" placeholder={f.emailPh} className={input} />
                    </Field>
                  </div>
                  <Field label={f.website} id="c-site">
                    <input id="c-site" name="website" type="url" autoComplete="url" placeholder={f.websitePh} className={input} />
                  </Field>
                  <Field label={f.message} id="c-msg">
                    <textarea id="c-msg" name="message" rows={5} required placeholder={f.messagePh} className={`${input} resize-none`} />
                  </Field>

                  {/* honeypot — real people never see or fill this */}
                  <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
                    <label>
                      Company
                      <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  {status === "invalid" && (
                    <p role="alert" className="text-sm text-accent-soft">
                      {f.invalid}
                    </p>
                  )}
                  {status === "error" && (
                    <p role="alert" className="text-sm text-accent-soft">
                      {f.error}{" "}
                      <a className="underline" href={`mailto:${links.email}`}>
                        {links.email}
                      </a>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink transition hover:bg-paper disabled:opacity-60 sm:w-auto"
                  >
                    <Send size={16} className="transition group-hover:translate-x-1" />
                    {status === "sending" ? f.sending : f.send}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="label text-mist">{dict.socialsTitle}</h3>
            <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {socialLinks
                .filter((s) => s.id !== "email")
                .map(({ id, label, href, Icon, handle }) => (
                  <li key={id}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="group flex items-center justify-between gap-4 py-5 transition hover:pl-3"
                    >
                      <span className="flex items-center gap-4">
                        <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                          <Icon size={18} />
                        </span>
                        <span>
                          <span className="font-display block text-lg font-medium">{label.split(" ")[0]}</span>
                          <span className="block text-sm text-mist">{handle}</span>
                        </span>
                      </span>
                      <span className="sr-only">({external})</span>
                      <ArrowUpRight size={18} className="text-mist transition group-hover:text-accent" />
                    </a>
                  </li>
                ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="label mb-2 block text-mist">
        {label}
      </label>
      {children}
    </div>
  );
}
