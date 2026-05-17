"use client";

import { motion } from "framer-motion";
import Gallery from "@/components/ui/Gallery";
import UniversityGallery from "@/components/ui/UniversityGallery";

export default function About() {
  const skills = [
    "Laravel",
    "React",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Vue.js",
    "Node.js",
    "Docker",
  ];

  const profile = {
    name: '"Royan Dixix"',
    role: '"Freelance Full-Stack Web Developer"',
    location: '"Mamuju, West Sulawesi, Indonesia"',
    frontend:
      '{"React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "TypeScript"}',
    backend: '{"Laravel", "Node.js", "Supabase", "Firebase"}',
    tools: '{"Git", "Docker", "Figma", "Postman", "Linux", "Vite"}',
    database: '{"MySQL", "Supabase", "Firebase"}',
    available: "true; // open to remote work & global opportunities",
  };

  return (
    <section id="about" className="py-16 flex justify-center">
      <div className="max-w-5xl w-full px-6 space-y-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          About Me
        </motion.h2>

        {/* CONTENT WRAPPER */}
        <div className="max-w-2xl space-y-4">

          {/* INTRO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-zinc-400 leading-relaxed text-sm sm:text-base"
          >
            I am a Computer Science student at{" "}
            <span className="text-white font-medium">
              Universitas Dipa Makassar
            </span>
            , Class of 2022, majoring in{" "}
            <span className="text-white font-medium">
              Informatics Engineering
            </span>
            . I focus on building modern, scalable, and high-performance web applications
            as a Fullstack Web Developer and Software Engineer.
          </motion.p>

          {/* ORGANIZATION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-zinc-500 leading-relaxed text-sm sm:text-base"
          >
            I am actively involved in{" "}
            <span className="text-white font-medium">
              UKM KeDai Computerworks
            </span>
            . I started as <span className="text-white">Scientific Staff (2024–2025)</span>,
            then became <span className="text-white">Scientific Coordinator</span>,
            and currently serve as <span className="text-white">Vice Chairman II (2025–2026)</span>.
          </motion.p>

          {/* SKILLS */}
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

          {/* CODE BLOCK */}
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
              ["String ", "name     ", profile.name],
              ["String ", "role     ", profile.role],
              ["String ", "location ", profile.location],
              ["String[]", "frontend ", profile.frontend],
              ["String[]", "backend  ", profile.backend],
              ["String[]", "tools    ", profile.tools],
              ["String[]", "database ", profile.database],
              ["boolean ", "available", profile.available],
            ].map(([type, key, value], i) => (
              <p key={i} className="pl-4">
                <span className="text-blue-400">{type}</span>{" "}
                <span className="text-white">{key}</span>
                <span> = </span>
                <span className="text-green-400">{value}</span>
                {!key.includes("available") && ";"}
              </p>
            ))}

            <p>{"}"}</p>
          </motion.div>
        </div>

        {/* GALLERY (OUTSIDE max-w-2xl BUT STILL CLEAN) */}
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