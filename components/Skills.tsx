"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Reveal } from "./Reveal";

export function Skills() {
  const reduced = useReducedMotion();
  const item = fadeUp(!!reduced);
  const container = staggerContainer(!!reduced);

  return (
    <section
      id="skills"
      className="border-t border-line py-[clamp(50px,9vh,96px)] [scroll-margin-top:90px]"
    >
      <Reveal className="mb-[clamp(30px,5vh,54px)] font-mono text-[13px] uppercase tracking-[0.06em] text-muted">
        <span className="text-accent">02</span> — Engineering &amp; Design Stack
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-[clamp(24px,4vw,56px)]">
        {skills.map((group) => (
          <motion.div
            key={group.title}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={container}
          >
            <motion.h3
              variants={item}
              className="mb-[18px] flex items-baseline gap-2.5 font-display text-xl font-bold tracking-[-0.01em]"
            >
              <span className="font-mono text-xs text-accent">{group.no}</span>
              {group.title}
            </motion.h3>
            <ul className="m-0 flex flex-wrap gap-2 p-0">
              {group.items.map((skillItem) => (
                <motion.li
                  key={skillItem}
                  variants={item}
                  className="list-none rounded-full border border-line px-3 py-1.5 font-mono text-[12.5px] text-muted"
                >
                  {skillItem}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
