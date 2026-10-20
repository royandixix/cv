
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Download } from "lucide-react";
import Swal from "sweetalert2";

export default function Hero() {
  const handleDownloadCV = async () => {
    const files = {
      id_pdf: {
        href: "/cv/Royandi_CV_Indonesia_ATS.pdf",
        name: "Royandi_CV_Indonesia_ATS.pdf",
      },
      en_pdf: {
        href: "/cv/Royandi_CV_English_ATS.pdf",
        name: "Royandi_CV_English_ATS.pdf",
      },
      id_word: {
        href: "/cv/Royandi_CV_Indonesia_ATS.docx",
        name: "Royandi_CV_Indonesia_ATS.docx",
      },
      en_word: {
        href: "/cv/Royandi_CV_English_ATS.docx",
        name: "Royandi_CV_English_ATS.docx",
      },
    };

    const result = await Swal.fire({
      title: "Download CV",
      text: "Select language and format",
      input: "select",
      inputOptions: {
        id_pdf: "Bahasa Indonesia (PDF)",
        en_pdf: "English (PDF)",
        id_word: "Bahasa Indonesia (Word)",
        en_word: "English (Word)",
      },
      inputValue: "id_pdf",
      background: "#09090b",
      color: "#ffffff",
      showCancelButton: true,
      confirmButtonText: "Download",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#ffffff",
      cancelButtonColor: "#27272a",
    });

    if (!result.isConfirmed || typeof result.value !== "string") {
      return;
    }

    if (!(result.value in files)) {
      return;
    }

    const file = files[result.value as keyof typeof files];

    const link = document.createElement("a");
    link.href = file.href;
    link.download = file.name;

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 13) % 100}%`,
              position: "absolute",
            }}
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-44 h-44 md:w-56 md:h-56 z-10"
      >
        <Image
          src="/images/WhatsApp Image 2026-05-16 at 12.49.26 AM.jpeg"
          alt="Royandi Profile"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-full object-cover border border-white/10 shadow-2xl"
        />
      </motion.div>

      <div className="text-center md:text-left space-y-5 max-w-2xl z-10">
        <p className="text-zinc-400">Hi, I am</p>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
          Royandi, S.Kom.
        </h1>

        <p className="text-xl text-zinc-300">
          Software Engineer
        </p>

        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed max-w-xl">
          I am a Software Engineer based in Mamuju, West Sulawesi,
          Indonesia. I develop modern and scalable software using
          Laravel, React, Next.js, Vue.js, Svelte, and TypeScript.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-5">
          <a
            href="https://github.com/royandixix"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition duration-300 shadow-lg"
          >
            <GitBranch size={18} />
            GitHub
          </a>

          <button
            type="button"
            onClick={handleDownloadCV}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition duration-300"
          >
            <Download size={18} />
            Download CV
          </button>

          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-white hover:border-zinc-400 hover:bg-white/5 transition duration-300"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
