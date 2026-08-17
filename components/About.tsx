import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-line py-[clamp(50px,9vh,96px)] [scroll-margin-top:90px]"
    >
      <Reveal className="flex flex-wrap gap-x-[clamp(30px,6vw,80px)] gap-y-5">
        <div className="flex-[0_1_190px] font-mono text-[13px] uppercase tracking-[0.06em] text-muted">
          <span className="text-accent">01</span> — About
        </div>
        <div className="min-w-0 flex-[1_1_min(100%,420px)]">
          <p className="mb-7 font-display text-fluid-lead font-medium leading-[1.32] tracking-[-0.02em]">
            {profile.lead}
          </p>
          <p className="mb-[34px] max-w-[620px] text-[17px] leading-[1.65] text-muted">
            {profile.body}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {profile.interests.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3.5 py-2 font-mono text-[12.5px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
