"use client"

import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Lenis from 'lenis';
import { useEffect, useState } from "react";
import 'lenis/dist/lenis.css';
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function easeOutBack(x: number): number {
  const c1 = 1.70158;
  const c3 = c1 + 1;

  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      easing: easeOutBack,
    })

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <title>Radion | AI Automation Partner</title>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CustomCursor />
        <ThemeProvider enableSystem={true} attribute={'class'}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
