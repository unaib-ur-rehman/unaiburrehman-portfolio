"use client";

import { motion, useReducedMotion } from "framer-motion";
import { education } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Reveal } from "./Reveal";

export function Education() {
  const reduced = useReducedMotion();
  const item = fadeUp(!!reduced);
  const container = staggerContainer(!!reduced);

  return (
    <section
      id="education"
      className="border-t border-line py-[clamp(50px,9vh,96px)] [scroll-margin-top:90px]"
    >
      <Reveal className="mb-[clamp(30px,5vh,54px)] font-mono text-[13px] uppercase tracking-[0.06em] text-muted">
        <span className="text-accent">06</span> — Education
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={container}
        className="flex flex-col"
      >
        {education.map((ed) => (
          <motion.div
            key={`${ed.years}-${ed.degree}`}
            variants={item}
            className="flex flex-wrap items-baseline gap-x-[clamp(16px,4vw,48px)] gap-y-2 border-t border-line py-[clamp(22px,3.5vh,34px)]"
          >
            <span className="w-[110px] flex-none font-mono text-[13px] text-muted">
              {ed.years}
            </span>
            <div className="min-w-0 flex-[1_1_min(100%,300px)]">
              <h3 className="mb-1.5 font-display text-[clamp(20px,2.2vw,27px)] font-bold tracking-[-0.02em]">
                {ed.degree}
              </h3>
              <p className="m-0 text-base text-muted">{ed.school}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
