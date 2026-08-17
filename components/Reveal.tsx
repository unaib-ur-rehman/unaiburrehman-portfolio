"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  distance?: number;
  delay?: number;
};

/**
 * Shared scroll-reveal wrapper: fades content up into place the first time
 * it enters the viewport. Falls back to a plain opacity fade (and never
 * leaves content invisible) when `prefers-reduced-motion` is set.
 */
export function Reveal({
  distance = 20,
  delay = 0,
  children,
  ...rest
}: RevealProps) {
  const reduced = useReducedMotion();
  const variants = fadeUp(!!reduced, distance);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
