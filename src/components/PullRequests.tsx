import SectionHeading from "./SectionHeading";

const PR_STEPS = [
  { title: "Open a PR", desc: "Follow the PR template and fill out every section.", dark: false },
  { title: "Assign two reviewers", desc: "One must be a team lead or admin.", dark: false },
  { title: "Reviewers reply in 24h", desc: "If you are assigned, make time to review promptly.", dark: true },
  { title: "Address all feedback", desc: "Make the changes, push new commits, re-request review.", dark: true },
  { title: "Merge after approval", desc: "Merge into development per the branching guidelines.", dark: false },
];

const REVIEW_CHECKLIST = [
  "Code does what the linked issue describes",
  "Variable and function names are clear and descriptive",
  "No console.log statements left in the code",
  "No hardcoded values that should be in environment variables",
  "Follows the project’s existing code style and patterns",
  "Commit messages follow the commit conventions",
  "Branch name follows the naming convention",
  "No commented-out code left behind",
  "Changes are tested and working",
];

const GIVING = [
  "Be specific: say what needs to change and why.",
  "Suggest alternatives instead of just saying “this is wrong.”",
  "Use GitHub’s suggestion feature to propose exact code changes.",
  "Keep it constructive and professional.",
];

const RECEIVING = [
  "Reviews are about the code, not you.",
  "Ask clarifying questions if you do not understand a comment.",
  "Treat every review as a learning opportunity.",
  "Thank your reviewers.",
];

const listClass =
  "flex list-disc flex-col gap-1.5 pl-[18px] text-base leading-normal text-ink-soft";

/** Section 04. The review steps, what reviewers look for, and how to give and take feedback. */
export default function PullRequests() {
  return (
    <section id="pull-requests" className="flex scroll-mt-16 flex-col gap-8 desk:scroll-mt-0">
      <SectionHeading num="04" title="Pull requests & reviews">
        Every pull request goes through a review. No exceptions.
      </SectionHeading>

      <div className="flex flex-col gap-3.5">
        <ol className="flex list-none flex-col p-0">
          {PR_STEPS.map((step, i) => {
            const last = i === PR_STEPS.length - 1;
            return (
              <li
                key={step.title}
                className="grid grid-cols-[28px_minmax(0,1fr)] items-start gap-x-4"
              >
                <div className="flex flex-col items-center self-stretch">
                  <div
                    className={`flex size-7 flex-none items-center justify-center rounded-full font-mono text-xs font-bold text-white ${
                      step.dark ? "bg-green-deep" : "bg-green"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {!last && <div className="my-1 w-0.5 flex-1 bg-green-line" />}
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)] items-baseline gap-y-1 pb-[22px] pt-[3px] min-[641px]:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
                  <div className="flex min-w-0 items-baseline gap-3">
                    <div className="flex-none text-base font-bold leading-[1.4]">
                      {step.title}
                    </div>
                    <div
                      aria-hidden="true"
                      className="hidden min-w-4 flex-1 -translate-y-[5px] border-t border-dashed border-green-line min-[641px]:block"
                    />
                  </div>
                  <div className="text-[15px] leading-normal text-ink-dim min-[641px]:pl-3">
                    {step.desc}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="flex items-center gap-2.5 text-sm leading-normal text-ink-dim">
          <span aria-hidden="true" className="font-mono text-base text-green">
            ↺
          </span>
          <span>
            Steps 03 and 04 repeat until every reviewer approves. Not approved yet?
            Push fixes and re-request review.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] items-start gap-8">
        <div className="flex flex-col gap-3.5">
          <h3 className="text-lg font-bold">What reviewers look for</h3>
          <div className="flex flex-col overflow-hidden rounded-[10px] border border-line bg-white">
            {REVIEW_CHECKLIST.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border-b border-sand px-4 py-[11px] text-[15px] leading-[1.45] text-ink-soft"
              >
                <div className="mt-[3px] size-4 flex-none rounded border-[1.5px] border-ink-pale" />
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-lg font-bold">Giving feedback</h3>
            <ul className={listClass}>
              {GIVING.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>
                Prefix optional suggestions with{" "}
                <code className="rounded bg-sand px-1.5 py-px text-sm">nit:</code> so
                the author knows it is not blocking.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="text-lg font-bold">Receiving feedback</h3>
            <ul className={listClass}>
              {RECEIVING.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
