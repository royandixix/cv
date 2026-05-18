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
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("intro-seen");

    if (!seen) {
      setLoading(true);

      const timer = setTimeout(() => {
        sessionStorage.setItem("intro-seen", "true");
        setLoading(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;

  if (!isOnline) return <OfflineScreen />;

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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />

            <motion.div
              animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/3 w-72 h-72 bg-white/5 blur-3xl rounded-full"
            />

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
              <div className="w-24 h-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                <Code2 size={40} className="text-white" />
              </div>

              <h1 className="mt-10 text-4xl sm:text-5xl font-bold text-white">
                Roy Andi
              </h1>

              <p className="mt-3 text-zinc-400">
                Fullstack Web Developer & Software Engineer
              </p>

              <div className="flex items-center gap-2 mt-12">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>

              <p className="mt-6 text-zinc-500 text-sm uppercase tracking-widest">
                Loading Portfolio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
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