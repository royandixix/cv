"use client";

import { useEffect, useState } from "react";
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
  Braces,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  // ================= SCROLL SPY =================
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => ({
        id: link.href.replace("#", ""),
        element: document.getElementById(
          link.href.replace("#", "")
        ),
      }));

      const scrollPosition =
        window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        if (!section.element) return;

        const offsetTop = section.element.offsetTop;
        const height = section.element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <aside className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <div
          className="
            flex flex-col items-center gap-6 px-3 py-6 rounded-2xl
            bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg
          "
        >
          {/* TOP DOT */}
          <div className="w-2 h-2 rounded-full bg-white" />

          {/* LINE */}
          <div className="w-[1px] h-8 bg-white/10" />

          {/* NAV */}
          <nav className="flex flex-col gap-6">
            {links.map((link) => {
              const Icon = link.icon;

              const isActive =
                activeSection === link.href.replace("#", "");

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative flex items-center justify-center"
                >
                  {/* ACTIVE BACKGROUND */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="
                      absolute inset-0 rounded-xl
                      bg-white/10 border border-white/10
                    "
                  />

                  {/* ICON */}
                  <div
                    className={`
                      relative z-10 p-2 rounded-lg
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-zinc-500 group-hover:text-white"
                      }
                    `}
                  >
                    <Icon size={18} />
                  </div>

                  {/* TOOLTIP */}
                  <span
                    className={`
                      absolute left-12 whitespace-nowrap text-xs
                      transition-all duration-300
                      ${
                        isActive
                          ? "opacity-100 text-white translate-x-1"
                          : "opacity-0 text-zinc-400 group-hover:opacity-100 group-hover:translate-x-1"
                      }
                    `}
                  >
                    {link.name}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* LINE */}
          <div className="w-[1px] h-8 bg-white/10" />

          {/* BOTTOM DOT */}
          <div
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${
                activeSection === "contact"
                  ? "bg-white"
                  : "bg-zinc-500"
              }
            `}
          />
        </div>
      </aside>

      {/* ================= MOBILE HEADER ================= */}
      <header
        className="
          md:hidden fixed top-0 left-0 w-full z-50
          backdrop-blur-xl bg-black/40 border-b border-white/10
        "
      >
        <div className="flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-2 font-semibold text-white">
            <Braces size={16} className="text-zinc-400" />
            Software <span className="text-zinc-500">Engineer</span>
          </div>

          {/* TOGGLE BUTTON */}
          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            className="
              relative w-10 h-10
              flex items-center justify-center
              text-white
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="
                fixed inset-0 bg-black/60
                z-40 md:hidden
              "
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              className="
                fixed left-0 top-0 h-full w-80
                z-50 md:hidden
                bg-black/90 backdrop-blur-xl
                border-r border-white/10 p-6
              "
            >
              {/* PROFILE */}
              <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">

                  <div className="relative w-11 h-11">
                    <Image
                      src="/images/WhatsApp Image 2026-05-16 at 12.49.26 AM.jpeg"
                      alt="profile"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-white text-sm font-medium">
                      Roy Andi
                    </h3>

                    <p className="text-zinc-400 text-xs">
                      Software Engineer
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 text-xs text-zinc-400">
                  <Code2 size={14} />
                  <span>Fullstack Web Developer</span>
                </div>
              </div>

              {/* LINKS */}
              <nav className="flex flex-col gap-2">
                {links.map((link) => {
                  const Icon = link.icon;

                  const isActive =
                    activeSection === link.href.replace("#", "");

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`
                        flex items-center gap-3
                        px-4 py-3 rounded-xl
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-white/10 border border-white/10 text-white"
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      <Icon size={18} />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </nav>

              {/* FOOTER */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs text-zinc-500">
                  Built with Next.js & Tailwind CSS
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}