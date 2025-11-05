import Navbar from "./components/Navbar";

function Section({ id, title, children }: { id: string; title: string; children?: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400">Portfolio</p>
        <h1 className="mt-2 text-4xl sm:text-6xl font-bold leading-tight">
          Nayer — Network & Cybersecurity Engineer <span className="text-neutral-400">&</span> Full-Stack Dev
        </h1>
        <p className="mt-6 text-lg text-neutral-300 max-w-3xl">
          I build secure infrastructures (VLAN/DMZ/ASA, SOC/SIEM, DevSecOps) and modern web apps (MERN, Next.js).
          Passion for automation, cloud, and AI.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://github.com/nayer-fki"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl px-5 py-3 bg-white text-black font-medium"
        >
          
          GitHub
        </a>

        <a
          href="mailto:you@example.com"
          className="rounded-2xl px-5 py-3 border border-neutral-700 hover:border-neutral-500 transition"
        >
          Contact Me
        </a>
      </div>

      </section>

      <Section id="projects" title="Featured Projects">
        <div className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-neutral-800 p-6 hover:border-neutral-600 transition">
            <h3 className="text-xl font-semibold">Gym360 (MERN)</h3>
            <p className="mt-2 text-neutral-300">Dashboard, analytics, role-based access, uploads, CI/CD.</p>
            <div className="mt-3 text-sm text-neutral-400">React · Node · MongoDB · Docker</div>
          </article>
          <article className="rounded-2xl border border-neutral-800 p-6 hover:border-neutral-600 transition">
            <h3 className="text-xl font-semibold">SOC / NOC + DMZ</h3>
            <p className="mt-2 text-neutral-300">VLANs, ASA, Snort IDS, Splunk SIEM, Docker services in DMZ.</p>
            <div className="mt-3 text-sm text-neutral-400">Cisco · Snort · Splunk · Docker</div>
          </article>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <ul className="grid gap-2 sm:grid-cols-2 text-neutral-300">
          <li>Networking & Security: VLAN, DMZ, ASA, VPN, Snort, SIEM (Splunk)</li>
          <li>DevOps/Cloud: Docker, Kubernetes, CI/CD, GitHub Actions</li>
          <li>Web: Next.js, React, Node.js, Express, MongoDB</li>
          <li>Observability: Prometheus, Grafana</li>
        </ul>
      </Section>

      <Section id="certs" title="Certifications">
        <ul className="list-disc pl-5 text-neutral-300">
          <li>IBM Cybersecurity Analyst</li>
          <li>Google (Cloud / Security)</li>
          <li>Cisco (Linux)</li>
          <li>AWS Security & Cloud</li>
        </ul>
      </Section>

      <Section id="contact" title="Contact">
        <p className="text-neutral-300">
          Email: <a className="underline" href="mailto:you@example.com">you@example.com</a>
        </p>
      </Section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-neutral-500">
        © {new Date().getFullYear()} Nayer. All rights reserved.
      </footer>
    </main>
  );
}
