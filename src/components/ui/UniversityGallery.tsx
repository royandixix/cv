"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";

export default function UniversityGallery() {
  return (
    <section className="w-full py-20 flex justify-center">
      <div className="max-w-5xl w-full px-6">

        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          
          <div className="md:ml-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Universitas Dipa Makassar
            </h2>

            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              Academic journey, learning process, and campus life documentation.
            </p>
          </div>

          <div className="hidden md:block" />
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT - LOGO */}
          <div className="flex justify-start md:justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80"
            >
              <Image
                src="/images/logo/logo.png"
                alt="Universitas Dipa Makassar"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* RIGHT - TEXT + BUTTONS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl font-semibold text-white">
              Universitas Dipa Makassar
            </h3>

            <p className="mt-3 text-sm text-zinc-400 leading-relaxed max-w-md">
              Academic environment and student learning activities in Informatics Engineering.
              This represents my learning journey, campus experience, and development in software engineering fundamentals.
            </p>

            {/* BUTTONS (MATCH STYLE KAMU) */}
            <div className="flex flex-wrap gap-3 mt-6">

              {/* WEBSITE */}
              <a
                href="https://site.undipa.ac.id/"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl
                           bg-white/5 border border-white/10 text-white
                           hover:bg-white/10 transition"
              >
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 border border-white/10">
                  <Globe size={14} />
                </span>
                Website
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/undipamks/"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl
                           bg-white/5 border border-white/10 text-white
                           hover:bg-white/10 transition"
              >
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 border border-white/10">
                  <ExternalLink size={14} />
                </span>
                Instagram
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}