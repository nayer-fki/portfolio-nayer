"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { href: "/#about", label: "About" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="Nayer Fki, home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-500 text-sm font-bold text-white shadow-lg shadow-blue-500/20">NF</span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-white">Nayer Fki</span>
            <span className="block text-[11px] text-slate-400">DevOps & Software Engineer</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
              {item.label}
            </Link>
          ))}
          <span className="mx-2 h-5 w-px bg-white/10" />
          <a href="https://github.com/nayer-fki" target="_blank" rel="noreferrer" className="rounded-lg p-2 opacity-70 transition hover:bg-white/5 hover:opacity-100" aria-label="GitHub profile">
            <Image src="/icons/github.svg" alt="" width={18} height={18} />
          </a>
          <a href="https://www.linkedin.com/in/nayer-fki" target="_blank" rel="noreferrer" className="rounded-lg p-2 opacity-70 transition hover:bg-white/5 hover:opacity-100" aria-label="LinkedIn profile">
            <Image src="/icons/linkedin.svg" alt="" width={18} height={18} />
          </a>
          <a href="https://gitlab.com/nayer-fki" target="_blank" rel="noreferrer" className="rounded-lg p-2 opacity-70 transition hover:bg-white/5 hover:opacity-100" aria-label="GitLab profile">
            <Image src="/icons/gitlab.svg" alt="" width={18} height={18} />
          </a>
          <ThemeToggle />
          <a href="/Nayer_Fki_CV.pdf" className="ml-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400">Resume</a>
        </div>

        <button type="button" className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden" aria-label="Toggle navigation menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="mobile-navigation border-t border-white/10 px-6 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white">{item.label}</Link>
            ))}
            <div className="mt-2 flex items-center gap-4 px-3 text-sm text-slate-400">
              <a href="https://github.com/nayer-fki" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
              <a href="https://gitlab.com/nayer-fki" target="_blank" rel="noreferrer" className="hover:text-white">GitLab</a>
              <a href="https://www.linkedin.com/in/nayer-fki" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
              <ThemeToggle />
            </div>
            <a href="/Nayer_Fki_CV.pdf" className="mt-2 rounded-lg bg-blue-500 px-3 py-2.5 text-center text-sm font-semibold text-white">Download resume</a>
          </div>
        </div>
      )}
    </header>
  );
}
