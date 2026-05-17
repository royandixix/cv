"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const universityGallery = [
  {
    img: "/images/183376f5-0301-4bb3-9c4c-d63230a49e4a.jpeg",
    title: "Universitas Dipa Makassar",
    desc: "Academic environment and student learning activities in Informatics Engineering.",
    tag: "Campus Life",
  },
  {
    img: "/images/23a8ebed-6375-4011-bf48-93a8958e910f.jpeg",
    title: "Campus Activity",
    desc: "Documentation of student life and academic engagement at Universitas Dipa Makassar.",
    tag: "Student Activity",
  },
];

export default function UniversityGallery() {
  return (
    <section className="w-full py-12">

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Universitas Dipa Makassar
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Academic journey, learning process, and campus life documentation.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {universityGallery.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-md hover:shadow-xl transition"
          >

            {/* IMAGE */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* OVERLAY GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition" />

            {/* CONTENT */}
            <div className="absolute bottom-0 p-5 space-y-2">
              
              {/* TAG */}
              <span className="inline-block text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/10 text-zinc-300">
                {item.tag}
              </span>

              {/* TITLE */}
              <h3 className="text-white font-semibold text-sm">
                {item.title}
              </h3>

              {/* DESCRIPTION (hidden → show on hover) */}
              <p className="text-zinc-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition duration-300 max-w-[95%]">
                {item.desc}
              </p>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}