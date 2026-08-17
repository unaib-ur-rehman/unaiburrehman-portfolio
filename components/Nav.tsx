"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Dev" },
  { href: "#design", label: "Design" },
  { href: "#certifications", label: "Certs" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-x-5 gap-y-2.5 bg-paper/88 backdrop-blur-md transition-[border-color] duration-300"
      style={{
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
      }}
    >
      <motion.div
        animate={{ paddingTop: scrolled ? 12 : 18, paddingBottom: scrolled ? 12 : 18 }}
        transition={{ duration: 0.25 }}
        className="flex w-full flex-wrap items-center justify-between gap-x-5 gap-y-2.5 px-[clamp(18px,5vw,64px)]"
      >
        <a
          href="#top"
          className="flex flex-none items-center gap-2.5 font-display text-[clamp(15px,4vw,18px)] font-extrabold tracking-[-0.02em]"
        >
          <span className="h-[9px] w-[9px] flex-none rounded-full bg-accent" />
          Unaib ur Rehman
        </a>
        <div className="flex flex-wrap items-center gap-x-[clamp(14px,2.5vw,34px)] gap-y-2 font-mono text-[12.5px] tracking-[0.02em]">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="opacity-[.72] transition-opacity hover:opacity-100">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-ink px-[15px] py-[7px] transition-colors hover:bg-ink hover:text-paper"
          >
            Get in touch
          </a>
          <ThemeToggle />
        </div>
      </motion.div>
    </nav>
  );
}
