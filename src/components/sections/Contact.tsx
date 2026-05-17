"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className=" flex justify-center">
      <div className="max-w-5xl w-full px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Contact
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-zinc-400 max-w-2xl"
        >
          Feel free to reach out for collaboration, freelance work, or just say hello.
        </motion.p>

        {/* BOX */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 flex flex-col gap-4 max-w-md"
        >

          {/* EMAIL */}
          <a
            href="mailto:yourmail@gmail.com"
            className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <Mail size={18} />
            <span className="text-sm text-zinc-300">
              yourmail@gmail.com
            </span>
          </a>

          {/* GITHUB (PAKAI CODE2, BUKAN GITHUB ICON) */}
          <a
            href="https://github.com/royandixix"
            target="_blank"
            className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <Code2 size={18} />
            <span className="text-sm text-zinc-300">
              github.com/royandixix
            </span>
          </a>

          {/* CTA */}
          <a
            href="mailto:yourmail@gmail.com"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
          >
            <Send size={18} />
            Send Message
          </a>

        </motion.div>

      </div>
    </section>
  );
}