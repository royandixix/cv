"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  ArrowUpRight,
} from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 flex justify-center"
    >
      <div className="max-w-5xl w-full px-6">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-3"
        >
          Portfolio
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-5 text-zinc-400 max-w-2xl leading-relaxed"
        >
          All of my projects and development work are available
          on GitHub. Explore repositories, source code, and
          experiments I have built.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          href="https://github.com/royandixix"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3
          px-7 py-4 rounded-full
          bg-white text-black font-semibold
          hover:scale-105 transition duration-300"
        >
          <GitBranch size={20} />

          github.com/royandixix

          <ArrowUpRight
            size={18}
            className="group-hover:translate-x-1 transition"
          />
        </motion.a>

      </div>
    </section>
  );
}