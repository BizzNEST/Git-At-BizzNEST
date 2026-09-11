# Git-At-BizzNEST

A Next.js site that presents the BizzNEST git standards, implemented from the
Claude Design project "Git Standards" (`Git Standards.dc.html` + `support.js`).
The repo doubles as a sandbox for learning an agentic plan → build → verify → review
workflow.

## Stack

Next.js (App Router, TypeScript, `src/` dir, Turbopack, ESLint) with Tailwind CSS v4
via PostCSS. No animation library yet; add GSAP only when a section needs it.

**Read `AGENTS.md` before writing any Next.js code.** This Next version has breaking
changes from older conventions; the guides live in `node_modules/next/dist/docs/`.
`next dev` regenerates the AGENTS.md block, so commit it with your work.

- `npm run dev` — dev server
- `npm run build` — production build (also typechecks)
- `npm run lint` — ESLint

Entry: `src/app/layout.tsx` → `src/app/page.tsx`; global styles in
`src/app/globals.css`. Build each page section as its own component under
`src/components/`, one section at a time.

## Git rules

All branch, commit, issue, PR, and merge conventions live in `GIT_STANDARDS.md`.
Read it before any git or GitHub action. It is the single source of truth; do not
duplicate its rules here.

## Pipeline

Four subagents in `.claude/agents/`, driven by the `/pipeline` skill:

| Stage  | Agent           | Input             | Output                          |
|--------|-----------------|-------------------|---------------------------------|
| plan   | `issue-planner` | feature/design    | epic + child issues on GitHub   |
| build  | `builder`       | issue number      | pushed branch with commits      |
| verify | `verifier`      | issue or branch   | PR opened, or failure list      |
| review | `pr-reviewer`   | PR number         | GitHub review (approve/changes) |

Handoffs are strict: the builder never opens PRs, the verifier never edits code,
the reviewer never merges. Merging is always a human decision.

To start: `/pipeline plan "<what to build>"`, then `/pipeline build <issue#>`, and
so on. `/pipeline all "<feature>"` runs the whole chain per issue.

## Prerequisites

- GitHub CLI: `brew install gh && gh auth login` (the issue, PR, and review stages
  need it; it is not installed yet as of 2026-09-11).
- Branches: `main` (production), `staging` (demo), `development` (working base).
  Task branches are `ay-<issue#>-<desc>` off `development`. See `GIT_STANDARDS.md`.

## Design implementation notes

The source design is `Git Standards.dc.html` in the Claude Design project
(`885c9419-315e-4664-9036-17febab87c2a`, readable via the DesignSync tool after
`/design-login`). Copy is verbatim from it. Nine sections: how work flows,
branches, commits, pull requests & reviews, project board, repo setup, common
mistakes, pre-PR checklist, cheat sheet. Build them one at a time as directed.
