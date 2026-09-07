import Image from "next/image";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-80px] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-100px] top-[120px] h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/3 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_right,rgba(168,85,247,0.08),transparent_30%)]" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold tracking-wide text-white">
            Reuben
          </h1>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="#about" className="transition hover:text-cyan-300">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-300">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-300">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-cyan-300">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm uppercase tracking-[0.2em] text-cyan-300">
            Portfolio   
          </p>

          <h2 className="mb-6 text-5xl font-extrabold leading-tight sm:text-6xl">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              Reuben
            </span>
          </h2>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
            I’m a student developer building responsive web experiences with
            modern frontend tools and practical full-stack ideas. I enjoy making
            software feel clean, interactive, and useful.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-r from-cyan-400/20 to-violet-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-cyan-500/10 backdrop-blur-md">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              width={420}
              height={420}
              className="h-auto w-full max-w-sm rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-14">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
          About
        </p>
        <h2 className="mb-4 text-3xl font-bold">About Me</h2>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          I’m currently learning web development and building projects with
          JavaScript, React, Next.js, and backend-related tools. I’m especially
          interested in building user-friendly interfaces and understanding how
          frontend and backend systems work together in real applications.
        </p>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-14">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
          Skills
        </p>
        <h2 className="mb-6 text-3xl font-bold">Tech Stack</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 shadow-md shadow-black/10 backdrop-blur-md transition hover:border-cyan-300/30 hover:bg-cyan-400/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
          Projects
        </p>
        <h2 className="mb-6 text-3xl font-bold">Featured Work</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/30">
            <div className="overflow-hidden">
              <Image
                src="/project1.jpg"
                alt="Project 1 preview"
                width={800}
                height={450}
                className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-2xl font-semibold">Portfolio Website</h3>
              <p className="mb-4 leading-7 text-slate-300">
                A personal portfolio website built to showcase projects, skills,
                and contact details in a clean and modern layout.
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  Next.js
                </span>
                <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
                  Tailwind CSS
                </span>
                <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-300">
                  TypeScript
                </span>
              </div>

              <a
                href="https://github.com/yourusername/project1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                View Code
              </a>
            </div>
          </div>

          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/30">
            <div className="overflow-hidden">
              <Image
                src="/project2.jpg"
                alt="Project 2 preview"
                width={800}
                height={450}
                className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-2xl font-semibold">Interactive Web App</h3>
              <p className="mb-4 leading-7 text-slate-300">
                A project focused on interactive web features, polished UI, and
                practical functionality for a more dynamic user experience.
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  React
                </span>
                <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
                  UI Design
                </span>
                <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-300">
                  Frontend
                </span>
              </div>

              <a
                href="https://github.com/yourusername/project2"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
          Contact
        </p>
        <h2 className="mb-6 text-3xl font-bold">Let’s Connect</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="mailto:reuben@email.com"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
          >
            <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
              <Mail size={22} />
            </div>
            <div>
              <div className="mb-1 text-sm uppercase tracking-wide text-cyan-300">
                Email
              </div>
              <div className="text-slate-100">reuben@email.com</div>
            </div>
          </a>

          <a
            href="https://github.com/temp-acc-pf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
          >
            <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
              <FaGithub size={22} />
            </div>
            <div>
              <div className="mb-1 text-sm uppercase tracking-wide text-cyan-300">
                GitHub
              </div>
              <div className="text-slate-100">github.com/temp-acc-pf</div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
          >
            <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
              <FaLinkedin size={22} />
            </div>
            <div>
              <div className="mb-1 text-sm uppercase tracking-wide text-cyan-300">
                LinkedIn
              </div>
              <div className="text-slate-100">linkedin.com/in/reuben</div>
            </div>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
          >
            <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
              <FileText size={22} />
            </div>
            <div>
              <div className="mb-1 text-sm uppercase tracking-wide text-cyan-300">
                Resume
              </div>
              <div className="text-slate-100">View my resume</div>
            </div>
          </a>
        </div>
      </section>

      <footer className="mt-8 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-400">
          © 2026 Reuben. Built with Next.js and Tailwind CSS.
        </div>
      </footer>
    </main>
  );
}
