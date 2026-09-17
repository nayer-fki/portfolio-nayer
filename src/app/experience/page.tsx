import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { experiences } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience across DevOps, networking, software automation, and industrial systems.",
};

export default function ExperiencePage() {
  return (
    <main className="page-shell">
      <Navbar />
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">Career</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Professional experience</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">Hands-on experience connecting infrastructure, security, automation, and software with real operational needs.</p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <div className="relative space-y-6 before:absolute before:bottom-5 before:left-5 before:top-5 before:w-px before:bg-white/10 sm:before:left-[11.25rem]">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.role}`} className="relative grid gap-5 pl-14 sm:grid-cols-[9rem_1fr] sm:pl-0">
              <div className="pt-6 text-sm text-slate-500">
                <p>{experience.period}</p>
                <p className="mt-1 text-xs">{experience.location}</p>
              </div>
              <span className="absolute left-[15px] top-8 h-3 w-3 rounded-full border-2 border-[#070b14] bg-blue-400 ring-4 ring-blue-400/10 sm:left-[10.9rem]" />
              <div className="surface-card rounded-2xl p-6 sm:ml-8">
                <div className="flex items-start gap-4">
                  {experience.logo && <Image src={experience.logo} alt="" width={48} height={48} className="h-12 w-12 shrink-0 rounded-lg bg-white object-contain p-1.5" />}
                  <div><h2 className="text-lg font-semibold text-white">{experience.role}</h2><p className="mt-1 text-sm text-slate-400">{experience.company} · {experience.type}</p></div>
                </div>
                <ul className="mt-5 space-y-2.5 text-sm leading-6 text-slate-300">
                  {experience.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" /><span>{highlight}</span></li>)}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">{experience.stack.map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">{item}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
