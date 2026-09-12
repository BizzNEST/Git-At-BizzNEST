import Branches from "@/components/Branches";
import Commits from "@/components/Commits";
import Hero from "@/components/Hero";
import HowWorkFlows from "@/components/HowWorkFlows";
import ProjectBoard from "@/components/ProjectBoard";
import PullRequests from "@/components/PullRequests";
import RepoSetup from "@/components/RepoSetup";
import Sidebar from "@/components/Sidebar";
import { NAV_ITEMS } from "@/components/nav-items";

export default function Home() {
  return (
    <div className="mx-auto grid min-h-screen max-w-[1240px] grid-cols-[minmax(0,1fr)] desk:grid-cols-[240px_minmax(0,1fr)]">
      <Sidebar />
      <main className="flex min-w-0 flex-col gap-10 px-3 pb-14 pt-4 min-[521px]:gap-12 min-[521px]:px-5 min-[521px]:pb-16 min-[521px]:pt-6 desk:gap-16 desk:px-14 desk:pb-20 desk:pt-10">
        <Hero />
        <HowWorkFlows />
        <Branches />
        <Commits />
        <PullRequests />
        <ProjectBoard />
        <RepoSetup />
        {/* Placeholder sections until each one is built. */}
        {NAV_ITEMS.filter((item) => !["start", "branches", "commits", "pull-requests", "board", "setup"].includes(item.id)).map((item) => (
          <section
            key={item.id}
            id={item.id}
            className="flex min-h-[70vh] scroll-mt-16 flex-col gap-4 desk:scroll-mt-0"
          >
            <h2 className="text-3xl font-bold tracking-tight">{item.label}</h2>
            <p className="text-ink-muted">Section coming soon.</p>
          </section>
        ))}
      </main>
    </div>
  );
}
