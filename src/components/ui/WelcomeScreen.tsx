"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function WelcomeLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="
            fixed inset-0 z-[9999]
            flex flex-col items-center justify-center
            bg-black overflow-hidden
          "
        >
          {/* Glow */}
          <div
            className="
              absolute w-[450px] h-[450px]
              rounded-full bg-white/5 blur-3xl
            "
          />

          {/* WINDOWS SPINNER */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear",
            }}
            className="relative w-16 h-16"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="
                  absolute w-2.5 h-2.5
                  rounded-full bg-white
                "
                style={{
                  top: "50%",
                  left: "50%",
                  marginLeft: "-5px",
                  marginTop: "-5px",
                  transform: `
                    rotate(${i * 45}deg)
                    translate(24px)
                  `,
                  opacity: (i + 1) / 8,
                }}
              />
            ))}
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 text-center"
          >
            <h1 className="text-3xl font-semibold text-white tracking-wide">
              Welcome
            </h1>

            <p className="mt-3 text-sm text-zinc-500">
              Loading Portfolio Experience...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}