"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

import OfflineScreen from "@/components/ui/OfflineScreen";

import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!mounted) return null;

  if (!isOnline) {
    return <OfflineScreen />;
  }

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[9999] bg-black overflow-hidden"
          >
            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />

            {/* GRID */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, white 1px, transparent 1px),
                  linear-gradient(to bottom, white 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* FLOAT LIGHT */}
            <motion.div
              animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/3 w-72 h-72 bg-white/5 blur-3xl rounded-full"
            />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-white/10 blur-2xl" />
                <div className="relative w-24 h-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                  <Code2 size={40} className="text-white" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-10 text-4xl sm:text-5xl font-bold tracking-tight text-white"
              >
                Roy Andi
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-3 text-zinc-400 text-sm sm:text-base"
              >
                Fullstack Web Developer & Software Engineer
              </motion.p>

              {/* LOADING DOTS */}
              <div className="flex items-center gap-2 mt-12">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                    className="w-2.5 h-2.5 rounded-full bg-white"
                  />
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-6 text-zinc-500 text-sm tracking-[0.2em] uppercase"
              >
                Loading Portfolio
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && isOnline && (
        <main className="flex flex-col gap-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}