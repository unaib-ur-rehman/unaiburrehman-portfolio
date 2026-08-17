"use client";

import { motion, useReducedMotion } from "framer-motion";
import { socials } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Reveal } from "./Reveal";

export function Footer() {
  const reduced = useReducedMotion();
  const item = fadeUp(!!reduced);
  const container = staggerContainer(!!reduced, 0.05);

  return (
    <footer
      id="contact"
      className="mt-[clamp(30px,6vh,60px)] bg-ink px-[clamp(20px,5vw,64px)] pb-[clamp(40px,6vh,60px)] pt-[clamp(64px,12vh,130px)] text-paper [scroll-margin-top:90px]"
    >
      <div className="mx-auto max-w-content">
        <Reveal className="mb-[clamp(24px,4vh,40px)] font-mono text-[12.5px] uppercase tracking-[0.08em] opacity-60">
          Get in touch
        </Reveal>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={item}
          className="m-0 mb-[clamp(36px,6vh,64px)] font-display text-fluid-footer font-extrabold leading-[0.95] tracking-[-0.035em]"
        >
          Let&apos;s build
          <br />
          something <span className="text-accent">bold.</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={container}
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-px overflow-hidden rounded-2xl bg-ink"
        >
          {socials.map((social) => (
            <motion.a
              key={social.label}
              variants={item}
              href={social.url}
              target="_blank"
              rel="noopener"
              whileHover={{ backgroundColor: "color-mix(in srgb, var(--paper) 8%, var(--ink))" }}
              className="flex items-center justify-between bg-ink px-6 py-[22px] shadow-[0_0_0_1px_rgba(255,255,255,.14)]"
            >
              <span className="text-base font-semibold">{social.label}</span>
              <span className="font-mono opacity-55">↗</span>
            </motion.a>
          ))}
        </motion.div>

        <div className="relative mt-[clamp(48px,8vh,80px)] flex flex-wrap items-center justify-between gap-4 border-t border-white/[.14] pt-7 font-mono text-[12.5px] opacity-60">
          <span className="whitespace-nowrap">© 2026 Unaib ur Rehman</span>
          <a href="#top" className="whitespace-nowrap opacity-100">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
