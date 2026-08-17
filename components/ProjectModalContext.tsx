"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { Project } from "@/lib/content";

type ProjectModalContextValue = {
  active: Project | null;
  openProject: (project: Project, trigger: HTMLElement | null) => void;
  closeProject: () => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
};

const ProjectModalContext = createContext<ProjectModalContextValue | null>(null);

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openProject = useCallback((project: Project, el: HTMLElement | null) => {
    triggerRef.current = el;
    setActive(project);
  }, []);

  const closeProject = useCallback(() => {
    setActive(null);
  }, []);

  const value = useMemo(
    () => ({ active, openProject, closeProject, triggerRef }),
    [active, openProject, closeProject]
  );

  return (
    <ProjectModalContext.Provider value={value}>
      {children}
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  const ctx = useContext(ProjectModalContext);
  if (!ctx) {
    throw new Error("useProjectModal must be used within ProjectModalProvider");
  }
  return ctx;
}
