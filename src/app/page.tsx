import Image from "next/image";

import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold">Your Name</h1>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-sky-400">
              About
            </a>
            <a href="#skills" className="hover:text-sky-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-sky-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-sky-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sky-400">
            Portfolio
          </p>
          <h2 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl">
            Hi, I’m Your Name
          </h2>
          <p className="mb-8 max-w-2xl text-lg text-slate-300">
            I’m a student developer learning how to build responsive websites
            and full-stack applications. I enjoy creating clean user experiences
            and practical software projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-sky-500 px-5 py-3 font-medium text-white transition hover:bg-sky-400"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-700 px-5 py-3 font-medium text-white transition hover:border-slate-500"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              width={420}
              height={420}
              className="h-auto w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-4 text-3xl font-semibold">About Me</h2>
        <p className="max-w-3xl text-slate-300">
          I’m currently learning web development and building projects with
          JavaScript, React, Next.js, and backend tools. I like creating
          user-friendly interfaces and exploring how frontend and backend systems
          work together.
        </p>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-3xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Git",
            "Tailwind CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-3xl font-semibold">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image
              src="/project1.jpg"
              alt="Project 1 preview"
              width={800}
              height={450}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Portfolio Website</h3>
              <p className="mb-4 text-slate-300">
                A personal portfolio site built to showcase my projects, skills,
                and growth as a developer.
              </p>
              <p className="mb-4 text-sm text-sky-400">
                Next.js • Tailwind CSS • TypeScript
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername/project1"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400"
                >
                  GitHub
                </a>
                <a
                  href="https://your-live-demo-link.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-white hover:border-slate-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image
              src="/project2.jpg"
              alt="Project 2 preview"
              width={800}
              height={450}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Interactive Web App</h3>
              <p className="mb-4 text-slate-300">
                A future full-stack project with backend functionality such as
                form handling, saved data, or visitor interaction.
              </p>
              <p className="mb-4 text-sm text-sky-400">
                API Routes • Database • Full Stack
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername/project2"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400"
                >
                  GitHub
                </a>
                <a
                  href="https://your-live-demo-link.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-white hover:border-slate-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-3xl font-semibold">Contact</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-sky-500"
          >
            <div className="rounded-lg bg-slate-800 p-3 text-sky-400">
              <Mail size={22} />
            </div>
            <div>
              <div className="mb-1 text-sky-400">Email</div>
              <div className="text-slate-200">your@email.com</div>
            </div>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-sky-500"
          >
            <div className="rounded-lg bg-slate-800 p-3 text-sky-400">
              <FaGithub size={22} />
            </div>
            <div>
              <div className="mb-1 text-sky-400">GitHub</div>
              <div className="text-slate-200">github.com/yourusername</div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-sky-500"
          >
            <div className="rounded-lg bg-slate-800 p-3 text-sky-400">
              <FaLinkedin  size={22} />
            </div>
            <div>
              <div className="mb-1 text-sky-400">LinkedIn</div>
              <div className="text-slate-200">linkedin.com/in/yourusername</div>
            </div>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-sky-500"
          >
            <div className="rounded-lg bg-slate-800 p-3 text-sky-400">
              <FileText size={22} />
            </div>
            <div>
              <div className="mb-1 text-sky-400">Resume</div>
              <div className="text-slate-200">View my resume</div>
            </div>
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-400">
          © 2026 Your Name. Built with Next.js and Tailwind CSS.
        </div>
      </footer>
    </main>
  );
}
