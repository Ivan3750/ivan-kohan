import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NextJsAppRouterPost() {
  return (
    <main className="relative z-10">
      

      <article className="relative z-10 max-w-3xl mx-auto px-4 py-24">
        
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-[#edcb4c]"
        >
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <header className="mt-8 mb-12">
          <p className="text-xs text-neutral-500">March 27, 2024</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white leading-tight">
            Next.js App Router - what you should know
          </h1>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            A practical overview of the App Router, how it works and how to
            structure real-world Next.js projects.
          </p>
        </header>

        <div className="space-y-12">
          
          <section className="rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 p-8">
            <h2 className="text-xl font-medium text-white">
              What is the App Router?
            </h2>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              The App Router is a new routing system introduced in Next.js 13.
              It is built around React Server Components and allows you to
              structure your application using folders instead of configuration.
            </p>
            <p className="mt-3 text-neutral-400 leading-relaxed">
              This approach improves performance, simplifies data fetching and
              encourages better separation of concerns.
            </p>
          </section>

          <section className="rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 p-8">
            <h2 className="text-xl font-medium text-white">
              Folder-based structure
            </h2>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              With the App Router, every folder represents a route. Files like
              <code className="mx-1 px-2 py-1 rounded bg-black/40 text-xs">
                page.tsx
              </code>
              ,
              <code className="mx-1 px-2 py-1 rounded bg-black/40 text-xs">
                layout.tsx
              </code>
              and
              <code className="mx-1 px-2 py-1 rounded bg-black/40 text-xs">
                loading.tsx
              </code>
              define behavior for that route.
            </p>
            <p className="mt-3 text-neutral-400 leading-relaxed">
              This makes large projects easier to navigate and reason about.
            </p>
          </section>

          {/* Block */}
          <section className="rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 p-8">
            <h2 className="text-xl font-medium text-white">
              Server vs Client Components
            </h2>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              By default, components in the App Router are Server Components.
              They run on the server and send minimal JavaScript to the browser.
            </p>
            <p className="mt-3 text-neutral-400 leading-relaxed">
              When you need interactivity, you can opt into Client Components
              using the
              <code className="mx-1 px-2 py-1 rounded bg-black/40 text-xs">
                "use client"
              </code>
              directive.
            </p>
          </section>

          {/* Block */}
          <section className="rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 p-8">
            <h2 className="text-xl font-medium text-white">
              When should you use it?
            </h2>
            <ul className="mt-4 space-y-2 text-neutral-300 text-sm">
              <li>• You want better performance by default</li>
              <li>• You prefer file-based architecture</li>
              <li>• Your project benefits from server-side rendering</li>
              <li>• You are building scalable, long-term products</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="rounded-[28px] bg-white/[0.05] backdrop-blur-xl border border-white/10 p-8">
            <h2 className="text-xl font-medium text-white">
              Final thoughts
            </h2>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              The App Router represents a big shift in how we build Next.js
              applications. It may feel unfamiliar at first, but it enables
              cleaner architecture and better performance.
            </p>
            <p className="mt-3 text-neutral-400 leading-relaxed">
              If you’re starting a new project today, the App Router is the
              recommended way forward.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
