"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { handleAnchorClick } from "@/lib/scroll";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Dev" },
  // { href: "#design", label: "Design" },
  { href: "#certifications", label: "Certs" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu if the viewport grows past the mobile breakpoint,
  // so it never gets stuck open behind the desktop layout.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = () => setMenuOpen(false);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  function onLinkClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    handleAnchorClick(e, id, !!reduced);
    setMenuOpen(false);
  }

  return (
    <nav
      className="sticky top-0 z-50 bg-paper/88 backdrop-blur-md transition-[border-color] duration-300"
      style={{
        borderBottom: `1px solid ${scrolled || menuOpen ? "var(--line)" : "transparent"}`,
      }}
    >
      <motion.div
        animate={{ paddingTop: scrolled ? 12 : 18, paddingBottom: scrolled ? 12 : 18 }}
        transition={{ duration: 0.25 }}
        className="flex w-full items-center justify-between gap-5 px-[clamp(18px,5vw,64px)]"
      >
        <a
          href="#top"
          onClick={(e) => onLinkClick(e, "top")}
          className="flex flex-none items-center gap-2.5 font-display text-[clamp(15px,4vw,18px)] font-extrabold tracking-[-0.02em]"
        >
          <span className="h-[9px] w-[9px] flex-none rounded-full bg-accent" />
          Unaib ur Rehman
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-x-[clamp(14px,2.5vw,34px)] font-mono text-[12.5px] tracking-[0.02em] md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => onLinkClick(e, link.href.slice(1))}
              className="opacity-[.72] transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => onLinkClick(e, "contact")}
            className="rounded-full border border-ink px-[15px] py-[7px] transition-colors hover:bg-ink hover:text-paper"
          >
            Get in touch
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex flex-none items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            className="relative flex h-8 w-8 flex-none items-center justify-center"
          >
            <span
              className="absolute h-[1.5px] w-5 bg-ink transition-transform duration-200"
              style={{
                transform: menuOpen
                  ? "translateY(0) rotate(45deg)"
                  : "translateY(-4px) rotate(0deg)",
              }}
            />
            <span
              className="absolute h-[1.5px] w-5 bg-ink transition-transform duration-200"
              style={{
                transform: menuOpen
                  ? "translateY(0) rotate(-45deg)"
                  : "translateY(4px) rotate(0deg)",
              }}
            />
          </button>
        </div>
      </motion.div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-[clamp(18px,5vw,64px)] py-4 font-mono text-[13px] tracking-[0.02em]">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => onLinkClick(e, link.href.slice(1))}
                  className="border-b border-line py-3 opacity-80 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => onLinkClick(e, "contact")}
                className="mt-4 w-full rounded-full border border-ink px-[15px] py-3 text-center transition-colors hover:bg-ink hover:text-paper"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
