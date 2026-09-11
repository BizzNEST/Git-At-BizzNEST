export type NavItem = { id: string; label: string };

/** Section order and labels, verbatim from the design's navDefs. */
export const NAV_ITEMS: NavItem[] = [
  { id: "start", label: "How work flows" },
  { id: "branches", label: "Branches" },
  { id: "commits", label: "Commits" },
  { id: "pull-requests", label: "Pull requests & reviews" },
  { id: "board", label: "Project board" },
  { id: "setup", label: "Repo setup & tooling" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "checklist", label: "Before you open a PR" },
  { id: "cheatsheet", label: "Cheat sheet" },
];
