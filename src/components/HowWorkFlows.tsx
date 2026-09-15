"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    title: "Issue",
    desc: "Every task starts as a GitHub issue with a description and labels. Add it to the project board and assign it to yourself when you start.",
    cmd: "Issues → New issue → add to Projects → Backlog",
    href: "board",
    link: "Project board",
  },
  {
    title: "Branch",
    desc: "Branch off development. Name it with your initials, the issue number, and a short description.",
    cmd: "git checkout -b ar-111-fix-uploader",
    href: "branches",
    link: "Branches",
  },
  {
    title: "Commit",
    desc: "Small commits, one scope each. Type, scope, and an imperative subject with no period.",
    cmd: 'git commit -m "fix(uploader): handle empty files"',
    href: "commits",
    link: "Commits",
  },
  {
    title: "Pull request",
    desc: "Open a PR into development. Fill out every section of the template, link the issue, and assign two reviewers including a lead or admin.",
    cmd: "Closes #111  ·  card → In Review",
    href: "pull-requests",
    link: "Pull requests",
  },
  {
    title: "Review",
    desc: "Reviewers respond within 24 hours. Address every comment, push new commits, and re-request review.",
    cmd: "git push  →  Re-request review",
    href: "pull-requests",
    link: "Code review",
  },
  {
    title: "Merge & close",
    desc: "Merge after approval. Move the card to Done and close the issue.",
    cmd: "Merge pull request  ·  card → Done",
    href: "board",
    link: "Project board",
  },
];

/**
 * Section 01. Six steps down a vertical rail. The green rail fills as you
 * scroll, and each step fades in the first time it comes into view.
 */
export default function HowWorkFlows() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>(() => STEPS.map(() => false));

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (window.innerHeight * 0.6 - rect.top) / rect.height));
      setProgress(Math.round(ratio * 100));

      const rows = el.querySelectorAll<HTMLElement>("[data-flow-step]");
      setRevealed((prev) => {
        let changed = false;
        const next = prev.map((on, i) => {
          if (on) return true;
          const row = rows[i];
          const show = !!row && row.getBoundingClientRect().top < window.innerHeight * 0.85;
          if (show) changed = true;
          return show;
        });
        return changed ? next : prev;
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="start" className="flex scroll-mt-16 flex-col gap-7 desk:scroll-mt-0">
      <SectionHeading num="01" title="How work flows">
        Every piece of work follows the same six steps. Scroll through them once;
        each one has its own section further down.
      </SectionHeading>

      <div className="flex flex-col pt-2">
        <div ref={stepsRef} className="relative flex min-w-0 flex-col">
          <div className="absolute bottom-0 left-[17px] top-0 w-0.5 bg-line desk:left-[35px]" />
          <div
            className="absolute left-[17px] top-0 w-0.5 bg-green transition-[height] duration-250 ease-linear motion-reduce:transition-none desk:left-[35px]"
            style={{ height: `${progress}%` }}
          />

          {STEPS.map((step, i) => {
            const on = revealed[i];
            const last = i === STEPS.length - 1;
            return (
              <div
                key={step.title}
                data-flow-step={i}
                className={`relative grid grid-cols-[52px_minmax(0,1fr)] items-start gap-x-2 desk:grid-cols-[72px_minmax(0,1fr)] ${
                  last ? "pb-0" : "pb-10 desk:pb-14"
                }`}
              >
                <div
                  className={`relative z-[1] flex size-9 items-center justify-center rounded-full border-2 font-mono text-[13px] font-semibold transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none ${
                    on
                      ? "border-green bg-green text-white shadow-[0_0_0_6px_#e3f1e8]"
                      : "border-line bg-paper text-ink-faint shadow-[0_0_0_6px_#faf8f4]"
                  }`}
                >
                  {i + 1}
                </div>

                <div
                  className={`flex min-w-0 flex-col gap-3.5 pt-0.5 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none ${
                    on ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0"
                  }`}
                >
                  <div className="text-[26px] font-bold leading-[1.15] tracking-[-0.01em]">
                    {step.title}
                  </div>
                  <p className="max-w-[560px] text-[17px] leading-[1.55] text-ink-soft text-pretty">
                    {step.desc}
                  </p>
                  <div className="grid grid-cols-[minmax(0,1fr)] items-center justify-start gap-x-5 gap-y-3 desk:grid-cols-[minmax(0,auto)_auto]">
                    <div className="min-w-0 rounded-lg bg-ink px-4 py-3 font-mono text-sm text-cream [overflow-wrap:anywhere]">
                      {step.cmd}
                    </div>
                    <a
                      href={`#${step.href}`}
                      className="whitespace-nowrap text-[15px] font-semibold text-green"
                    >
                      {step.link} →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-[760px] rounded-[10px] bg-green-tint px-[22px] py-[18px] text-base leading-normal text-green-deep">
        <strong>One rule underneath all of it:</strong> always have a GitHub issue
        for the work you are doing, and keep its card on the project board in the
        correct column.
      </div>
    </section>
  );
}
