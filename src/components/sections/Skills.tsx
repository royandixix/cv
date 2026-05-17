"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vue.js",
        "Angular",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        "Laravel",
        "Node.js",
        "PHP",
        "Supabase",
        "Firebase",
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        "MySQL",
        "Supabase",
        "Firebase",
      ],
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: [
        "Git",
        "Docker",
        "Postman",
        "Linux",
        "Figma",
        "Vite",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 flex justify-center">
      <div className="max-w-6xl w-full px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-3">
            Expertise
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Skills & Technologies
          </h2>

          <p className="text-zinc-400 max-w-2xl mt-5 text-base sm:text-lg leading-relaxed">
            A modern technology stack focused on building scalable,
            high-performance, and user-friendly digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl 
                border border-white/10 bg-white/[0.03] p-7
                hover:bg-white/[0.05] transition duration-300"
              >
                <div className="relative z-10">

                  <div
                    className="w-12 h-12 rounded-2xl bg-white/10 
                    border border-white/10 flex items-center justify-center mb-5"
                  >
                    <Icon size={22} className="text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-5">
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full text-sm
                        bg-white/5 border border-white/10
                        text-zinc-300 hover:text-white hover:bg-white/10
                        transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}   