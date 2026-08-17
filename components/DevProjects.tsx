"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { devProjects } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { useProjectModal } from "./ProjectModalContext";
import { Reveal } from "./Reveal";

export function DevProjects() {
  const reduced = useReducedMotion();
  const item = fadeUp(!!reduced);
  const container = staggerContainer(!!reduced);
  const { openProject } = useProjectModal();

  return (
    <section
      id="projects"
      className="border-t border-line py-[clamp(50px,9vh,96px)] [scroll-margin-top:90px]"
    >
      <Reveal className="mb-[clamp(30px,5vh,54px)] font-mono text-[13px] uppercase tracking-[0.06em] text-muted">
        <span className="text-accent">04</span> — Development Projects
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={container}
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] gap-[clamp(16px,2vw,24px)]"
      >
        {devProjects.map((project) => (
          <ProjectCard key={project.id} project={project} variants={item} onOpen={openProject} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({
  project,
  variants,
  onOpen,
}: {
  project: (typeof devProjects)[number];
  variants: ReturnType<typeof fadeUp>;
  onOpen: ReturnType<typeof useProjectModal>["openProject"];
}) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <motion.button
      ref={ref}
      type="button"
      variants={variants}
      whileHover={{ y: -3, borderColor: "var(--accent)" }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onOpen(project, ref.current)}
      className="flex min-h-[210px] flex-col gap-[18px] rounded-card border border-line bg-[color-mix(in_srgb,var(--ink)_3%,var(--paper))] p-[clamp(24px,3vw,34px)] text-left font-sans cursor-pointer"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-accent">{project.tag}</span>
        <span className="whitespace-nowrap font-mono text-xs text-muted">
          View details →
        </span>
      </div>
      <div className="">
        <h3 className="mb-2.5 font-display text-[clamp(22px,2.2vw,28px)] font-bold tracking-[-0.02em]">
          {project.name}
        </h3>
        <p className="m-0 text-[15.5px] leading-[1.55] text-muted">{project.desc}</p>
      </div>
    </motion.button>
  );  
}
