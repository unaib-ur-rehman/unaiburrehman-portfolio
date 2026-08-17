"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/content";
import { EASE } from "@/lib/motion";

const eyebrowVariants = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const lineWrapperVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

function lineVariants(reduced: boolean) {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.3 } },
    };
  }
  return {
    hidden: { y: "100%" },
    show: { y: "0%", transition: { duration: 0.8, ease: EASE } },
  };
}

function footerRowVariants(reduced: boolean) {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.06, delayChildren: 0.5 },
      },
    };
  }
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.06, delayChildren: 0.5 },
    },
  };
}

function fadeUpItem(reduced: boolean) {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.4 } },
    };
  }
  return {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };
}

const HEADLINE_LINES = ["Full-Stack", "Developer &"];

export function Hero() {
  const reduced = useReducedMotion();
  const line = lineVariants(!!reduced);
  const footerRow = footerRowVariants(!!reduced);
  const fadeItem = fadeUpItem(!!reduced);

  return (
    <header
      id="top"
      className="mx-auto max-w-content px-[clamp(20px,5vw,64px)] pb-[clamp(50px,9vh,90px)] pt-[clamp(60px,12vh,130px)]"
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={eyebrowVariants}
        className="mb-[clamp(24px,5vh,46px)] flex flex-wrap items-center gap-x-3.5 gap-y-2.5 font-mono text-[12.5px] uppercase tracking-[0.08em] text-muted"
      >
        <span className="h-px w-[26px] bg-muted" />
        PORTFOLIO — 2026
        <span className="ml-auto inline-flex items-center gap-2 whitespace-nowrap">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {!reduced && (
              <motion.span
                className="absolute h-2 w-2 rounded-full bg-accent"
                animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            )}
          </span>
          Available for work
        </span>
      </motion.div>

      <motion.h1
        initial="hidden"
        animate="show"
        variants={lineWrapperVariants}
        transition={{ delayChildren: 0.15 }}
        className="m-0 font-display text-fluid-hero font-extrabold leading-[0.92] tracking-[-0.035em]"
      >
        {HEADLINE_LINES.map((text) => (
          <span key={text} className="block overflow-hidden">
            <motion.span variants={line} className="inline-block">
              {text === "Developer &" ? (
                <>
                   <span className="text-accent">Developer</span>
                </>
              ) : (
                text
              )}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="show"
        variants={footerRow}
        className="mt-[clamp(34px,6vh,58px)] flex flex-wrap items-end justify-between gap-x-[clamp(24px,4vw,60px)] gap-y-6"
      >
        <motion.p
          variants={fadeItem}
          className="m-0 max-w-[540px] text-[clamp(17px,1.5vw,20px)] leading-[1.55] text-ink"
        >
          I&apos;m <strong className="font-semibold">{profile.name}</strong> — an
          experienced full-stack developer who also designs. I build products
          end to end: React front ends, Node.js APIs, and the interfaces that
          hold them together.
        </motion.p>
        <motion.div variants={fadeItem} className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 rounded-full border border-ink bg-ink px-6 py-3.5 text-[15px] font-semibold text-paper transition-colors duration-200 hover:bg-paper hover:text-ink"
          >
            View work{" "}
            <span className="inline-block font-mono transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-ink px-6 py-3.5 text-[15px] font-semibold transition-colors duration-200 hover:bg-ink hover:text-paper"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>
    </header>
  );
}
