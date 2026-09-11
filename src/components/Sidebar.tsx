"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "./nav-items";

/**
 * Left-rail navigation. Sticky column on desktop; collapses to a sticky
 * horizontal bar at 900px and below. The active link follows the section
 * currently in view.
 */
export default function Sidebar() {
  const [active, setActive] = useState(NAV_ITEMS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    for (const { id } of NAV_ITEMS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-10 flex items-center gap-4 overflow-x-auto overflow-y-hidden border-b border-line bg-paper px-5 py-3 desk:h-screen desk:flex-col desk:items-stretch desk:gap-5 desk:overflow-auto desk:border-b-0 desk:border-r desk:py-7 desk:pl-7 desk:pr-5"
    >
      <div className="flex flex-none flex-row items-baseline gap-2 desk:flex-col desk:items-stretch desk:gap-1">
        <div className="text-xs font-bold uppercase tracking-[0.08em] text-green">
          BizzNEST
        </div>
        <div className="hidden text-lg font-bold leading-tight desk:block">
          Git Standards
        </div>
      </div>

      <div className="flex flex-none flex-row gap-1 desk:flex-col desk:gap-0.5">
        {NAV_ITEMS.map((item, i) => {
          const on = item.id === active;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={on ? "location" : undefined}
              className={`flex items-baseline gap-2.5 whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm hover:bg-sand hover:no-underline desk:-ml-2.5 desk:py-[5px] ${
                on
                  ? "bg-green-tint font-bold text-green-deep"
                  : "bg-transparent font-normal text-ink-muted"
              }`}
            >
              <span className="hidden w-4 font-mono text-[11px] text-ink-faint desk:inline">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>

      <div className="mt-auto hidden text-xs leading-normal text-ink-faint desk:block">
        Source: BizzNEST Standards &amp; Practices repo
      </div>
    </nav>
  );
}
