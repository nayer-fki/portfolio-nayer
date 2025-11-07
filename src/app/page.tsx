// src/app/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  // Reveal on scroll (with safe fallback)
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    );

    // Fallback: show immediately
    els.forEach((el) => el.classList.add("in-view"));

    // Animate only elements that explicitly want it
    if ("IntersectionObserver" in window) {
      const animated = els.filter((el) =>
        el.classList.contains("will-animate")
      );
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("in-view");
              io.unobserve(e.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
      );
      animated.forEach((el) => {
        el.classList.remove("in-view");
        io.observe(el);
      });
      return () => io.disconnect();
    }
  }, []);

  // ---- Hero text ----
  const headline =
    "Cybersecurity & Network Engineer • DevOps/Cloud practitioner. Designing secure network architectures (VLAN / DMZ / VPN, Cisco ASA, SIEM) and shipping reliable platforms with Docker, CI/CD and observability.";

  const bullets = [
    "Hands-on: segmentation VLAN/DMZ, IPsec VPN, log centralization, containerized services & monitoring.",
    "DevOps & Cloud: Docker/Compose, CI/CD, Linux, AWS basics, metrics & alerting.",
    "Based in Nabeul — open for PFE & internships.",
  ];

  // ---- Education (with logos) ----
  const education = [
    {
      school: "IT Business School (ITBS)",
      track: "Cycle Ingénieur — Réseaux & Sécurité",
      when: "2023 — en cours",
      logo: "/images/education/itbs.png",
    },
    {
      school: "ISET Nabeul",
      track:
        "Licence — Génie Électrique (Automatisme & Informatique Industrielle)",
      when: "2020 — 2023",
      logo: "/images/education/iset.png",
    },
    {
      school: "Baccalauréat Technique",
      track: "",
      when: "2020",
      logo: "/images/education/bac.png",
    },
  ];

  // ---- Projects (image + repo link) ----
  const projects = [
    {
      title: "SOC/NOC + DMZ (Pro Lab)",
      brief:
        "Enterprise-style lab: VLANs, DMZ with Dockerized services (Nginx/DNS/Mail), Cisco ASA, Snort, centralized logs, dashboards.",
      tags: ["VLAN", "DMZ", "ASA", "Snort", "Docker", "SIEM"],
      image: "/images/projects/soc-noc-dmz.jpg",
      repo: "https://github.com/nayer-fki/<repo-soc>",
    },
    {
      title: "Gym360 (MERN)",
      brief:
        "E-shop/fitness platform: auth, roles (admin/coach/client), uploads, analytics.",
      tags: ["Next.js", "Node", "MongoDB", "Auth"],
      image: "/images/projects/gym360.png",
      repo: "https://github.com/nayer-fki/gym360-smart.git",
    },
    {
      title: "Pneumonia Detection",
      brief:
        "FastAPI + React; CNN on chest X-ray; Dockerized and deployable.",
      tags: ["ML", "FastAPI", "React", "Docker"],
      image: "/images/projects/pneumonia.jpg",
      repo: "https://github.com/nayer-fki/project-pneumonia-detection-deep.git",
    },
    {
      title: "TTS/ML Playground",
      brief:
        "Classic ML (KNN, LR, DT) for TTS pipeline; metrics & visualisation.",
      tags: ["Python", "ML", "Librosa"],
      image: "/images/projects/tts.jpg",
      repo: "https://github.com/nayer-fki/TTS-PY-Machine--learning.git",
    },
  ];

  // ---- Skills (groups + category icon) ----
  // ضع icons في public/images/skills/ كما في المسارات أدناه
  const skillsCore = [
    {
      group: "Networking/Security",
      icon: "/images/skills/cisco.png",
      items: ["VLAN", "DMZ", "VPN IPsec", "Cisco ASA", "Snort/IDS", "SIEM basics"],
    },
    {
      group: "DevOps/Cloud",
      icon: "/images/skills/docker.png", // ينجم يكون aws.png إذا تحب
      items: ["Docker/Compose", "CI/CD", "Linux", "Nginx", "AWS basics", "Monitoring/Alerts"],
    },
    {
      group: "Web",
      icon: "/images/skills/web.png",
      items: ["Next.js", "Node/Express", "MongoDB", "REST APIs", "Auth/JWT"],
    },
    {
      group: "Observability",
      icon: "/images/skills/snort.png", // بدّلها بـ grafana/prometheus إذا عندك
      items: ["Logs centralization", "Dashboards", "Metrics", "Alerting"],
    },
  ];

  // ---- Experience (with logos) ----
  const experience = [
    {
      where: "Tunisie Telecom — Stagiaire Réseaux, Cybersécurité & Supervision",
      when: "juil. 2025 – août 2025",
      what:
        "VLAN/DMZ/VPN IPsec, Cisco ASA & ACL hardening, centralisation des logs (serveurs, Snort IDS, iptables) avec dashboards; Docker.",
      logo: "/images/companies/tunisie-telecom.png",
    },
    {
      where: "Tunisie Telecom — Stagiaire Réseaux & Télécom (initiation)",
      when: "juin 2025 – juil. 2025",
      what:
        "Transmission (fibre/xDSL), supervision de base; maintenance & analyse de pannes.",
      logo: "/images/companies/tunisie-telecom.png",
    },
  ];

  // ---- Certifications (with logos + optional verify link) ----
  // الصور موجودة في /images/certifcation/ (نفس مسارك الحالي)
  const certs = [
    {
      name: "CCNA: ENSA — Cisco (sept. 2025)",
      logo: "/images/certifcation/cisco.png",
      link: "",
    },
    {
      name: "IBM Cybersecurity Analyst (juil. 2025)",
      logo: "/images/certifcation/IBM.jpg",
      link: "",
    },
    {
      name: "Linux Server Management & Security (juin 2025)",
      logo: "/images/certifcation/Colorado.png",
      link: "",
    },
  ];

  // ---- UI state ----
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showMoreSkills, setShowMoreSkills] = useState(false);
  const visibleProjects = showMoreProjects ? projects : projects.slice(0, 2);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section id="about" className="relative overflow-hidden bg-cyber">
        {/* subtle animated glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-400/10 to-cyan-400/20 blur-3xl animate-spin-slower"
        />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-[1.15fr_.85fr] md:py-28">
          {/* Text */}
          <div className="reveal will-animate" data-animate>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              PORTFOLIO
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-6xl">
              Nayer Fki
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-neutral-300">{headline}</p>

            <ul className="mt-6 space-y-2 text-sm text-neutral-300">
              {bullets.map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-4 w-4 rounded-sm bg-emerald-500/85" />
                  {t}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#bio"
                className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 font-medium text-emerald-300 transition hover:bg-emerald-500/15 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              >
                About me
              </a>
              <a
                href="https://github.com/nayer-fki"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nayer-fki-26439026a"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-700 px-5 py-3 transition hover:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              >
                LinkedIn
              </a>
              <a
                href="/Nayer_Fki_CV.pdf"
                className="group inline-flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 font-medium text-emerald-300 transition hover:bg-emerald-500/15 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
              >
                Download CV
                <svg
                  className="h-4 w-4 transition group-hover:translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 3v14m0 0l-4-4m4 4l4-4M4 21h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="mx-auto w-full max-w-sm reveal will-animate" data-animate>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-emerald-500/35 via-teal-400/15 to-cyan-400/35 blur opacity-70 animate-pulse-soft" />
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
                <Image
                  src="/nayer.jpg"
                  width={768}
                  height={768}
                  alt="Nayer Fki portrait"
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio (descriptif simple) */}
      <section id="bio" className="mx-auto max-w-6xl px-6 py-10 reveal" data-animate>
        <h2 className="text-xl font-semibold text-neutral-200">Who am I?</h2>
        <p className="mt-3 max-w-3xl text-neutral-300">
          Étudiant ingénieur à l’IT Business School (ITBS), spécialité Réseaux & Sécurité.
          Bases solides en réseaux, systèmes et bases de données, avec ouverture sur la cybersécurité et le cloud.
          Esprit d’analyse, autonomie et sens du service — à la recherche d’un PFE où contribuer et progresser.
        </p>
      </section>

      {/* Education / Parcours */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-6 reveal" data-animate>
        <h2 className="text-xl font-semibold text-neutral-200">Education</h2>
        <ul className="mt-3 space-y-3">
          {education.map((ed) => (
            <li
              key={ed.school}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {ed.logo && (
                    <Image
                      src={ed.logo}
                      alt={ed.school}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-sm object-contain"
                    />
                  )}
                  <p className="font-medium">{ed.school}</p>
                </div>
                <span className="text-xs text-neutral-400">{ed.when}</span>
              </div>
              {ed.track && (
                <p className="mt-1 text-sm text-neutral-300">{ed.track}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects (preview + show more) */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-12 reveal" data-animate>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-neutral-200">Projects</h2>
        <a href="/projects" className="text-sm text-emerald-300 hover:underline">
            View all
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {visibleProjects.map((p, idx) => (
            <article
              key={idx}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur transition hover:border-emerald-400/30"
            >
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.title}
                  width={800}
                  height={450}
                  className="h-40 w-full object-cover"
                />
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <span className="text-xs text-neutral-400 group-hover:text-emerald-300 transition">
                    →
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-300">{p.brief}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-3 py-1.5 text-sm hover:border-neutral-500"
                  >
                    <Image
                      src="/icons/github.svg"
                      alt="GitHub"
                      width={16}
                      height={16}
                    />
                    Repository
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => setShowMoreProjects((v) => !v)}
            className="rounded-xl border border-neutral-700 px-4 py-2 text-sm transition hover:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
          >
            {showMoreProjects ? "Show less" : "Show more"}
          </button>
          <a
            href="/projects"
            className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 transition hover:bg-emerald-500/15 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
          >
            Voir tout →
          </a>
        </div>
      </section>

      {/* Skills (grid + show more + category icons) */}
      <section
        id="skills"
        className="mx-auto max-w-6xl px-6 pb-12 reveal will-animate"
        data-animate
      >
        <h2 className="text-xl font-semibold text-neutral-200">Skills</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {(showMoreSkills ? skillsCore : skillsCore.slice(0, 2)).map((g) => (
            <div
              key={g.group}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
            >
              <div className="mb-2 flex items-center gap-2">
                {g.icon && (
                  <Image
                    src={g.icon}
                    alt={g.group}
                    width={20}
                    height={20}
                    className="h-5 w-5 rounded-sm object-contain"
                  />
                )}
                <h3 className="text-sm font-semibold text-emerald-300">
                  {g.group}
                </h3>
              </div>
              <div className="mt-1 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowMoreSkills((v) => !v)}
          className="mt-6 rounded-xl border border-neutral-700 px-4 py-2 text-sm transition hover:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
        >
          {showMoreSkills ? "Show less" : "Show more"}
        </button>
      </section>

      {/* Experience (latest 2) */}
      <section id="experience" className="mx-auto max-w-6xl px-6 pb-12 reveal" data-animate>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-neutral-200">Experience</h2>
          <a href="/experience" className="text-sm text-emerald-300 hover:underline">
            View all
          </a>
        </div>
        <ul className="space-y-3">
          {experience.map((e, i) => (
            <li
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {e.logo && (
                    <Image
                      src={e.logo}
                      alt={e.where}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  )}
                  <p className="font-medium">{e.where}</p>
                </div>
                <span className="text-xs text-neutral-400">{e.when}</span>
              </div>
              <p className="mt-2 text-sm text-neutral-300">{e.what}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Certifications (latest 3) — bigger logos */}
      <section id="certifications" className="mx-auto max-w-6xl px-6 pb-12 reveal" data-animate>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-neutral-200">Certifications</h2>
          <a href="/certifications" className="text-sm text-emerald-300 hover:underline">
            View all
          </a>
        </div>
        <ul className="mt-1 flex flex-wrap gap-3">
          {certs.map((c) => (
            <li
              key={c.name}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300"
            >
              {c.logo && (
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-md object-contain"
                />
              )}
              {c.link ? (
                <a href={c.link} target="_blank" className="hover:underline">
                  {c.name}
                </a>
              ) : (
                c.name
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact (expanded) */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-16 reveal" data-animate>
        <h2 className="text-xl font-semibold text-neutral-200">Contact</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="space-y-2 text-neutral-300">
            <p>
              Email:{" "}
              <a className="underline" href="mailto:nayerfki5@gmail.com">
                nayerfki5@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a className="underline" href="tel:+21690697485">
                +216 90 697 485
              </a>
            </p>
            <p>Location: Nabeul, Tunisia</p>
          </div>
          <div className="space-x-3">
            <a
              href="https://github.com/nayer-fki"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:border-neutral-500"
            >
              <Image src="/icons/github.svg" alt="GitHub" width={16} height={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nayer-fki-26439026a"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:border-neutral-500"
            >
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-neutral-500">
        © {new Date().getFullYear()} Nayer. All rights reserved.
      </footer>
    </main>
  );
}
