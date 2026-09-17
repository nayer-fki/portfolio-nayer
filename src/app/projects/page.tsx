import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectsClient from "./ProjectsClient";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "DevOps, cloud, software engineering, and AI projects by Nayer Fki.",
};

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <Navbar />
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Engineering projects</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">A selection of infrastructure, cloud, software, and AI projects—from architecture and implementation to deployment and operations.</p>
        </div>
      </header>
      <ProjectsClient projects={projects} />
      <Footer />
    </main>
  );
}
