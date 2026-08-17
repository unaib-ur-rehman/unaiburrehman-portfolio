import type { Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;
export const DURATION = 0.4;

/**
 * Builds scroll/mount-reveal variants. When `reduced` is true every variant
 * collapses to a plain opacity fade so motion respects
 * `prefers-reduced-motion`.
 */
export function fadeUp(reduced: boolean, distance = 20): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.3 } },
    };
  }
  return {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION, ease: EASE },
    },
  };
}

export function fadeDown(reduced: boolean, distance = -8): Variants {
  return fadeUp(reduced, distance);
}

export function staggerContainer(reduced: boolean, stagger = 0.06, delay = 0): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 1 },
      show: { opacity: 1 },
    };
  }
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };
}

export const modalBackdropVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export function modalPanelVariants(reduced: boolean): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.2 } },
      exit: { opacity: 0, transition: { duration: 0.15 } },
    };
  }
  return {
    hidden: { opacity: 0, scale: 0.96, y: 16 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      y: 16,
      transition: { duration: 0.15, ease: EASE },
    },
  };
}

export const viewportOnce = { once: true, amount: 0.15 } as const;
