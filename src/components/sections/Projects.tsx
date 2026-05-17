"use client";

import { motion } from "framer-motion";
import { GitBranch, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 flex justify-center">
      <div className="max-w-5xl w-full px-6">

        {/* small label (replaced Portfolio) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-3"
        >
          Selected Work
        </motion.p>

        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          Projects
        </motion.h2>

        {/* description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-5 text-zinc-400 max-w-2xl leading-relaxed"
        >
          A collection of applications, systems, and experiments I’ve built
          using modern web technologies like Next.js, React, and Node.js.
        </motion.p>

        {/* github button */}
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
          hover:scale-105 transition duration-300 shadow-lg"
        >
          <GitBranch size={20} />
          View GitHub
          <ArrowUpRight
            size={18}
            className="group-hover:translate-x-1 transition"
          />
        </motion.a>

      </div>
    </section>
  );
}