"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Project } from "./page";

const FILTERS = ["All", "Network", "DevOps/Cloud", "ML/AI", "Web/JEE"] as const;
type Filter = (typeof FILTERS)[number];

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const byFilter =
      filter === "All" ? projects : projects.filter((p) => p.category === filter);
    const byQuery = q.trim()
      ? byFilter.filter(
          (p) =>
            p.title.toLowerCase().includes(q.toLowerCase()) ||
            p.stack.join(" ").toLowerCase().includes(q.toLowerCase())
        )
      : byFilter;
    return byQuery;
  }, [projects, filter, q]);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6">
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                filter === f
                  ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                  : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search (stack, title...)"
            className="ml-auto w-full max-w-xs rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-emerald-400/40"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          {list.map((p, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur transition hover:border-emerald-400/30"
            >
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={640}
                  className="h-44 w-full object-cover"
                />
              )}

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold leading-tight">{p.title}</h3>
                    <p className="text-xs text-neutral-400">
                      {p.org ? `${p.org} · ` : ""} {p.period} ·{" "}
                      <span className="text-emerald-300">{p.category}</span>
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-neutral-300">{p.summary}</p>

                {p.bullets?.length ? (
                  <ul className="mt-3 space-y-1.5 text-sm text-neutral-300">
                    {p.bullets.map((b, k) => (
                      <li key={k} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/90" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* روابط الريبو والديمو فقط */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-3 py-1.5 text-sm hover:border-neutral-500"
                    >
                      <Image src="/icons/github.svg" alt="GitHub" width={16} height={16} />
                      Repository
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-3 py-1.5 text-sm hover:border-neutral-500"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {list.length === 0 && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-neutral-400">
            No projects for this filter/search.
          </div>
        )}
      </section>
    </>
  );
}
