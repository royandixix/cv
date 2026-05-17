"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const gallery = [
  {
    img: "/images/2df115a1-2f0b-42e4-ba86-818f0393c964.jpeg",
    title: "IT Workshop Session",
    desc: "Hands-on training on modern web development and programming fundamentals inside KeDai Computerworks.",
  },
  {
    img: "/images/9d77fc7f-4eb9-44e8-b2f3-52925caa826d.jpeg",
    title: "Scientific Division Meeting",
    desc: "Strategic discussion for project planning, research direction, and organizational development.",
  },
  {
    img: "/images/fd5b6793-8cdb-4b3e-a428-d89a81054b2d.jpeg",
    title: "Team Collaboration",
    desc: "Collaborative development of technology-based solutions with fellow members.",
  },
  {
    img: "/images/WhatsApp Image 2026-05-16 at 2.24.02 AM.jpeg",
    title: "Team Collaboration",
    desc: "Collaborative development of technology-based solutions with fellow members.",
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<(typeof gallery)[0] | null>(null);

  return (
    <section className="w-full py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Organizational Activities
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-400">
          Documentation of my journey in UKM KeDai Computerworks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedItem(item)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md shadow-xl cursor-pointer transition-colors duration-300 hover:border-zinc-700"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-zinc-900/80 px-2.5 py-1 text-[10px] font-medium text-zinc-300 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-zinc-700/50">
                View Details
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </div>

            <div className="p-5 flex-grow flex flex-col justify-between bg-zinc-900/30">
              <div className="space-y-2">
                <h3 className="text-white font-semibold text-base tracking-tight transition-colors duration-300 group-hover:text-blue-400">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2 group-hover:text-zinc-300 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl cursor-default"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-zinc-900/80 p-2 text-zinc-400 hover:text-white backdrop-blur-md border border-zinc-800 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative h-64 sm:h-96 w-full">
                <Image
                  src={selectedItem.img}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6 sm:p-8 bg-zinc-900/80 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {selectedItem.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}