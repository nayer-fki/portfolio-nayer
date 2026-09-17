import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { certifications, expertise, experiences, projects } from "@/data/portfolio";

const Arrow = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />

      <section id="about" className="relative scroll-mt-20 overflow-hidden border-b border-white/10">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.25fr_.75fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 text-xs font-medium text-blue-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for engineering opportunities
            </div>
            <p className="eyebrow">DevOps & Software Engineer</p>
            <h1 className="text-balance mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              I build reliable systems and software that teams can trust.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I am Nayer Fki, a DevOps and software engineer building cloud infrastructure, GitOps delivery systems, observable platforms, and maintainable full-stack applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#projects" className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400">
                View my work <Arrow />
              </Link>
              <a href="/Nayer_Fki_CV.pdf" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10">
                Download resume
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span>Based in Nabeul, Tunisia</span>
              <a href="mailto:nayerfki5@gmail.com" className="transition hover:text-white">nayerfki5@gmail.com</a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm lg:ml-auto">
            <div className="surface-card relative rounded-3xl p-3">
              <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-blue-400/30 to-cyan-400/5 blur-xl" />
              <Image src="/nayer.jpg" width={768} height={768} alt="Portrait of Nayer Fki" priority className="aspect-square w-full rounded-2xl object-cover" />
              <div className="grid grid-cols-3 gap-2 p-3 pb-1 pt-4 text-center">
                <div><strong className="block text-lg text-white">16</strong><span className="text-[11px] text-slate-400">Projects</span></div>
                <div className="border-x border-white/10"><strong className="block text-lg text-white">9</strong><span className="text-[11px] text-slate-400">Certificates</span></div>
                <div><strong className="block text-lg text-white">4</strong><span className="text-[11px] text-slate-400">Core areas</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">About me</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Engineering with an operational mindset.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>Trained in networks and security, I now work across software development, cloud platforms, automation, and infrastructure operations.</p>
            <p>My work connects development and operations: I turn product requirements into deployable services, then make those services observable, secure, and easier to operate.</p>
          </div>
        </div>
      </section>

      <section id="expertise" className="scroll-mt-20 border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow">Core expertise</p>
          <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white">From source code to stable production environments.</h2>
            <p className="max-w-md text-sm leading-6 text-slate-400">A practical skill set covering the full delivery lifecycle.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {expertise.map((area, index) => (
              <article key={area.title} className="surface-card rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
                <div className="flex items-start gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-500/10 text-sm font-semibold text-blue-300">0{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{area.description}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {area.skills.map((skill) => <span key={skill} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div><p className="eyebrow">Selected work</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Projects with real engineering depth.</h2></div>
          <Link href="/projects" className="hidden items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200 sm:flex">All projects <Arrow /></Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <article key={project.title} className="surface-card group overflow-hidden rounded-2xl">
              <div className="relative overflow-hidden">
                <Image src={project.image} alt="" width={900} height={540} className="h-52 w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                {project.logo && <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center overflow-hidden rounded-xl border border-white/15 bg-white p-1.5 shadow-xl"><Image src={project.logo} alt={`${project.title} logo`} width={48} height={48} className="h-full w-full object-contain" /></span>}
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">{project.category}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.stack.slice(0, 4).map((item) => <span key={item} className="text-xs text-slate-300">#{item.replaceAll(" ", "")}</span>)}</div>
                <div className="mt-5 flex flex-wrap gap-4">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200">Live app <span aria-hidden="true">↗</span></a>}
                  {project.caseStudyHref && <Link href={project.caseStudyHref} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200">Read case study <Arrow /></Link>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <Link href="/projects" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 sm:hidden">All projects <Arrow /></Link>
      </section>

      <section id="experience" className="scroll-mt-20 border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6">
            <div><p className="eyebrow">Experience</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Practical work across infrastructure and software.</h2></div>
            <Link href="/experience" className="hidden items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200 sm:flex">Full experience <Arrow /></Link>
          </div>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {experiences.slice(0, 3).map((experience) => (
              <article key={`${experience.company}-${experience.role}`} className="grid gap-4 py-7 md:grid-cols-[1fr_1.8fr]">
                <div className="flex items-start gap-3">
                  {experience.logo && <Image src={experience.logo} alt="" width={40} height={40} className="h-10 w-10 rounded-lg bg-white object-contain p-1" />}
                  <div><h3 className="font-semibold text-white">{experience.company}</h3><p className="mt-1 text-xs text-slate-500">{experience.period}</p></div>
                </div>
                <div><p className="font-medium text-slate-200">{experience.role}</p><p className="mt-2 text-sm leading-6 text-slate-400">{experience.highlights[0]}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="eyebrow">Continuous learning</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Validated foundations, continuously expanded.</h2><Link href="/certifications" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200">All certifications <Arrow /></Link></div>
          <div className="grid gap-3">
            {certifications.slice(0, 3).map((certification) => (
              <article key={certification.name} className="surface-card flex items-center gap-4 rounded-xl p-4">
                <Image src={certification.logo} alt="" width={44} height={44} className="h-11 w-11 rounded-lg bg-white object-contain p-1" />
                <div className="min-w-0"><h3 className="font-medium text-white">{certification.name}</h3><p className="mt-1 text-xs text-slate-400">{certification.issuer} · {certification.date}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 px-6 pb-20">
        <div className="surface-card mx-auto max-w-6xl overflow-hidden rounded-3xl p-8 sm:p-12">
          <div className="grid items-end gap-8 md:grid-cols-[1.3fr_.7fr]">
            <div><p className="eyebrow">Let&apos;s work together</p><h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Have a project or an engineering opportunity in mind?</h2><p className="mt-4 max-w-2xl leading-7 text-slate-400">I am open to DevOps, cloud, and software engineering opportunities where I can build useful systems and keep learning.</p></div>
            <div className="flex flex-col gap-3 md:items-end">
              <a href="mailto:nayerfki5@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-400">Send an email <Arrow /></a>
              <div className="flex gap-4 text-sm text-slate-400"><a href="https://github.com/nayer-fki" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a><a href="https://gitlab.com/nayer-fki" target="_blank" rel="noreferrer" className="hover:text-white">GitLab</a><a href="https://www.linkedin.com/in/nayer-fki-26439026a" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
