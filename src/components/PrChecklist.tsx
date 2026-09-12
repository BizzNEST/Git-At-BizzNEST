"use client";

import { useMemo, useSyncExternalStore } from "react";
import SectionHeading from "./SectionHeading";

const ITEMS = [
  "There is a GitHub issue for this work and it is on the board",
  "Branch is named <initials>-<issue#>-<description> and was created off development",
  "Branch is up to date with development",
  "Code does what the linked issue describes",
  "Variable and function names are clear and descriptive",
  "No console.log statements left in the code",
  "No hardcoded values that should be in environment variables",
  "No commented-out code left behind",
  "Commit messages follow type(scope):subject, one scope per commit",
  "Changes are tested and working",
  "PR template filled out completely, issue linked (Closes #…), at least two reviewers assigned including a lead or admin",
  "Card moved to In Review",
];

const STORAGE_KEY = "bn-git-checklist";
const EMPTY = "{}";

type Checked = Record<number, boolean>;

// A tiny store around localStorage so React can read it safely on the client
// and fall back to an empty list on the server.
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY) || EMPTY;
  } catch {
    return EMPTY;
  }
}

function getServerSnapshot() {
  return EMPTY;
}

function write(next: Checked) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage can be unavailable (private mode); nothing else to do.
  }
  listeners.forEach((listener) => listener());
}

function parse(raw: string): Checked {
  try {
    return JSON.parse(raw) as Checked;
  } catch {
    return {};
  }
}

/** Section 08. A tick-off checklist that remembers your progress in this browser. */
export default function PrChecklist() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const checked = useMemo(() => parse(raw), [raw]);

  const toggle = (i: number) => write({ ...checked, [i]: !checked[i] });
  const reset = () => write({});

  const done = ITEMS.filter((_, i) => checked[i]).length;

  return (
    <section id="checklist" className="flex scroll-mt-16 flex-col gap-6 desk:scroll-mt-0">
      <SectionHeading num="08" title="Before you open a PR">
        Run through this yourself. It is the same list your reviewers use.
      </SectionHeading>

      <div className="flex max-w-[760px] flex-col overflow-hidden rounded-xl border border-line bg-white">
        {ITEMS.map((text, i) => {
          const on = !!checked[i];
          return (
            <label
              key={text}
              className={`flex cursor-pointer items-start gap-3.5 border-b border-sand px-5 py-3.5 hover:bg-paper ${
                on ? "bg-paper-soft" : "bg-white"
              }`}
            >
              <input
                type="checkbox"
                checked={on}
                onChange={() => toggle(i)}
                className="mt-0.5 size-[18px] flex-none accent-green"
              />
              <div
                className={`text-base leading-[1.45] ${
                  on ? "text-ink-faint line-through" : "text-ink"
                }`}
              >
                {text}
              </div>
            </label>
          );
        })}
        <div className="flex items-center justify-between bg-paper px-5 py-3.5 text-sm text-ink-dim">
          <span>
            {done} of {ITEMS.length} checked
          </span>
          <button
            type="button"
            onClick={reset}
            className="cursor-pointer rounded-md border border-line bg-transparent px-3 py-1.5 text-[13px] text-ink-soft hover:border-green hover:text-green"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
