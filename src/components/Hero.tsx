import { NAV_ITEMS } from "./nav-items";

/** Quick links shown under the hero copy, by section id (from the design's heroLinks). */
const HERO_LINK_IDS = ["branches", "commits", "pull-requests", "mistakes", "cheatsheet"];

const heroLinks = HERO_LINK_IDS.map((id) => {
  const index = NAV_ITEMS.findIndex((item) => item.id === id);
  return {
    id,
    num: String(index + 1).padStart(2, "0"),
    label: NAV_ITEMS[index].label.replace(" & reviews", ""),
  };
});

/** Green intro card at the top of the page. */
export default function Hero() {
  return (
    <header className="relative flex flex-col gap-7 overflow-hidden rounded-[14px] bg-green-deep px-5 py-7 text-white min-[521px]:px-7 min-[521px]:py-8 desk:rounded-[20px] desk:px-[52px] desk:py-12">
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 size-80 rounded-full bg-green opacity-55"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-30 right-30 size-65 rounded-full bg-green-mint opacity-18"
      />

      <div className="relative flex max-w-[640px] flex-col gap-4">
        <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-green-pale">
          For new associates
        </div>
        <h1 className="text-[32px] font-bold leading-[1.05] tracking-[-0.02em] text-white min-[521px]:text-[38px] desk:text-[52px]">
          Git at BizzNEST
        </h1>
        <p className="text-lg leading-normal text-green-tint text-pretty desk:text-[19px]">
          How we branch, commit, open pull requests, review code, and track work.
          Read it once top to bottom; keep the cheat sheet at the end open while
          you work.
        </p>
      </div>

      <div className="relative flex flex-wrap gap-2">
        {heroLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="flex items-center gap-2 rounded-full border border-white/28 bg-white/12 px-3.5 py-2 text-sm font-semibold text-white hover:bg-white hover:text-green-deep hover:no-underline"
          >
            <span className="font-mono text-[11px] opacity-80">{link.num}</span>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
