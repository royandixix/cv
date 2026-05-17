"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  FolderOpen,
  Mail,
  Menu,
  X,
  Code2,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      {/* DESKTOP */}
      <aside className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col items-center gap-6 px-3 py-6 rounded-2xl
        bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg">

          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-[1px] h-8 bg-white/10" />

          <nav className="flex flex-col gap-6">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative flex items-center justify-center"
                >
                  <div className="p-2 rounded-lg text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition">
                    <Icon size={18} />
                  </div>

                  <span className="absolute left-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition text-xs text-white whitespace-nowrap">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="w-[1px] h-8 bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-zinc-500" />
        </div>
      </aside>

      {/* MOBILE TOP BAR */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">

          <div className="font-semibold text-white">
            Software <span className="text-zinc-500">Engineer</span>
          </div>

          {/* 🔥 ANIMATED TOGGLE BUTTON */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="text-white relative w-10 h-10 flex items-center justify-center"
            whileTap={{ scale: 0.85 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
            />

            {/* panel */}
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed left-0 top-0 h-full w-80 bg-black/90 backdrop-blur-xl border-r border-white/10 z-50 p-6"
            >
              {/* PROFILE */}
              <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/images/WhatsApp Image 2026-05-16 at 12.49.26 AM.jpeg"
                      alt="profile"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <div className="text-white text-sm font-medium">
                      Roy Andi
                    </div>
                    <div className="text-zinc-400 text-xs">
                      Software Engineer
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3 text-xs text-zinc-400">
                  <Code2 size={14} />
                  <span>Fullstack Web Developer</span>
                </div>
              </div>

              {/* LINKS */}
              <nav className="flex flex-col gap-2">
                {links.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition"
                    >
                      <Icon size={18} />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </nav>

              {/* FOOTER */}
              <div className="absolute bottom-6 left-6 right-6 text-xs text-zinc-500">
                Built with Next.js & Tailwind
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}