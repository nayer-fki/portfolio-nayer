"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/70 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="/" className="font-semibold tracking-wide">Nayer</a>
        <div className="flex gap-4 text-sm text-neutral-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#certs" className="hover:text-white">Certifications</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  );
}
