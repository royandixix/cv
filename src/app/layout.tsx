import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

import { cn } from "@/lib/utils";
import Providers from "./providers";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Roy Andi | Portfolio",
  description: "Frontend Developer Portfolio",
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
          <TooltipProvider>
            <Navbar />
            {children}
            <Toaster richColors position="top-right" closeButton />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
