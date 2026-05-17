"use client";

import { motion } from "framer-motion";
import {
  Mail,
  FileText,
  MapPin,
  ArrowUpRight,
  Code2,
  Link,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-12">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between gap-10"
        >

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">
              Roy Andi
            </h2>

            <p className="text-sm text-zinc-400 max-w-md">
              Fullstack Developer — Next.js, React, Node.js
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <MapPin size={14} />
              Makassar, Indonesia
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm">

            <a
              href="https://github.com/royandixix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
            >
              <Code2 size={16} />
              GitHub
              <ArrowUpRight size={12} />
            </a>

            {/* EMAIL FIX GMAIL WEB */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=randiroyandi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
            >
              <Mail size={16} />
              Email
              <ArrowUpRight size={12} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
            >
              <Link size={16} />
              LinkedIn
              <ArrowUpRight size={12} />
            </a>

            <a
              href="/cv.pdf"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
            >
              <FileText size={16} />
              CV
              <ArrowUpRight size={12} />
            </a>

          </div>
        </motion.div>

        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-zinc-500 gap-2">
          <p>© 2026 Roy Andi</p>
          <p>Built with Next.js</p>
        </div>

      </div>
    </footer>
  );
}