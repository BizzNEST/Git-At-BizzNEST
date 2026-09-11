import SectionHeading from "./SectionHeading";

const PR_FLOW = [
  { title: "Branch off development", cmd: "git checkout -b ar-111-fix-uploader" },
  { title: "Commit your work", cmd: 'git commit -m "fix(uploader):…"' },
  { title: "Push", cmd: "git push" },
  { title: "Open PR → development", cmd: "card → In Review" },
  { title: "Review, approve, merge", cmd: "card → Done, close issue" },
];

const UPDATE_FLOW = [
  { title: "Check out development", cmd: "git checkout development" },
  { title: "Pull", cmd: "git pull" },
  { title: "Back to your branch", cmd: "git checkout your-branch-name" },
  { title: "Merge development in", cmd: "git merge development" },
];

const cardClass =
  "flex flex-col rounded-xl border border-line bg-white p-7";
const labelClass =
  "text-xs font-bold uppercase tracking-[0.08em] text-ink-faint";
const chipClass =
  "rounded bg-sand px-1.5 py-px";

/** Section 02. Gitflow branches, naming, where PRs go, and staying current. */
export default function Branches() {
  return (
    <section id="branches" className="flex scroll-mt-16 flex-col gap-8 desk:scroll-mt-0">
      <SectionHeading num="02" title="Branches">
        We follow Gitflow. Three long-lived branches, and short-lived task
        branches off <code className={`${chipClass} text-[15px]`}>development</code>.
      </SectionHeading>

      <div className={`${cardClass} gap-[18px]`}>
        <div className={labelClass}>How branches relate</div>
        <BranchDiagram />
        <p className="text-sm leading-normal text-ink-dim">
          Hotfixes are the one exception: they branch off{" "}
          <code className="text-[13px]">main</code> and merge back into both{" "}
          <code className="text-[13px]">main</code> (tagged) and{" "}
          <code className="text-[13px]">development</code>.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] items-start gap-8">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-lg font-bold">Naming</h3>
          <div className="rounded-lg bg-ink px-[18px] py-3.5 font-mono text-base text-cream [overflow-wrap:anywhere]">
            &lt;initials&gt;-&lt;issue#&gt;-&lt;small-description&gt;
          </div>
          <ul className="flex list-disc flex-col gap-1.5 pl-[18px] text-base leading-normal text-ink-soft">
            <li>
              <strong className="text-ink">initials</strong>: yours, so everyone can
              see who owns the branch
            </li>
            <li>
              <strong className="text-ink">issue#</strong>: the GitHub issue number
              the branch relates to
            </li>
            <li>
              <strong className="text-ink">small-description</strong>: usually no
              more than 3 words
            </li>
          </ul>
          <p className="text-[15px] leading-normal text-ink-dim">
            Alex fixing a bug on issue 111:{" "}
            <code className={`${chipClass} text-sm`}>ar-111-fix-uploader</code>
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <h3 className="text-lg font-bold">Where PRs go</h3>
          <ul className="flex list-disc flex-col gap-1.5 pl-[18px] text-base leading-normal text-ink-soft">
            <li>
              Task branch → <code className="text-sm">development</code>, reviewed by
              another developer
            </li>
            <li>
              <code className="text-sm">development</code> →{" "}
              <code className="text-sm">staging</code> when code is locked in for a
              demo
            </li>
            <li>
              <code className="text-sm">development</code> →{" "}
              <code className="text-sm">main</code> when code is ready to deploy
            </li>
            <li>
              Hotfixes branch off <code className="text-sm">main</code>, then merge
              back into <code className="text-sm">main</code> (tagged) and{" "}
              <code className="text-sm">development</code>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${cardClass} gap-4`}>
        <div className={labelClass}>Feature branch → PR → development</div>
        <div className="flex flex-col">
          {PR_FLOW.map((step, i) => {
            const last = i === PR_FLOW.length - 1;
            return (
              <div
                key={step.title}
                className="grid grid-cols-[28px_minmax(0,1fr)] items-start gap-x-4"
              >
                <div className="flex flex-col items-center self-stretch">
                  <div className="flex size-7 flex-none items-center justify-center rounded-full bg-green font-mono text-[13px] font-bold text-white">
                    {i + 1}
                  </div>
                  {!last && <div className="my-1 w-0.5 flex-1 bg-green-line" />}
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)] items-baseline gap-y-1 pb-[22px] pt-[3px] min-[641px]:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
                  <div className="flex min-w-0 items-baseline gap-3">
                    <div className="flex-none text-base font-bold leading-[1.4]">
                      {step.title}
                    </div>
                    <div
                      aria-hidden="true"
                      className="hidden min-w-4 flex-1 -translate-y-[5px] border-t border-dashed border-green-line min-[641px]:block"
                    />
                  </div>
                  <div className="font-mono text-sm leading-[1.4] text-green [overflow-wrap:anywhere] min-[641px]:pl-3">
                    {step.cmd}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${cardClass} gap-4`}>
        <div className="flex flex-col gap-1.5">
          <div className={labelClass}>Keeping your branch up to date</div>
          <p className="text-[15px] leading-normal text-ink-dim">
            Pull the latest <code className="text-sm">development</code>, then merge
            it into your branch.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 min-[1101px]:grid-cols-4">
          {UPDATE_FLOW.map((step, i) => (
            <div key={step.title} className="flex min-w-0 flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <div className="flex size-[22px] flex-none items-center justify-center rounded-full bg-green font-mono text-xs font-bold text-white">
                  {i + 1}
                </div>
                <div className="text-sm font-semibold">{step.title}</div>
              </div>
              <div className="flex-1 rounded-lg bg-ink px-3.5 py-3 font-mono text-[13px] text-cream [overflow-wrap:anywhere]">
                {step.cmd}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BranchDiagram() {
  return (
    <svg
      viewBox="0 0 760 262"
      role="img"
      aria-label="Gitflow diagram: task branches leave development and merge back through a PR; development merges up to staging for demos and to main for deploys"
      className="block h-auto w-full"
    >
      <defs>
        <marker
          id="bn-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0 0L10 5L0 10z" fill="#2f7a55" />
        </marker>
      </defs>
      <g className="font-mono" fontSize="14" fontWeight="600">
        <text x="0" y="45" fill="#1f1d19">main</text>
        <text x="0" y="105" fill="#4a463f">staging</text>
        <text x="0" y="165" fill="#2f7a55">development</text>
        <text x="0" y="225" fill="#1f5c3e">ar-111-…</text>
      </g>
      <g className="font-sans" fontSize="12" fill="#9a948a">
        <text x="0" y="61">production-ready</text>
        <text x="0" y="121">demo-ready</text>
        <text x="0" y="181">your working base</text>
        <text x="0" y="241">task branch</text>
      </g>
      <g strokeWidth="2" strokeLinecap="round">
        <line x1="150" y1="40" x2="750" y2="40" stroke="#1f1d19" />
        <line x1="150" y1="100" x2="750" y2="100" stroke="#4a463f" />
        <line x1="150" y1="160" x2="750" y2="160" stroke="#2f7a55" />
        <line x1="270" y1="220" x2="430" y2="220" stroke="#8fd1ac" />
      </g>
      <g fill="none" stroke="#2f7a55" strokeWidth="2" markerEnd="url(#bn-arrow)">
        <path d="M215 160 C 245 160, 240 220, 268 220" />
        <path d="M432 220 C 460 220, 455 160, 483 160" />
        <path d="M540 160 C 570 160, 565 100, 593 100" />
        <path d="M620 160 C 665 160, 655 40, 700 40" />
      </g>
      <g stroke="#fff" strokeWidth="2">
        <circle cx="215" cy="160" r="6" fill="#2f7a55" />
        <circle cx="320" cy="220" r="6" fill="#2f7a55" />
        <circle cx="375" cy="220" r="6" fill="#2f7a55" />
        <circle cx="430" cy="220" r="6" fill="#2f7a55" />
        <circle cx="487" cy="160" r="6" fill="#2f7a55" />
        <circle cx="540" cy="160" r="6" fill="#2f7a55" />
        <circle cx="598" cy="100" r="6" fill="#4a463f" />
        <circle cx="620" cy="160" r="6" fill="#2f7a55" />
        <circle cx="705" cy="40" r="6" fill="#1f1d19" />
      </g>
      <g className="font-mono" fontSize="13" fill="#6b665c">
        <text x="150" y="140">git checkout -b</text>
        <text x="330" y="250" textAnchor="middle" fill="#9a948a">commits</text>
        <text x="455" y="250" textAnchor="middle">PR → development</text>
        <text x="567" y="88" textAnchor="middle">demo</text>
        <text x="665" y="28" textAnchor="middle">deploy</text>
      </g>
    </svg>
  );
}
