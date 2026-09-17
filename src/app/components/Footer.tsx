export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Nayer Fki. All rights reserved.</p>
        <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
