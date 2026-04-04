"use client";
import Head from "next/head";
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const LINKEDIN_URL = "https://linkedin.com/in/ivan-kohan";
const INSTAGRAM_URL = "https://instagram.com/ivan.kohan.ua";
const GITHUB_URL = "https://github.com/ivankohan";
const EMAIL = "kohan3750@gmail.com";

// Replace YOUR_FORM_ID with your actual Formspree form ID
// Get it free at formspree.io — takes 2 minutes
const FORMSPREE_ID = "YOUR_FORM_ID";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Head>
        <title>Contact — Ivan Kohan</title>
        <meta
          name="description"
          content="Get in touch with Ivan Kohan — web developer based in Horsens, Denmark. Free website review for Danish businesses."
        />
      </Head>

      <main className="relative z-10">
        <section className="max-w-5xl mx-auto px-4 pt-32 pb-20">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Let's talk
          </h1>
          <p className="text-neutral-400 max-w-xl mb-16 leading-relaxed">
            Have a project in mind, or not sure if your website is working as
            well as it should? Send me a message — I'll get back to you within
            24 hours.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT — info */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-white font-medium mb-2">
                  Free website review
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  Not sure if your website is losing you customers? I'll
                  personally review it and send you a short, honest breakdown —
                  no obligation, no sales pitch.
                </p>
                <div className="space-y-2">
                  {[
                    "Speed & performance",
                    "Mobile experience",
                    "Clarity & conversion",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-neutral-400"
                    >
                      <CheckCircle2 size={14} className="text-[#edcb4c]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-white font-medium mb-4">
                  Other ways to reach me
                </h3>
                <div className="space-y-3">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-[#edcb4c] transition"
                  >
                    <Mail size={15} />
                    {EMAIL}
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-[#edcb4c] transition"
                  >
                    <Linkedin size={15} />
                    LinkedIn — Ivan Kohan
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-[#edcb4c] transition"
                  >
                    <Instagram size={15} />
                    Instagram — ivan.kohan.ua
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-[#edcb4c] transition"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <CheckCircle2 size={40} className="text-[#edcb4c] mb-4" />
                  <h3 className="text-white font-medium mb-2">Message sent!</h3>
                  <p className="text-sm text-neutral-400">
                    I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-neutral-500 mb-1.5 uppercase tracking-wider">
                      Your name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Anna Hansen"
                      className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#edcb4c]/40 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-500 mb-1.5 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="anna@example.dk"
                      className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#edcb4c]/40 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-500 mb-1.5 uppercase tracking-wider">
                      Your website (optional)
                    </label>
                    <input
                      name="website"
                      type="url"
                      placeholder="https://yoursite.dk"
                      className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#edcb4c]/40 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-500 mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell me about your business and what you need..."
                      className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#edcb4c]/40 transition resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-400">
                      Something went wrong. Please email me directly at{" "}
                      {EMAIL}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-[#edcb4c] to-[#f5dc7a] hover:brightness-105 transition disabled:opacity-60"
                  >
                    <Send size={15} />
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}