"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 overflow-hidden"
    >
      {/* BACKGROUND DOTS (NO HYDRATION ERROR) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 13) % 100}%`,
            }}
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* PROFILE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-44 h-44 md:w-56 md:h-56"
      >
        <Image
          src="/images/WhatsApp Image 2026-05-16 at 12.49.26 AM.jpeg"
          alt="Roy Profile"
          fill
          className="rounded-full object-cover border border-white/10 shadow-2xl"
        />
      </motion.div>

      {/* TEXT */}
      <div className="text-center md:text-left space-y-5 max-w-2xl z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-zinc-400"
        >
          Hi, I am
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-bold tracking-tight"
        >
          Roy Andi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl text-zinc-300"
        >
          Fullstack Web Developer & Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm sm:text-base text-zinc-500 leading-relaxed max-w-xl"
        >
          I build modern, scalable, and high-performance web applications using
          Next.js, React, Laravel, and Node.js.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-5"
        >
          <a
            href="https://github.com/royandixix"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full 
            bg-white text-black font-medium hover:scale-105 
            transition duration-300 shadow-lg"
          >
            <GitBranch size={18} />
            GitHub
          </a>

          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full 
            border border-white/10 bg-white/5 hover:bg-white/10 
            transition duration-300"
          >
            <Download size={18} />
            Download CV
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full 
            border border-zinc-700 hover:border-zinc-400 
            hover:bg-white/5 transition duration-300"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}