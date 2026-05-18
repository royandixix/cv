"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-44 h-44 md:w-56 md:h-56"
    >
      {/* glow background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-2xl" />

      <Image
        src="/images/WhatsApp%20Image%202026-05-16%20at%202.24.02%20AM.jpeg"
        alt="Profile"
        fill
        sizes="(max-width: 768px) 176px, 224px"
        className="rounded-full object-cover border border-white/10 shadow-xl relative z-10"
      />
    </motion.div>
  );
}
