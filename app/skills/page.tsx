import {
  Code2,
  Layout,
  Database,
  Wrench,
  Brain,
  Languages,
} from "lucide-react";

const skillGroups = [
  {
    title: "Web Development",
    icon: <Code2 size={18} />,
    skills: [
      "HTML",
      "CSS / SCSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "UI / UX & Design",
    icon: <Layout size={18} />,
    skills: [
      "Figma",
      "Responsive Design",
      "Design Systems",
      "Accessibility",
      "Glassmorphism",
    ],
  },
  {
    title: "Backend & Data",
    icon: <Database size={18} />,
    skills: [
      "Node.js",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <Wrench size={18} />,
    skills: [
      "Git & GitHub",
      "Docker (basic)",
      "Vercel",
      "CI / CD",
      "Linux",
    ],
  },
  {
    title: "Soft Skills",
    icon: <Brain size={18} />,
    skills: [
      "Problem Solving",
      "Communication",
      "Time Management",
      "Self-learning",
      "Teamwork",
    ],
  },
  {
    title: "Languages",
    icon: <Languages size={18} />,
    skills: [
      "Ukrainian – Native",
      "English – B2",
      "Polish – Basic",
    ],
  },
];

export default function Skills() {
  return (
    <main className="relative z-10">
      

      {/* Content */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        {/* Title */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Skills
          </h1>
          <p className="mt-4 text-neutral-400">
            Not only web development — a mix of technical, creative and personal
            skills I use in real projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                rounded-[28px] bg-white/[0.05] backdrop-blur-xl
                border border-white/10 p-6
                hover:border-[#edcb4c]/40 transition
              "
            >
              {/* Header */}
              <div className="flex items-center gap-2 text-white">
                <div className="p-2 rounded-lg bg-white/[0.05] border border-white/10">
                  {group.icon}
                </div>
                <h3 className="text-lg font-medium">{group.title}</h3>
              </div>

              {/* Skills */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="
                      px-3 py-1 rounded-full text-xs
                      bg-white/[0.05] border border-white/10
                      text-neutral-300
                    "
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
