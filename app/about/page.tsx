import {
  User,
  Target,
  Briefcase,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

export default function About() {
  return (
    <main className="relative z-10">
      

      {/* Content */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24 space-y-20">
        
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">
              About Me
            </h1>
            <p className="text-neutral-300 leading-relaxed">
              I’m a developer who enjoys building clean, modern interfaces and
              meaningful digital products. I focus on quality, usability and
              long-term maintainability.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I believe good design and good code should work together — not
              fight each other.
            </p>
          </div>

          <div className="rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 p-8">
            <p className="text-sm text-neutral-300 leading-relaxed">
              Currently focused on web development, UI systems and learning new
              technologies that help me ship better products faster.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoCard
            icon={<Target size={18} />}
            title="Mission"
            text="Build products that are useful, simple and pleasant to use."
          />
          <InfoCard
            icon={<User size={18} />}
            title="Who I Am"
            text="A developer who values clarity, consistency and attention to detail."
          />
          <InfoCard
            icon={<HeartHandshake size={18} />}
            title="Values"
            text="Quality over quantity, honesty, continuous learning."
          />
        </div>

        {/* Experience */}
        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-white">Experience</h2>

          <TimelineItem
            title="Web Developer – Freelance"
            date="2022 – Present"
            text="Working on websites, dashboards and UI-heavy projects for clients."
          />

          <TimelineItem
            title="WebHjerte"
            date="2023 – Present"
            text="Building and maintaining projects for a small web development agency."
          />
        </div>

        {/* Education */}
        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-white">Education</h2>

          <TimelineItem
            title="Self-taught Developer"
            date="2021 – Present"
            text="Learning through real projects, documentation and practice."
          />

          <TimelineItem
            title="Online Courses & Mentorship"
            date="2022 – 2024"
            text="Next.js, React, UI design, accessibility and performance."
          />
        </div>

        {/* Interests */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoCard
            icon={<Briefcase size={18} />}
            title="Work Interests"
            text="Web apps, design systems, dashboards, SaaS products."
          />
          <InfoCard
            icon={<GraduationCap size={18} />}
            title="Learning"
            text="Advanced React patterns, backend architecture, product thinking."
          />
          <InfoCard
            icon={<HeartHandshake size={18} />}
            title="Outside Work"
            text="Music, minimal design, productivity and self-improvement."
          />
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function InfoCard({
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
      <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{text}</p>
    </div>
  );
}

function TimelineItem({
  title,
  date,
  text,
}: {
  title: string;
  date: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] bg-white/[0.03] border border-white/10 p-6">
      <div className="flex justify-between flex-wrap gap-2">
        <h3 className="text-white font-medium">{title}</h3>
        <span className="text-xs text-neutral-500">{date}</span>
      </div>
      <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{text}</p>
    </div>
  );
}
