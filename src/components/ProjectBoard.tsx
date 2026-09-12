import SectionHeading from "./SectionHeading";

const COLUMNS = [
  { name: "Backlog", desc: "Planned, not started.", when: "New issues land here." },
  { name: "In Progress", desc: "Actively being worked on.", when: "Move here when you assign yourself and start." },
  { name: "In Review", desc: "Open PR waiting for review.", when: "Move here when you open the PR." },
  { name: "Done", desc: "Merged and complete.", when: "Move here when the PR merges, then close the issue." },
];

const listClass =
  "flex list-disc flex-col gap-1.5 pl-[18px] text-base leading-normal text-ink-soft";

/** Section 05. The four board columns and the habits that keep the board accurate. */
export default function ProjectBoard() {
  return (
    <section id="board" className="flex scroll-mt-16 flex-col gap-8 desk:scroll-mt-0">
      <SectionHeading num="05" title="Project board">
        GitHub Projects is how we track tasks, bugs, and progress. Your lead checks
        the board during standups and weekly meetings, so keep it accurate.
      </SectionHeading>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
        {COLUMNS.map((column) => (
          <div
            key={column.name}
            className="flex min-h-[150px] flex-col gap-2.5 rounded-[10px] bg-sand p-[18px]"
          >
            <div className="text-[15px] font-bold">{column.name}</div>
            <div className="text-sm leading-[1.45] text-ink-soft">{column.desc}</div>
            <div className="mt-auto rounded-md border border-line bg-white px-3 py-2.5 text-[13px] leading-[1.4] text-ink-dim">
              {column.when}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-8">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-lg font-bold">Issues first</h3>
          <ul className={listClass}>
            <li>
              Every task starts as a GitHub issue, with a description of the work
              and labels for the type of task.
            </li>
            <li>Use the matching issue template: feature request, bug report, or epic.</li>
            <li>Add it to the board from the issue sidebar under Projects.</li>
            <li>Assign it to yourself when you start.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-lg font-bold">Daily habits</h3>
          <ul className={listClass}>
            <li>Update your cards every day.</li>
            <li>
              Link PRs to issues with keywords like{" "}
              <code className="rounded bg-sand px-1.5 py-px text-sm">Closes #12</code>{" "}
              in the PR description.
            </li>
            <li>Finish tasks before starting new ones.</li>
            <li>Blocked? Comment on the issue explaining why and mention your lead.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
