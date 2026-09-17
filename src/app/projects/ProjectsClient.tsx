"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/portfolio";

const filters: Array<"All" | ProjectCategory> = ["All", "DevOps", "Cloud", "Software", "AI"];

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = filter === "All" || project.category === filter;
      const matchesQuery = !normalizedQuery || [project.title, project.summary, ...project.stack].join(" ").toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [filter, projects, query]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" aria-label="Project categories">
          {filters.map((item) => (
            <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`rounded-lg border px-3.5 py-2 text-sm transition ${filter === item ? "border-blue-400/40 bg-blue-500/10 text-blue-200" : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white"}`}>
              {item}
            </button>
          ))}
        </div>
        <label className="relative block md:w-72">
          <span className="sr-only">Search projects</span>
          <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" /><path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by title or technology" className="w-full rounded-lg border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-400/50" />
        </label>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <article key={project.title} className="surface-card group overflow-hidden rounded-2xl">
            <div className="relative overflow-hidden">
              <Image src={project.image} alt={`${project.title} interface`} width={1440} height={810} className="aspect-video w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100" />
              {project.logo && <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center overflow-hidden rounded-xl border border-white/15 bg-white p-1.5 shadow-xl"><Image src={project.logo} alt={`${project.title} logo`} width={48} height={48} className="h-full w-full object-contain" /></span>}
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-semibold uppercase tracking-wider text-blue-300">{project.category}</span>
                <span className="text-slate-500">{project.period}</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-white">{project.title}</h2>
              {project.organization && <p className="mt-1 text-xs text-slate-500">{project.organization}</p>}
              <p className="mt-4 text-sm leading-6 text-slate-400">{project.summary}</p>
              <ul className="mt-4 hidden space-y-2 text-sm leading-6 text-slate-300 sm:block">
                {project.highlights.slice(0, 2).map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" /><span>{highlight}</span></li>)}
              </ul>
              <details className="mt-4 rounded-lg border border-white/10 bg-white/[0.02] p-3 text-sm sm:hidden">
                <summary className="cursor-pointer font-medium text-slate-200">Key contributions</summary>
                <ul className="mt-3 space-y-2 leading-6 text-slate-400">{project.highlights.map((highlight) => <li key={highlight}>• {highlight}</li>)}</ul>
              </details>
              <div className="mt-5 flex flex-wrap gap-2">{project.stack.slice(0, 6).map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">{item}</span>)}{project.stack.length > 6 && <span className="px-1 py-1 text-xs text-slate-500">+{project.stack.length - 6}</span>}</div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-emerald-300 hover:text-emerald-200">{project.liveLabel ?? "Open live application"} <span aria-hidden="true">↗</span></a>}
                {project.caseStudyHref && <Link href={project.caseStudyHref} className="text-sm font-semibold text-blue-300 hover:text-blue-200">Read case study <span aria-hidden="true">→</span></Link>}
                {project.repository && <a href={project.repository} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"><Image src={project.repository.includes("gitlab.com") ? "/icons/gitlab.svg" : "/icons/github.svg"} alt="" width={16} height={16} />{project.repositoryLabel ?? "View repository"} <span aria-hidden="true">↗</span></a>}
              </div>
            </div>
          </article>
        ))}
      </div>

      {visibleProjects.length === 0 && <div className="surface-card mt-8 rounded-2xl p-8 text-center text-slate-400">No projects match your search.</div>}
    </section>
  );
}
