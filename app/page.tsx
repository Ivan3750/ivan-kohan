import {
  Mail,
  Github,
  Linkedin,
  Code2,
  Layout,
  Briefcase,
  Instagram,
  ArrowRight,
  Sparkles,
  Cpu,
} from "lucide-react";
import bg from "../public/bg.jpg";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {
  LinkedIn_URL,
  Instagram_URL,
  GitHub_URL,
  Email_URL,
} from "./contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ivan Kohan | Web Developer from Ukraine 🇺🇦</title>
        <meta
          name="description"
          content="Ivan Kohan is a web developer from Ukraine 🇺🇦 specializing in React and Next.js."
        />
        <link rel="canonical" href="https://ivankohan.com" />
        <meta name="theme-color" content="#0C1014" />
      </Head>

      <main className="relative overflow-hidden">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-4 py-28 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-neutral-300">
              🇺🇦 Ukrainian
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight text-white">
              Building modern <br />
              <span className="bg-gradient-to-r from-[#edcb4c] to-[#f5dc7a] bg-clip-text text-transparent">
                web experiences
              </span>
            </h1>

            <p className="mt-6 text-neutral-400 max-w-lg leading-relaxed">
              Web developer focused on clean UI, performance and scalable
              architecture using React & Next.js.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${Email_URL}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#edcb4c] to-[#f5dc7a] px-7 py-3 text-sm font-medium text-black transition hover:brightness-105"
              >
                <Mail size={16} />
                Contact me
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-7 py-3 text-sm text-neutral-300 transition hover:border-[#edcb4c]/40 hover:text-white"
              >
                View projects <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-8 flex gap-5 text-neutral-400">
              <Social href={GitHub_URL}><Github size={18} /></Social>
              <Social href={Instagram_URL}><Instagram size={18} /></Social>
              <Social href={LinkedIn_URL}><Linkedin size={18} /></Social>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <Image
                src={bg}
                alt="Ivan Kohan"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1014]/80 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-6xl mx-auto px-4 py-28">
          <h2 className="text-2xl md:text-3xl font-medium text-white">
            What I can help with
          </h2>
          <p className="mt-3 text-neutral-400 max-w-xl">
            End-to-end development with a strong focus on quality and business value.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={<Layout size={18} />}
              title="UI & UX Development"
              text="Pixel-perfect interfaces with attention to usability and accessibility."
            />
            <Feature
              icon={<Code2 size={18} />}
              title="Frontend Architecture"
              text="Scalable React & Next.js setups built for long-term growth."
            />
            <Feature
              icon={<Cpu size={18} />}
              title="Performance Optimization"
              text="Fast loading, SEO-friendly apps with excellent Core Web Vitals."
            />
          </div>
        </section>

        {/* EXPERIENCE / STACK */}
        <section className="max-w-6xl mx-auto px-4 py-28">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium text-white">
                Experience & stack
              </h2>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                I work mainly with modern JavaScript frameworks and tools,
                focusing on maintainable code and clean architecture.
              </p>

              <ul className="mt-6 space-y-3 text-neutral-300">
                <li className="flex items-center gap-3">
                  <Sparkles size={16} className="text-[#edcb4c]" /> React, Next.js, TypeScript
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles size={16} className="text-[#edcb4c]" /> Tailwind CSS, CSS Modules
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles size={16} className="text-[#edcb4c]" /> REST APIs, basic backend integration
                </li>
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <ProjectCard title="SaaS Dashboard" />
              <ProjectCard title="Marketing Website" />
              <ProjectCard title="E-commerce UI" />
              <ProjectCard title="Startup Landing" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 py-28 text-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12">
            <h2 className="text-2xl text-white font-medium">
              Let’s build something great
            </h2>
            <p className="mt-4 text-neutral-400">
              Have an idea or project? Let’s talk.
            </p>

            <a
              href={`mailto:${Email_URL}`}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#edcb4c] to-[#f5dc7a] px-8 py-3 text-sm font-medium text-black hover:brightness-105"
            >
              <Mail size={16} /> Get in touch
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

/* ---------- Components ---------- */

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#edcb4c]/40">
      <div className="flex items-center gap-3 text-white">
        <div className="rounded-lg border border-white/10 bg-white/5 p-2 group-hover:text-[#edcb4c]">
          {icon}
        </div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-400">{text}</p>
    </div>
  );
}

function ProjectCard({ title }: { title: string }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#edcb4c]/40">
      <h3 className="text-white font-medium">{title}</h3>
      <p className="mt-2 text-sm text-neutral-400">
        Short description of the project and its value.
      </p>
      <span className="mt-4 inline-block text-sm text-[#edcb4c] opacity-0 transition group-hover:opacity-100">
        View project →
      </span>
    </div>
  );
}

function Social({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="transition hover:text-white"
    >
      {children}
    </a>
  );
}
