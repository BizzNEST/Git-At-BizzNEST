import SectionHeading from "./SectionHeading";

const MISTAKES = [
  { bad: "fix-bug", good: "ar-111-fix-uploader", mono: true },
  { bad: "Fixed the uploader.", good: "fix(uploader): handle empty files", mono: true },
  { bad: "One commit touching login and app routing", good: "Two commits, one per scope", mono: false },
  { bad: "update(uploader): tweak", good: "Only the 8 types: feat fix docs style refactor test chore workaround", mono: true },
  { bad: "console.log left in, commented-out code left behind", good: "Clean it up before you push", mono: false },
  { bad: "API key hardcoded in source", good: "Put it in .env and never commit that file", mono: false },
  { bad: "Pulling from origin, then running the old node_modules", good: "Run npm i every time you pull", mono: false },
  { bad: "Three cards sitting in In Progress", good: "Finish before starting; update cards daily", mono: false },
];

const labelClass = "text-[11px] font-bold uppercase tracking-[0.08em]";

/** Section 07. Eight avoid/do pairs reviewers send back most often. */
export default function CommonMistakes() {
  return (
    <section id="mistakes" className="flex scroll-mt-16 flex-col gap-7 desk:scroll-mt-0">
      <SectionHeading num="07" title="Common mistakes">
        The things reviewers send back most often.
      </SectionHeading>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-3">
        {MISTAKES.map((item) => {
          const font = item.mono ? "font-mono" : "";
          return (
            <div
              key={item.bad}
              className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] overflow-hidden rounded-[10px] border border-line bg-white"
            >
              <div className="flex flex-col gap-1.5 border-r border-sand px-4 py-3.5">
                <div className={`${labelClass} text-red`}>Avoid</div>
                <div className={`text-sm leading-[1.45] text-ink-soft [overflow-wrap:anywhere] ${font}`}>
                  {item.bad}
                </div>
              </div>
              <div className="flex flex-col gap-1.5 bg-paper-soft px-4 py-3.5">
                <div className={`${labelClass} text-green`}>Do</div>
                <div className={`text-sm leading-[1.45] text-ink [overflow-wrap:anywhere] ${font}`}>
                  {item.good}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
