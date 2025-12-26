import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "WebHjerte",
    description:
      "Web development agency website with modern UI, animations and responsive layout.",
    image: "/projects/webhjerte.jpg",
    live: "https://webhjerte.dk",
    github: null,
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio built with Next.js, Tailwind CSS and glassmorphism design.",
    image: "/projects/portfolio.jpg",
    live: "https://ivan3750.github.io/AboutMe/",
    github: "https://github.com/Ivan3750",
  },
  {
    title: "Dashboard UI",
    description:
      "Admin dashboard concept with charts, cards and dark theme.",
    image: "/projects/dashboard.jpg",
    live: null,
    github: "https://github.com/Ivan3750",
  },
];

export default function Projects() {
  return (
    <main className="relative z-10">
      {/* Background */}
    

      {/* Content */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        {/* Title */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Projects
          </h1>
          <p className="mt-4 text-neutral-400">
            A selection of projects I’ve worked on — from real products to
            personal experiments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group rounded-[28px] overflow-hidden
                bg-white/[0.05] backdrop-blur-xl
                border border-white/10
                hover:border-[#edcb4c]/40 transition
              "
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1014]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-medium text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="mt-4 flex gap-4 text-sm">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="
                        inline-flex items-center gap-1 text-neutral-300
                        hover:text-[#edcb4c]
                      "
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="
                        inline-flex items-center gap-1 text-neutral-300
                        hover:text-[#edcb4c]
                      "
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
