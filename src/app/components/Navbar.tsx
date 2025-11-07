// src/app/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Item = { id: string; label: string };

const NAV_ITEMS: Item[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("about");
  const [open, setOpen] = useState(false);

  // Highlight current section on scroll
  useEffect(() => {
    const sections = NAV_ITEMS.map((i) =>
      document.getElementById(i.id)
    ).filter(Boolean) as HTMLElement[];

    // fallback: if nothing found, do nothing
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pick the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        rootMargin: "-20% 0px -60% 0px", // triggers a bit before the middle
        threshold: [0.15, 0.3, 0.6, 0.9],
      }
    );

    sections.forEach((sec) => io.observe(sec));
    return () => io.disconnect();
  }, []);

  // smooth scroll click
  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-400/10" />
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between rounded-b-xl border-b border-white/10 bg-black/70 px-4 py-3 backdrop-blur md:px-6">
        {/* Brand */}
        <a
          href="/"
          className="group flex items-center gap-2 text-white"
          aria-label="Home"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-tr from-emerald-500/30 to-cyan-400/30 ring-1 ring-white/15">
            <span className="font-semibold">N</span>
          </span>
          <span className="font-semibold tracking-wide">Nayer</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative rounded-md px-3 py-2 text-sm transition ${
                  isActive ? "text-white" : "text-neutral-300 hover:text-white"
                }`}
              >
                {item.label}
                {/* underline / pill highlight */}
                <span
                  className={`absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full transition ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  }`}
                />
              </a>
            );
          })}

          {/* Divider */}
          <span className="mx-2 h-5 w-px bg-white/10" />

          {/* Icons */}
          <a
            href="https://github.com/nayer-fki"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 text-neutral-300 hover:text-white"
            aria-label="GitHub"
          >
            <Image src="/icons/github.svg" alt="" width={18} height={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/nayer-fki-26439026a"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 text-neutral-300 hover:text-white"
            aria-label="LinkedIn"
          >
            <Image src="/icons/linkedin.svg" alt="" width={18} height={18} />
          </a>

          {/* CV button */}
          <a
            href="/Nayer_Fki_CV.pdf"
            className="ml-1 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/15"
          >
            Download CV
          </a>
        </div>

        {/* Mobile: burger */}
        <button
          className="inline-flex items-center rounded-md p-2 text-neutral-300 hover:text-white md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden">
          <div className="mx-auto max-w-6xl rounded-b-xl border-b border-white/10 bg-black/80 px-4 pb-4 pt-2 backdrop-blur">
            <div className="grid gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`rounded-lg px-3 py-2 text-sm ${
                      isActive
                        ? "bg-white/[0.06] text-white"
                        : "text-neutral-300 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://github.com/nayer-fki"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/10 px-3 py-2 text-sm text-neutral-300 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nayer-fki-26439026a"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/10 px-3 py-2 text-sm text-neutral-300 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="/Nayer_Fki_CV.pdf"
                className="ml-auto rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/15"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
