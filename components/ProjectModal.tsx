"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  modalBackdropVariants,
  modalPanelVariants,
  staggerContainer,
  fadeUp,
} from "@/lib/motion";
import { useProjectModal } from "./ProjectModalContext";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function ProjectModal() {
  const { active, closeProject, triggerRef } = useProjectModal();
  const reduced = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = "project-modal-title";

  // Lock body scroll while open, and reliably unlock on every close path
  // (✕, backdrop click, Escape, or unmount).
  useEffect(() => {
    if (!active) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [active]);

  // Escape to close.
  useEffect(() => {
    if (!active) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeProject();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [active, closeProject]);

  // Focus trap + initial focus, restore focus to trigger on close.
  useEffect(() => {
    if (!active) return;
    const panel = panelRef.current;
    const previouslyFocused = triggerRef.current;

    const focusables = panel?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    focusables?.[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !panel) return;
      const nodes = panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [active, triggerRef]);

  const bodyContainer = staggerContainer(!!reduced, 0.04);
  const bodyItem = fadeUp(!!reduced, 12);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="backdrop"
          onClick={closeProject}
          initial="hidden"
          animate="show"
          exit="exit"
          variants={modalBackdropVariants}
          className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-[color-mix(in_srgb,var(--ink)_62%,transparent)] px-[clamp(12px,4vw,40px)] py-[clamp(12px,4vh,48px)] backdrop-blur-md"
        >
          <motion.div
            key="panel"
            ref={panelRef}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            variants={modalPanelVariants(!!reduced)}
            className="m-auto w-full max-w-modal overflow-hidden rounded-dialog bg-paper text-ink shadow-[0_30px_80px_rgba(0,0,0,.35)]"
          >
            <div className="flex items-start justify-between gap-5 border-b border-line px-[clamp(22px,3.4vw,36px)] pb-[clamp(18px,2.4vw,24px)] pt-[clamp(22px,3.4vw,34px)]">
              <div className="min-w-0">
                <div className="mb-3 font-mono text-xs uppercase tracking-[0.06em] text-accent">
                  {active.kind}
                </div>
                <h3
                  id={titleId}
                  className="m-0 font-display text-fluid-modal font-extrabold leading-[1.08] tracking-[-0.03em]"
                >
                  {active.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeProject}
                aria-label="Close"
                className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-full border border-line font-mono text-[17px] leading-none transition-colors hover:bg-[color-mix(in_srgb,var(--ink)_8%,transparent)]"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-video w-full border-b border-line bg-[color-mix(in_srgb,var(--ink)_7%,var(--paper))]">
              <Image
                src={active.image}
                alt={`${active.name} mockup`}
                fill
                unoptimized
                className="object-cover"
                sizes="860px"
              />
            </div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={bodyContainer}
              className="flex flex-col gap-[clamp(24px,3vw,32px)] p-[clamp(22px,3.4vw,36px)]"
            >
              <motion.div variants={bodyItem}>
                <div className="mb-3 font-mono text-xs uppercase tracking-[0.06em] text-muted">
                  Overview
                </div>
                <p className="m-0 text-[16.5px] leading-[1.65] text-ink">
                  {active.detail}
                </p>
              </motion.div>

              <motion.div variants={bodyItem}>
                <div className="mb-3.5 font-mono text-xs uppercase tracking-[0.06em] text-muted">
                  Tech stack
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {active.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line px-3.5 py-2 font-mono text-[12.5px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={bodyItem}
                className="flex flex-wrap gap-3 pt-[clamp(6px,1vw,10px)]"
              >
                <a
                  href={active.link}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-paper"
                >
                  {active.linkLabel} <span className="font-mono">↗</span>
                </a>
                <button
                  type="button"
                  onClick={closeProject}
                  className="inline-flex items-center rounded-full border border-ink px-6 py-3.5 text-[15px] font-semibold"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
