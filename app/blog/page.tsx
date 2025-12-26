import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "How I build modern web interfaces",
    excerpt:
      "Thoughts about UI, UX, glassmorphism and building clean interfaces with React and Tailwind.",
    date: "Mar 12, 2024",
    image: "/blog/ui.jpg",
    slug: "modern-web-interfaces",
  },
  {
    title: "Next.js App Router – what you should know",
    excerpt:
      "Key concepts, layouts, server components and how to structure real projects.",
    date: "Feb 27, 2024",
    image: "/blog/nextjs.jpg",
    slug: "nextjs-app-router",
  },
  {
    title: "Design systems for developers",
    excerpt:
      "Why every serious project needs a design system and how to build one.",
    date: "Feb 10, 2024",
    image: "/blog/design-system.jpg",
    slug: "design-systems",
  },
];

export default function Blog() {
  return (
    <main className="relative z-10">
      

      {/* Content */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        {/* Title */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Blog
          </h1>
          <p className="mt-4 text-neutral-400">
            Articles about web development, UI design and my personal workflow.
          </p>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="
                group block rounded-[28px] overflow-hidden
                bg-white/[0.05] backdrop-blur-xl
                border border-white/10
                hover:border-[#edcb4c]/40 transition
              "
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1014]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-neutral-400">{post.date}</p>

                <h3 className="mt-2 text-lg font-medium text-white leading-snug">
                  {post.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-4 inline-flex items-center gap-1 text-sm text-neutral-300 group-hover:text-[#edcb4c]">
                  Read more <ArrowRight size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
