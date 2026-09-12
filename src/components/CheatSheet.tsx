"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

const GROUPS = [
  {
    title: "Start a task",
    cmds: ["git checkout development", "git pull", "git checkout -b <initials>-<issue#>-<description>"],
  },
  {
    title: "Save work",
    cmds: ["git add .", 'git commit -m "type(scope):subject"', "git push"],
  },
  {
    title: "Stay current",
    cmds: ["git checkout development", "git pull", "git checkout your-branch-name", "git merge development"],
  },
  {
    title: "Set up a repo",
    cmds: ["git clone https://github.com/BizzNEST/your-repo.git", "npm i", "npm start"],
  },
];

const REMINDERS = [
  { title: "Branch", code: "<initials>-<issue#>-<desc>", small: false },
  { title: "Commit", code: "type(scope):subject", small: false },
  { title: "Types", code: "feat fix docs style refactor test chore workaround", small: true },
];

const labelClass = "text-xs font-bold uppercase tracking-[0.08em] text-ink-faint";

/** Section 09. Click-to-copy commands and the three things to remember. */
export default function CheatSheet() {
  const [copied, setCopied] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = (text: string) => {
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
    setCopied(text);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(null), 1200);
  };

  return (
    <section id="cheatsheet" className="flex scroll-mt-16 flex-col gap-6 desk:scroll-mt-0">
      <SectionHeading num="09" title="Cheat sheet">
        Click any command to copy it.
      </SectionHeading>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-5">
        {GROUPS.map((group) => (
          <div key={group.title} className="flex flex-col gap-2.5">
            <div className={labelClass}>{group.title}</div>
            <div className="flex flex-col gap-1.5">
              {group.cmds.map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  title="Copy"
                  onClick={() => copy(cmd)}
                  className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg border border-ink bg-ink px-3.5 py-[11px] text-left font-mono text-[13px] leading-[1.4] text-cream hover:border-green hover:bg-ink-hover"
                >
                  <span className="truncate">{cmd}</span>
                  <span className="flex-none font-sans text-xs text-green-mint">
                    {copied === cmd ? "Copied" : "Copy"}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
        {REMINDERS.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-1.5 rounded-[10px] border border-line bg-white px-[18px] py-4"
          >
            <div className={labelClass}>{item.title}</div>
            <code className={item.small ? "text-[13px] leading-normal" : "text-sm"}>
              {item.code}
            </code>
          </div>
        ))}
      </div>

      <p className="max-w-[640px] text-[15px] leading-normal text-ink-dim">
        Blocked for more than 45 minutes? Post in your team channel. Want to
        improve these standards? Open an issue in the Standards &amp; Practices
        repo.
      </p>
    </section>
  );
}
