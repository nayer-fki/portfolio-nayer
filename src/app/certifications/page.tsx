import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { certifications } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications in cloud, software, networking, cybersecurity, data, and AI.",
};

export default function CertificationsPage() {
  return (
    <main className="page-shell">
      <Navbar />
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="eyebrow">Credentials</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Certifications</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">Continuous learning across cloud platforms, networking, cybersecurity, data engineering, software, and artificial intelligence.</p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <article key={certification.name} className="surface-card flex flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
              <div className="flex items-start justify-between gap-4">
                <Image src={certification.logo} alt={`${certification.issuer} logo`} width={48} height={48} className="h-12 w-12 rounded-xl bg-white object-contain p-1.5" />
                <span className="text-xs text-slate-500">{certification.date}</span>
              </div>
              <h2 className="mt-5 text-lg font-semibold leading-6 text-white">{certification.name}</h2>
              <p className="mt-2 text-sm text-blue-300">{certification.issuer}</p>
              <div className="mt-5 flex flex-wrap gap-2">{certification.skills.map((skill) => <span key={skill} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">{skill}</span>)}</div>
              {certification.credential && <a href={certification.credential} target="_blank" rel="noreferrer" className="mt-auto pt-6 text-sm font-semibold text-blue-300 hover:text-blue-200">Verify credential <span aria-hidden="true">↗</span></a>}
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
