"use client"

import "@/app/globals.css";
import CustomCursor from "@/components/CustomCursor";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

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
      <body className={`text-primary-text-light dark:text-primary-text-dark`}>
        <CustomCursor />
        <ThemeProvider defaultTheme="dark" attribute={'class'}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
