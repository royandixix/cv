"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Send, Link, FileText } from "lucide-react";

const card =
  "flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition";

export default function Contact() {
  return (
    <section id="contact" className="flex justify-center py-24">
      <div className="max-w-5xl w-full px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-zinc-400 max-w-2xl"
        >
          Feel free to reach out for collaboration or freelance work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-8 flex flex-col gap-4 max-w-md"
        >

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=randiroyandi@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className={card}
>
  <Mail size={18} />
  Email
</a>

          <a href="https://github.com/royandixix" target="_blank" className={card}>
            <Code2 size={18} />
            GitHub
          </a>

          <a href="https://linkedin.com" target="_blank" className={card}>
            <Link size={18} />
            LinkedIn
          </a>

          <a href="/cv.pdf" className={card}>
            <FileText size={18} />
            Download CV
          </a>

          <a
            href="mailto:randiroyandi@gmail.com"
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