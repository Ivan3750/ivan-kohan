import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="relative z-10">
      

      {/* Content */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 py-24">
        {/* Title */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Contact
          </h1>
          <p className="mt-4 text-neutral-400">
            Have a project in mind or just want to say hello?  
            Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Info */}
          <div
            className="
              rounded-[28px] bg-white/[0.05] backdrop-blur-xl
              border border-white/10 p-8
            "
          >
            <h3 className="text-lg font-medium text-white">
              Let’s connect
            </h3>

            <p className="mt-3 text-neutral-400 leading-relaxed">
              I’m open to freelance work, collaborations and interesting ideas.
              The fastest way to contact me is via email or social networks.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <a
                href="mailto:kohan3750@gmail.com"
                className="
                  flex items-center gap-2 text-neutral-300
                  hover:text-[#edcb4c]
                "
              >
                <Mail size={16} /> kohan3750@gmail.com
              </a>

              <a
                href="https://github.com/Ivan3750"
                target="_blank"
                className="
                  flex items-center gap-2 text-neutral-300
                  hover:text-[#edcb4c]
                "
              >
                <Github size={16} /> GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="
                  flex items-center gap-2 text-neutral-300
                  hover:text-[#edcb4c]
                "
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            className="
              rounded-[28px] bg-white/[0.05] backdrop-blur-xl
              border border-white/10 p-8
            "
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="
                  w-full rounded-xl bg-white/[0.03]
                  border border-white/10 px-4 py-3
                  text-sm text-white placeholder:text-neutral-500
                  focus:outline-none focus:border-[#edcb4c]/50
                "
              />

              <input
                type="email"
                placeholder="Email address"
                className="
                  w-full rounded-xl bg-white/[0.03]
                  border border-white/10 px-4 py-3
                  text-sm text-white placeholder:text-neutral-500
                  focus:outline-none focus:border-[#edcb4c]/50
                "
              />

              <textarea
                rows={4}
                placeholder="Your message"
                className="
                  w-full rounded-xl bg-white/[0.03]
                  border border-white/10 px-4 py-3
                  text-sm text-white placeholder:text-neutral-500
                  focus:outline-none focus:border-[#edcb4c]/50 resize-none
                "
              />
            </div>

            <button
              type="submit"
              className="
                mt-6 flex items-center justify-center gap-2 w-full
                rounded-xl py-3 text-sm font-medium text-black
                bg-gradient-to-r from-[#edcb4c] to-[#f5dc7a]
                hover:brightness-105 hover:scale-[1.01]
                active:scale-[0.98]
              "
            >
              <Send size={16} /> Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
