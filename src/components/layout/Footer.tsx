
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  FileText,
  MapPin,
  ArrowUpRight,
  Code2,
} from "lucide-react";

export default function Footer() {
  const linkClass =
    "flex items-center gap-2 text-zinc-400 hover:text-white transition";

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
              Royandi, S.Kom.
            </h2>

            <p className="text-sm text-zinc-400 max-w-md">
              Software Engineer
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <MapPin size={14} />
              Mamuju, Sulawesi Barat, Indonesia
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href="https://github.com/royandixix"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <Code2 size={16} />
              GitHub
              <ArrowUpRight size={12} />
            </a>

            <a
              href="mailto:randiroyandi@gmail.com"
              className={linkClass}
            >
              <Mail size={16} />
              Email
              <ArrowUpRight size={12} />
            </a>

            <a
              href="/cv/Royandi_CV_Indonesia_ATS.pdf"
              download
              className={linkClass}
            >
              <FileText size={16} />
              CV Indonesia
              <ArrowUpRight size={12} />
            </a>

            <a
              href="/cv/Royandi_CV_English_ATS.pdf"
              download
              className={linkClass}
            >
              <FileText size={16} />
              CV English
              <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.div>

        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-zinc-500 gap-2">
          <p>© 2026 Royandi. All rights reserved.</p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
