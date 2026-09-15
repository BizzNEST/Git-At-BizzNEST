import SectionHeading from "./SectionHeading";

const noteClass =
  "rounded-[10px] border p-[18px] text-[15px] leading-normal";

/** Section 06. Creating a repo, setting up locally, and the three rules to remember. */
export default function RepoSetup() {
  return (
    <section id="setup" className="flex scroll-mt-16 flex-col gap-8 desk:scroll-mt-0">
      <SectionHeading num="06" title="Repo setup & tooling" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] items-start gap-8">
        <div className="flex flex-col gap-3.5">
          <h3 className="text-lg font-bold">Creating a repository</h3>
          <ul className="flex list-disc flex-col gap-2 pl-[18px] text-base leading-normal text-ink-soft">
            <li>
              Create it under the <strong className="text-ink">BizzNEST</strong>{" "}
              organization using the <code className="text-sm">BizzNEST/.github</code>{" "}
              template. Leave &quot;Include all branches&quot; unselected.
            </li>
            <li>
              Name it for the topic and scope, lowercase with hyphens:{" "}
              <code className="text-sm">tesla-map</code>,{" "}
              <code className="text-sm">cool-app-api</code>.
            </li>
            <li>Write a description that defines the repo&apos;s scope.</li>
            <li>
              Visibility is <strong className="text-ink">Private</strong>. Always.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3.5">
          <h3 className="text-lg font-bold">Local environment</h3>
          <div className="rounded-lg bg-ink px-[18px] py-4 font-mono text-sm leading-[1.8] text-cream [overflow-wrap:anywhere]">
            <span className="text-ink-ghost"># clone with the HTTPS or SSH URL</span>
            <br />
            git clone https://github.com/BizzNEST/your-repo.git
            <br />
            <span className="text-ink-ghost"># install dependencies</span>
            <br />
            npm i
            <br />
            <span className="text-ink-ghost"># create .env in root for secrets</span>
            <br />
            <span className="text-ink-ghost"># run the dev server</span>
            <br />
            npm start
          </div>
          <p className="text-[15px] leading-normal text-ink-dim">
            VS Code extensions: Prettier for formatting, Live Server for preview.
            Mac setup: Homebrew, nvm, VS Code.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
        <div className={`${noteClass} border-rose-line bg-rose text-rose-deep`}>
          <strong>Never</strong> push <code className="text-sm">.env</code> or{" "}
          <code className="text-sm">credentials.json</code> to GitHub.
        </div>
        <div className={`${noteClass} border-line bg-white text-ink-soft`}>
          Run <code className="text-sm">npm i</code> every time you pull from origin
          so your dependencies match.
        </div>
        <div className={`${noteClass} border-line bg-white text-ink-soft`}>
          Keep repo visibility <strong className="text-ink">Private</strong>.
        </div>
      </div>
    </section>
  );
}
