import { ExternalLink, Github } from "lucide-react";
import pizzeria from "@/app/assets/cases/PizzleM.png"
import hireon from "@/app/assets/cases/HireonM.png"
import workout from "@/app/assets/cases/WorkOutM.png"
import vzlom from "@/app/assets/cases/Vzlom.png"
import Ukraine from "@/app/assets/cases/UkraineW.png"
import horse from "@/app/assets/cases/ClubHorseM.png"
const projects = [
  {
    title: "Pizzle",
    description:
      "Website for a pizzeria chain with online ordering and menu management features.",
    image: pizzeria.src,
    live: null,
    github: null,
  },
  {
    title: "HireOn",
    description:
      "Job search platform with admin dashboard for managing listings and applications.",
    image: hireon.src,
    live: null,
    github: null,
  },
  {
    title: "WorkOut",
    description:
      "Fitness tracking dashboard with analytics and progress monitoring for workouts.",
    image: workout.src,
    live: null,
    github: null,
  },
  {
    title: "Vzlom",
    description:
      "Website for selling safes, featuring admin dashboard and product management tools.",
    image: vzlom.src,
    live: null,
    github: null,
  },
  {
    title: "Club Horse",
    description:
      "Informational site for a horse club, showcasing events, horses, and membership info.",
    image: horse.src,
    live: null,
    github: null,
  },
  {
    title: "Ukraine War",
    description:
      "Awareness website highlighting the war in Ukraine with informative dashboard elements.",
    image: Ukraine.src,
    live: null,
    github: null,
  },
];


export default function Projects() {
  return (
    <main className="relative z-10">
    

      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <div className="max-w-2xl mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Projects
          </h1>
          <p className="mt-4 text-neutral-400">
            A selection of projects I’ve worked on — from real products to
            personal experiments.
          </p>
        </div>

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
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1014]/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-medium text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  {project.description}
                </p>

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
         <div
              className="
              mt-8
              p-4
                group rounded-[28px] overflow-hidden
                bg-white/[0.05] backdrop-blur-xl
                border border-white/10
                hover:border-[#edcb4c]/40 transition
              "
            >          And so more...
</div>
      </section>
    </main>
  );
}
