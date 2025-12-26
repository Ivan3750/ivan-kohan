import { Mail, Github, Linkedin, Code2, Layout, Briefcase, Instagram } from "lucide-react";
import bg from "../public/bg.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative z-10">
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 p-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
            Building modern digital experiences
          </h1>

          <p className="mt-4 text-neutral-300 leading-relaxed">
            Web developer focused on clean UI, scalable architecture and
            meaningful user experiences.
          </p>

          <p className="mt-3 text-neutral-400 leading-relaxed">
            I build products that look good, feel fast and scale well.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:test@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              text-black bg-gradient-to-r from-[#edcb4c] to-[#f5dc7a]
              hover:brightness-105 hover:scale-[1.02] active:scale-[0.97]"
            >
              <Mail size={16} /> Contact me
            </a>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              border border-white/15 text-neutral-300
              hover:border-[#edcb4c]/40 hover:text-white"
            >
              View projects
            </Link>
          </div>

          <div className="mt-6 flex gap-4 text-neutral-400">
            <a href="#" className="hover:text-white"><Github size={18} /></a>
            <a href="#" className="hover:text-white"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={18} /></a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-full max-w-md rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <Image src={bg} alt="Hero" className="object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1014]/80 to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Feature
          icon={<Code2 size={18} />}
          title="Web Development"
          text="Modern websites and web apps with React, Next.js and clean architecture."
        />
        <Feature
          icon={<Layout size={18} />}
          title="UI / UX"
          text="Minimal, accessible and user-focused interfaces."
        />
        <Feature
          icon={<Briefcase size={18} />}
          title="Real Projects"
          text="Experience with real clients, products and long-term maintenance."
        />
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-medium text-white mb-8">
          Featured projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard title="WebHjerte" />
          <ProjectCard title="Portfolio" />
          <ProjectCard title="Dashboard UI" />
        </div>

        <div className="mt-8">
          <Link
            href="/projects"
            className="text-sm text-neutral-400 hover:text-[#edcb4c]"
          >
            View all projects →
          </Link>
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-4 py-24">
        <div className="rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 p-10 text-center">
          <h2 className="text-2xl font-medium text-white">
            Let’s work together
          </h2>
          <p className="mt-3 text-neutral-400">
            Have an idea or project? Let’s talk.
          </p>

          <a
            href="mailto:kohan3750@gmail.com"
            className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-medium
            text-black bg-gradient-to-r from-[#edcb4c] to-[#f5dc7a]
            hover:brightness-105"
          >
            <Mail size={16} /> Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}


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
    <div className="rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 p-6">
      <div className="flex items-center gap-2 text-white">
        <div className="p-2 rounded-lg bg-white/[0.05] border border-white/10">
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
    <div className="rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 p-6">
      <h3 className="text-white font-medium">{title}</h3>
      <p className="mt-2 text-sm text-neutral-400">
        Short description of the project and what problem it solves.
      </p>
    </div>
  );
}
