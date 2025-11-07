// src/app/certifications/page.tsx
import Image from "next/image";
import Link from "next/link";

type Cert = {
  name: string;
  org: string;
  date: string;
  logo: string;
  id?: string;
  skills: string[];
  proof?: string;
};

const certifications: Cert[] = [
  {
    name: "CCNA: Enterprise Networking, Security, and Automation",
    org: "Cisco",
    date: "sept. 2025",
    logo: "/images/certifcation/cisco.png",
    id: "https://www.credly.com/badges/",
    skills: ["Networking", "VLAN", "Firewall", "Routing & Switching", "SIEM"],
  },
  {
    name: "IBM Cybersecurity Analyst",
    org: "IBM",
    date: "juil. 2025",
    logo: "/images/certifcation/IBM.jpg",
    id: "https://coursera.org/verify/R7Q8BHTUOUOA",
    skills: ["SOC/NOC", "SIEM", "IDS/IPS", "Splunk", "Snort"],
  },
  {
    name: "Introduction to Big Data with Spark and Hadoop",
    org: "IBM",
    date: "juin 2025",
    logo: "/images/certifcation/IBM.jpg",
    id: "https://coursera.org/verify/JYO5WWKA92DL",
    skills: ["Big Data", "Spark", "Hadoop", "Monitoring"],
  },
  {
    name: "Linux Essentials",
    org: "Cisco",
    date: "mai 2025",
    logo: "/images/certifcation/cisco.png",
    id: "https://www.credly.com/badges/",
    skills: ["Linux", "Python", "Bash", "PowerShell"],
  },
  {
    name: "Getting Started with Deep Learning",
    org: "NVIDIA",
    date: "janv. 2025",
    logo: "/images/certifcation/nvidia.png",
    id: "https://www.credly.com/badges/",
    skills: ["Deep Learning", "AI", "Neural Networks"],
  },
  {
    name: "AWS Academy Machine Learning Foundations",
    org: "Amazon Web Services (AWS)",
    date: "déc. 2024",
    logo: "/images/certifcation/aws.png",
    id: "https://www.credly.com/badges/",
    skills: ["AWS", "Machine Learning", "Cloud Basics"],
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    org: "Cisco",
    date: "juil. 2024",
    logo: "/images/certifcation/cisco.png",
    id: "https://www.credly.com/badges/",
    skills: ["Routing", "Switching", "VLAN", "Firewall"],
  },
  {
    name: "Spécialisation Python 3 Programming",
    org: "University of Michigan",
    date: "mars 2024",
    logo: "/images/certifcation/michigan.png",
    id: "https://coursera.org/verify/62HALL8HCJL8",
    skills: ["Python", "Bash", "Automation", "Scripting"],
  },
  {
    name: "Database Programming with SQL",
    org: "Oracle",
    date: "janv. 2024",
    logo: "/images/certifcation/oracle.png",
    id: "https://www.credly.com/badges/",
    skills: ["SQL", "Database", "Query Optimization"],
  },
];

export const metadata = {
  title: "Certifications — Nayer Fki",
  description:
    "Certifications professionnelles en cybersécurité, cloud, DevOps et développement (Cisco, IBM, AWS, etc.).",
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-cyber">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-400/10 to-cyan-400/20 blur-3xl animate-spin-slower"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Certifications</h1>
            <Link
              href="/"
              className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-neutral-300 hover:text-white"
            >
              ← Back to Home
            </Link>
          </div>
          <p className="mt-2 max-w-3xl text-neutral-300">
            Licences et certifications validées par des institutions reconnues :
            Cisco, IBM, AWS, NVIDIA, Oracle et University of Michigan.
          </p>
        </div>
      </section>

      {/* Certifications grid */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((c, i) => (
            <article
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-400/30"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={c.logo}
                  alt={c.org}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-md object-contain"
                />
                <div>
                  <h3 className="text-base font-semibold leading-tight">
                    {c.name}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {c.org} · {c.date}
                  </p>
                </div>
              </div>

              {c.id && (
                <a
                  href={c.id}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-300 hover:border-emerald-400/30"
                >
                  Afficher l’identifiant{" "}
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              )}

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {c.skills.map((s, k) => (
                  <span
                    key={k}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
