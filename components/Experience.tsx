"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Reveal } from "./Reveal";

export function Experience() {
  const reduced = useReducedMotion();
  const item = fadeUp(!!reduced);
  const container = staggerContainer(!!reduced);

  return (
    <section
      id="work"
      className="border-t border-line py-[clamp(50px,9vh,96px)] [scroll-margin-top:90px]"
    >
      <Reveal className="mb-[clamp(30px,5vh,54px)] font-mono text-[13px] uppercase tracking-[0.06em] text-muted">
        <span className="text-accent">03</span> — Experience
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={container}
        className="flex flex-col"
      >
        {experience.map((job) => (
          <motion.div
            key={`${job.years}-${job.role}`}
            variants={item}
            className="flex flex-wrap items-baseline gap-x-[clamp(16px,4vw,48px)] gap-y-2.5 border-t border-line py-[clamp(22px,3.5vh,34px)]"
          >
            <span className="w-[110px] flex-none font-mono text-[13px] text-muted">
              {job.years}
            </span>
            <div className="order-2 min-w-0 flex-[1_1_min(100%,300px)]">
              <h3 className="mb-2 font-display text-[clamp(22px,2.4vw,30px)] font-bold tracking-[-0.02em]">
                {job.role}
              </h3>
              {/* <p className="m-0 max-w-[560px] text-base leading-[1.55] text-muted">
                {job.desc}
              </p> */}
            </div>
            <span className="order-3 ml-auto flex-[0_1_auto] text-right text-[15px] font-semibold">
              {job.company}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
