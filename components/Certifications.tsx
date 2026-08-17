"use client";

import { motion, useReducedMotion } from "framer-motion";
import { certifications } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Reveal } from "./Reveal";

export function Certifications() {
  const reduced = useReducedMotion();
  const item = fadeUp(!!reduced);
  const container = staggerContainer(!!reduced);

  return (
    <section
      id="certifications"
      className="border-t border-line py-[clamp(50px,9vh,96px)] [scroll-margin-top:90px]"
    >
      <Reveal className="mb-[clamp(30px,5vh,54px)] font-mono text-[13px] uppercase tracking-[0.06em] text-muted">
        <span className="text-accent">07</span> — Certifications
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={container}
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] gap-[clamp(16px,2vw,24px)]"
      >
        {certifications.map((cert, i) => (
          <motion.div
            key={`${cert.name}-${cert.year}-${i}`}
            variants={item}
            whileHover={{ y: -3, borderColor: "var(--accent)" }}
            className="flex min-h-[170px] flex-col gap-3.5 rounded-card border border-line p-[clamp(22px,2.6vw,30px)]"
          >
            <div className="flex items-center justify-between font-mono text-xs text-muted">
              <span className="text-accent">{cert.issuer}</span>
              <span>{cert.year}</span>
            </div>
            <h3 className="mb-auto font-display text-[clamp(19px,1.9vw,23px)] font-bold leading-[1.25] tracking-[-0.02em]">
              {cert.name}
            </h3>
            <span className="border-t border-line pt-3 font-mono text-xs text-muted">
              {cert.id}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
