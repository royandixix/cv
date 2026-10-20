
"use client";

import { motion } from "framer-motion";
import Gallery from "@/components/ui/Gallery";
import UniversityGallery from "@/components/ui/UniversityGallery";

export default function About() {
  const skills = [
    "Laravel",
    "React",
    "Next.js",
    "Vue.js",
    "Svelte",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Supabase",
    "Docker",
  ];

  const profile = {
    name: '"Royandi, S.Kom."',
    role: '"Software Engineer"',
    location: '"Mamuju, West Sulawesi, Indonesia"',
    frontend:
      '{"React", "Next.js", "Vue.js", "Svelte", "TypeScript", "Tailwind CSS"}',
    backend:
      '{"Laravel", "Node.js", "Express.js", "REST API"}',
    tools:
      '{"Git", "GitHub", "Docker", "Postman", "Linux", "Vite"}',
    database:
      '{"MySQL", "PostgreSQL", "Supabase", "Firebase"}',
    available: "true",
  };

  return (
    <section id="about" className="py-16 flex justify-center">
      <div className="max-w-5xl w-full px-6 space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          About Me
        </motion.h2>

        <div className="max-w-2xl space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-zinc-400 leading-relaxed text-sm sm:text-base"
          >
            I am a Computer Science graduate with a Bachelor's
            Degree in Informatics Engineering from{" "}
            <span className="text-white font-medium">
              Universitas Dipa Makassar
            </span>
            . I hold a Sarjana Komputer (S.Kom.) degree and
            specialize in software engineering and modern web
            application development.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-zinc-400 leading-relaxed text-sm sm:text-base"
          >
            As a{" "}
            <span className="text-white font-medium">
              Software Engineer
            </span>
            , I develop applications using Laravel, Next.js,
            React, Vue.js, Svelte, TypeScript, and Node.js.
            I focus on building maintainable software,
            reliable backend systems, and user-friendly interfaces.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-zinc-500 leading-relaxed text-sm sm:text-base"
          >
            I was involved in{" "}
            <span className="text-white font-medium">
              UKM KeDai Computerworks
            </span>
            , a student organization focused on technology,
            programming, and digital innovation.
            My experience includes Scientific Staff,
            Scientific Coordinator, and{" "}
            <span className="text-white font-medium">
              Vice Chairman II (2025–2026)
            </span>
            . Through these roles, I contributed to technical
            programs, collaboration, and organizational development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 pt-2"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs rounded-full bg-white/10 text-zinc-300 border border-white/10"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-4 rounded-lg bg-zinc-900 border border-white/10 p-4 text-xs sm:text-sm font-mono text-zinc-400 overflow-x-auto"
          >
            <p>
              <span className="text-blue-400">public class</span>{" "}
              <span className="text-yellow-300">Profile</span>{" "}
              <span>{"{"}</span>
            </p>

            {[
              ["String", "name", profile.name],
              ["String", "role", profile.role],
              ["String", "location", profile.location],
              ["String[]", "frontend", profile.frontend],
              ["String[]", "backend", profile.backend],
              ["String[]", "tools", profile.tools],
              ["String[]", "database", profile.database],
              ["boolean", "available", profile.available],
            ].map(([type, key, value]) => (
              <p key={key} className="pl-4">
                <span className="text-blue-400">{type}</span>{" "}
                <span className="text-white">{key}</span>
                <span> = </span>
                <span className="text-green-400">{value}</span>;
              </p>
            ))}

            <p>{"}"}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Gallery />
          <UniversityGallery />
        </motion.div>
      </div>
    </section>
  );
}
