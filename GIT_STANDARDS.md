# Git Standards

The rules for how work moves through this repo. Taken from the BizzNEST
Standards & Practices (the "Git Standards" design). Read this before any git
or GitHub action.

## How work flows

1. **Issue.** Every task starts as a GitHub issue with a description and
   labels. Add it to the project board (Backlog) and assign yourself when you
   start (card -> In Progress).
2. **Branch.** Branch off `development`. Name it with your initials, the issue
   number, and a short description.
3. **Commit.** Small commits, one scope each.
4. **Pull request.** Open a PR into `development`. Fill out every section of
   the template, link the issue, and move the card to In Review.
5. **Review.** Reviewers respond within 24 hours. Address every comment, push
   new commits, and re-request review.
6. **Merge & close.** Merge after approval. Move the card to Done and close
   the issue.

## Branches

We follow Gitflow. Three long-lived branches, and short-lived task branches
off `development`.

| Branch        | Purpose           |
|---------------|-------------------|
| `main`        | production-ready  |
| `staging`     | demo-ready        |
| `development` | your working base |

**Naming:** `<initials>-<issue#>-<small-description>`

- initials: yours, so everyone can see who owns the branch
- issue#: the GitHub issue number the branch relates to
- small-description: usually no more than 3 words

Example: Alex fixing a bug on issue 111 -> `ar-111-fix-uploader`.
In this repo the initials are `ay`, so branches look like `ay-12-sidebar-nav`.

**Where PRs go**

- Task branch -> `development`, reviewed by another developer
- `development` -> `staging` when code is locked in for a demo
- `development` -> `main` when code is ready to deploy
- Hotfixes are the one exception: they branch off `main` and merge back into
  both `main` (tagged) and `development`

**Keeping your branch up to date**

```sh
git checkout development
git pull
git checkout your-branch-name
git merge development
```

## Commits

Based on the Karma Runner convention. Small commits, one scope each, so they
are easy to find, reason about, and revert.

```
type(scope):subject

body (optional)
```

- **type**: one of the 8 below, nothing else
- **scope**: one or two words in parentheses narrowing what changed
- **subject**: imperative mood, present tense, starts with a verb, no period
  at the end. Think newspaper headline.
- **body**: only when it helps. A new package, a build change, context a
  future developer needs, or a note to your senior developer on the last
  commit of a PR.

| Type         | Use for                                                       |
|--------------|---------------------------------------------------------------|
| `feat`       | A new feature for the application user                        |
| `fix`        | Bug fix to production code, fixing a GitHub issue             |
| `docs`       | Documentation changes: comments, README files                 |
| `style`      | Code formatting only (not CSS): reformatting, semicolons      |
| `refactor`   | Refactor of production code, upgrading a package, renaming    |
| `test`       | Unit testing only, no production code changes                 |
| `chore`      | Updating build tooling, package.json. Developer-facing only   |
| `workaround` | Temporary fix until a more robust solution is found           |

Examples:

```
refactor(app-component): import user service and add routes
feat(login): create/setup
fix(uploader): handle empty files. resolves #111
```

## Pull requests & reviews

Every pull request goes through a review. No exceptions.

1. Open a PR. Follow the PR template and fill out every section.
2. Assign two reviewers. One must be a team lead or admin.
3. Reviewers reply in 24h.
4. Address all feedback: make the changes, push new commits, re-request review.
5. Merge after approval, into `development`.

Steps 3 and 4 repeat until every reviewer approves.

**PR template** (sections, in order): Changes, Purpose, Approach,
Pre-Testing TODOs, Testing Steps, Learning, then `Closes #NNN` at the end.
Write it plainly. Say what changed and how to check it, not how the code
works internally.

**What reviewers look for**

- Code does what the linked issue describes
- Variable and function names are clear and descriptive
- No console.log statements left in the code
- No hardcoded values that should be in environment variables
- Follows the project's existing code style and patterns
- Commit messages follow the commit conventions
- Branch name follows the naming convention
- No commented-out code left behind
- Changes are tested and working

**Giving feedback:** be specific, suggest alternatives, use GitHub's
suggestion feature, keep it constructive, prefix optional notes with `nit:`.

**Receiving feedback:** reviews are about the code, not you. Ask clarifying
questions, treat it as a learning opportunity, thank your reviewers.

## Project board

| Column      | Meaning                        | When to move a card here                         |
|-------------|--------------------------------|--------------------------------------------------|
| Backlog     | Planned, not started           | New issues land here                             |
| In Progress | Actively being worked on       | When you assign yourself and start               |
| In Review   | Open PR waiting for review     | When you open the PR                             |
| Done        | Merged and complete            | When the PR merges, then close the issue         |

Finish before starting; update cards daily.

## Issues

Title prefixes and labels: `[Feat]: ` (label `feature`), `[bug]: ` (label
`bug`), `[epic]: ` (label `Epic`). Always link the issue from the PR.

## Before you open a PR

- [ ] There is a GitHub issue for this work and it is on the board
- [ ] Branch is named `<initials>-<issue#>-<description>` and was created off `development`
- [ ] Branch is up to date with `development`
- [ ] Code does what the linked issue describes
- [ ] Variable and function names are clear and descriptive
- [ ] No console.log statements left in the code
- [ ] No hardcoded values that should be in environment variables
- [ ] No commented-out code left behind
- [ ] Commit messages follow `type(scope):subject`, one scope per commit
- [ ] Changes are tested and working
- [ ] PR template filled out completely, issue linked (`Closes #...`), reviewers assigned
- [ ] Card moved to In Review

## Common mistakes

| Don't                                                | Do                                                   |
|------------------------------------------------------|------------------------------------------------------|
| `fix-bug`                                            | `ar-111-fix-uploader`                                |
| `Fixed the uploader.`                                | `fix(uploader): handle empty files`                  |
| One commit touching login and app routing            | Two commits, one per scope                           |
| `update(uploader): tweak`                            | Only the 8 types                                     |
| console.log left in, commented-out code left behind  | Clean it up before you push                          |
| API key hardcoded in source                          | Put it in `.env` and never commit that file          |
| Pulling from origin, then running old node_modules   | Run `npm i` every time you pull                      |
| Three cards sitting in In Progress                   | Finish before starting; update cards daily           |

## Cheat sheet

```sh
# Start a task
git checkout development
git pull
git checkout -b <initials>-<issue#>-<description>

# Save work
git add .
git commit -m "type(scope):subject"
git push

# Stay current
git checkout development
git pull
git checkout your-branch-name
git merge development

# Set up a repo
git clone https://github.com/BizzNEST/your-repo.git
npm i
npm start
```
