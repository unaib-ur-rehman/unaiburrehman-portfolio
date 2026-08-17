"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { designProjects } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { useProjectModal } from "./ProjectModalContext";
import { Reveal } from "./Reveal";

export function DesignProjects() {
  const reduced = useReducedMotion();
  const item = fadeUp(!!reduced);
  const container = staggerContainer(!!reduced);
  const { openProject } = useProjectModal();

  return (
    <section
      id="design"
      className="border-t border-line py-[clamp(50px,9vh,96px)] [scroll-margin-top:90px]"
    >
      <Reveal className="mb-[clamp(30px,5vh,54px)] flex flex-wrap items-baseline gap-x-[18px] gap-y-2 font-mono text-[13px] uppercase tracking-[0.06em] text-muted">
        <span>
          <span className="text-accent">05</span> — UI / UX Projects
        </span>
        <span className="normal-case tracking-normal opacity-75">
          Open a case study for full details
        </span>
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={container}
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] gap-[clamp(16px,2vw,24px)]"
      >
        {designProjects.map((project) => (
          <DesignCard key={project.id} project={project} variants={item} onOpen={openProject} />
        ))}
      </motion.div>
    </section>
  );
}

function DesignCard({
  project,
  variants,
  onOpen,
}: {
  project: (typeof designProjects)[number];
  variants: ReturnType<typeof fadeUp>;
  onOpen: ReturnType<typeof useProjectModal>["openProject"];
}) {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <motion.div
      variants={variants}
      whileHover="hover"
      className="flex flex-col overflow-hidden rounded-card border border-line bg-[color-mix(in_srgb,var(--ink)_3%,var(--paper))] transition-colors duration-250 hover:border-accent"
    >
      <div className="relative w-full overflow-hidden border-b border-line bg-[color-mix(in_srgb,var(--ink)_7%,var(--paper))]">
        <div className="aspect-[4/3] w-full">
          <motion.div
            variants={{ hover: { scale: 1.03 } }}
            transition={{ duration: 0.25 }}
            className="h-full w-full"
          >
            <Image
              src={project.image}
              alt={`${project.name} mockup placeholder`}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-[clamp(20px,2.6vw,28px)]">
        <span className="font-mono text-xs text-accent">{project.tag}</span>
        <h3 className="m-0 font-display text-[clamp(21px,2.1vw,27px)] font-bold tracking-[-0.02em]">
          {project.name}
        </h3>
        <p className="m-0 text-[15.5px] leading-[1.55] text-muted">{project.desc}</p>
        <button
          ref={btnRef}
          type="button"
          onClick={() => onOpen(project, btnRef.current)}
          className="mt-2 w-fit self-start rounded-full border border-ink px-[18px] py-2.5 font-mono text-[12.5px] transition-colors duration-200 hover:bg-ink hover:text-paper"
        >
          Case study →
        </button>
      </div>
    </motion.div>
  );
}
