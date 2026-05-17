"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GitBranch,
  Download,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zinc-700/20 blur-3xl rounded-full" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-52 h-52 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl" />

            <Image
              src="/images/WhatsApp Image 2026-05-16 at 12.49.26 AM.jpeg"
              alt="Roy Profile"
              fill
              priority
              className="rounded-full object-cover border border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>

        <div className="space-y-6 text-center md:text-left">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-zinc-400 text-sm uppercase tracking-[0.2em]"
          >
            Fullstack Web Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl font-black tracking-tight leading-none"
          >
            Roy Andi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl text-zinc-300"
          >
            Software Engineer & Modern Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-zinc-500 leading-relaxed max-w-xl"
          >
            I build scalable, modern, and high-performance web
            applications using Next.js, React, Laravel,
            TypeScript, and Node.js.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
          >
            <a
              href="https://github.com/royandixix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full 
              bg-white text-black font-semibold hover:scale-105 
              transition duration-300 shadow-xl"
            >
              <GitBranch size={18} />
              GitHub
            </a>

            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full 
              border border-white/10 bg-white/5 hover:bg-white/10
              backdrop-blur-xl transition duration-300"
            >
              <Download size={18} />
              Download CV
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-full 
              border border-zinc-700 hover:border-white/40
              hover:bg-white/5 transition duration-300"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}