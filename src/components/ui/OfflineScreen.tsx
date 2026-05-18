"use client";

import { WifiOff, RefreshCcw, FileText } from "lucide-react";

export default function OfflineScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center px-6 text-center">
      <div className="max-w-md w-full">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-xl">
            <WifiOff size={34} className="text-white" />
          </div>
        </div>

        <h1 className="mt-8 text-3xl font-bold text-white">
          You are Offline
        </h1>

        <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
          No internet connection detected. Please check your network and try again.
        </p>

        <div className="mt-10 flex flex-col gap-3">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
          >
            <RefreshCcw size={18} />
            Retry Connection
          </button>

          <a
            href="/cv/roy-andi-cv.pdf"
            target="_blank"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white hover:bg-white/5 transition"
          >
            <FileText size={18} />
            View My CV
          </a>
        </div>

        <p className="mt-10 text-xs text-zinc-600 tracking-widest uppercase">
          Stay connected to explore my portfolio
        </p>
      </div>
    </div>
  );
}