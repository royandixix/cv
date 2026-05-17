"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >

        {/* NUMBER */}
        <h1 className="text-6xl font-bold text-white">
          404
        </h1>

        {/* TEXT */}
        <p className="mt-3 text-zinc-400 text-sm">
          Page not found. The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* BUTTON */}
        <Link
          href="/"
          className="inline-block mt-6 px-5 py-3 rounded-lg bg-white text-black text-sm font-medium hover:opacity-80 transition"
        >
          Back to Home
        </Link>

      </motion.div>
    </div>
  );
}