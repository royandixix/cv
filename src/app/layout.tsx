
import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import Providers from "./providers";
import WelcomeLoader from "@/components/ui/WelcomeScreen";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Royandi, S.Kom. | Software Engineer",
  description:
    "Portfolio of Royandi, S.Kom., a Software Engineer based in Mamuju, West Sulawesi, Indonesia. Experienced with Laravel, Next.js, React, Vue.js, Svelte, and TypeScript.",
  keywords: [
    "Royandi",
    "Software Engineer",
    "Fullstack Developer",
    "Laravel",
    "Next.js",
    "React",
    "Vue.js",
    "Svelte",
    "TypeScript",
    "Mamuju",
    "Sulawesi Barat",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={`
          ${inter.className}
          min-h-screen
          bg-background
          text-foreground
          antialiased
          overflow-x-hidden
          transition-colors duration-300
        `}
      >
        <Providers>
          <WelcomeLoader />
          <TooltipProvider>
            <Navbar />
            {children}
            <Toaster
              richColors
              position="top-right"
              closeButton
            />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
