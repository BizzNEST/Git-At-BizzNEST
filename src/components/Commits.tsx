import SectionHeading from "./SectionHeading";

const COMMIT_TYPES = [
  { name: "feat", desc: "A new feature for the application user: a new module, new functionality." },
  { name: "fix", desc: "Bug fix to production code. GitHub issues, fixing a bug." },
  { name: "docs", desc: "Documentation changes: comments, README files." },
  { name: "style", desc: "Code formatting only. Not CSS. Reformatting, adding semicolons." },
  { name: "refactor", desc: "Refactor of production code: upgrading a package and adapting to it, renaming a let or const." },
  { name: "test", desc: "Unit testing only. Creating or refactoring tests, no production code changes." },
  { name: "chore", desc: "Updating gulp, webpack, package.json. Developer-facing only." },
  { name: "workaround", desc: "Temporary fix until a more robust solution is found." },
];

const SPLIT_EXAMPLE = [
  { note: "git add the app.component files", cmd: 'git commit -m "refactor(app-component): import user service and add routes"' },
  { note: "git add the login files", cmd: 'git commit -m "feat(login): create/setup"' },
];

const labelClass = "text-xs font-bold uppercase tracking-[0.08em] text-ink-faint";

/** Section 03. Commit message format, the 8 types, and one scope per commit. */
export default function Commits() {
  return (
    <section id="commits" className="flex scroll-mt-16 flex-col gap-8 desk:scroll-mt-0">
      <SectionHeading num="03" title="Commits">
        Our convention is based on the Karma Runner project. Small commits, one
        scope each, so they are easy to find, reason about, and revert.
      </SectionHeading>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] items-start gap-8">
        <div className="flex flex-col gap-3.5">
          <h3 className="text-lg font-bold">Format</h3>
          <div className="rounded-lg bg-ink px-[18px] py-4 font-mono text-base leading-[1.6] text-cream">
            <span className="text-green-mint">type</span>(
            <span className="text-amber">scope</span>):
            <span className="text-cream">subject</span>
            <br />
            <span className="text-ink-ghost">(blank line)</span>
            <br />
            <span className="text-ink-pale">body — optional</span>
          </div>
          <ul className="flex list-disc flex-col gap-2 pl-[18px] text-base leading-normal text-ink-soft">
            <li>
              <strong className="text-ink">scope</strong>: one or two words in
              parentheses narrowing what changed
            </li>
            <li>
              <strong className="text-ink">subject</strong>: imperative mood, present
              tense, starts with a verb, no period at the end. Think newspaper
              headline.
            </li>
            <li>
              <strong className="text-ink">body</strong>: only when it helps — a new
              package, a build change, context a future developer needs, or a note
              to your senior developer on the last commit of a PR.
            </li>
          </ul>
          <div className="mt-1.5 flex flex-col gap-2">
            <div className={labelClass}>Examples</div>
            <div className="rounded-lg bg-sand px-4 py-3 font-mono text-sm leading-[1.7] [overflow-wrap:anywhere]">
              refactor(app-component): import user service and add routes
              <br />
              feat(login): create/setup
              <br />
              fix(uploader): handle empty files. resolves #111
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <h3 className="text-lg font-bold">The 8 types</h3>
          <p className="text-[15px] leading-normal text-ink-dim">
            These are your only options.
          </p>
          <div className="flex flex-col overflow-hidden rounded-[10px] border border-line bg-white">
            {COMMIT_TYPES.map((type) => (
              <div
                key={type.name}
                className="grid grid-cols-[110px_1fr] items-baseline gap-3.5 border-b border-sand px-4 py-3"
              >
                <code className="text-sm font-semibold text-green">{type.name}</code>
                <div className="text-[15px] leading-[1.45] text-ink-soft">{type.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3.5 rounded-xl border border-line bg-white p-7">
        <div className={labelClass}>One scope per commit</div>
        <p className="max-w-[720px] text-base leading-[1.55] text-ink-soft text-pretty">
          You changed <code className="text-sm">app.component.ts</code>,{" "}
          <code className="text-sm">app.router.ts</code>,{" "}
          <code className="text-sm">login.component.ts</code>, and{" "}
          <code className="text-sm">login.component.scss</code>. That is two
          scopes, so it is two commits:
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-3">
          {SPLIT_EXAMPLE.map((item) => (
            <div
              key={item.note}
              className="flex flex-col gap-2 rounded-lg border border-line p-4"
            >
              <div className="text-[13px] text-ink-dim">{item.note}</div>
              <code className="text-[13px] leading-normal text-ink">{item.cmd}</code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
