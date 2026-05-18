"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";

const logos = [
  {
    img: "/images/logo/475321714_592303350245855_6142034357472628366_n.jpg",
    alt: "KeDai Computerworks Logo",
  },
];

export default function UniversityGallery() {
  return (
    <section className="w-full py-20 flex justify-center">
      <div className="max-w-5xl w-full px-6">
        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          <div className="md:ml-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Organizational Activities
            </h2>

            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              Documentation of my journey in UKM KeDai Computerworks.
            </p>
          </div>

          <div className="hidden md:block" />
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LOGO */}
          <div className="flex justify-start md:justify-center">
            {logos.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80"
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain"
                  priority
                />
              </motion.div>
            ))}
          </div>

          {/* TEXT + BUTTONS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl font-semibold text-white">
              KeDai Computerworks
            </h3>

            <p className="mt-3 text-sm text-zinc-400 leading-relaxed max-w-md">
              A student organization focused on technology development,
              collaboration, and hands-on learning in software engineering and
              computer science projects.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3 mt-6">
              {/* WEBSITE */}
              <a
                href="https://kedai.or.id/"
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
                href="https://www.instagram.com/kd_computerworks/"
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
