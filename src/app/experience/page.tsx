// src/app/experience/page.tsx
import Image from "next/image";
import Link from "next/link";

type Exp = {
  company: string;
  role: string;
  type?: string; // Stage / Freelance / Saisonnier
  location?: string;
  when: string;   // e.g. "juil. 2025 – août 2025 · 2 mois"
  start?: string; // for sorting if you want later (YYYY-MM)
  end?: string;
  logo?: string;  // /images/companies/...
  bullets: string[];
  tags?: string[];
};

const exp2025: Exp[] = [
  {
    company: "Tunisie Telecom",
    role: "Stagiaire en perfectionnement — Réseaux, Cybersécurité & Supervision",
    type: "Stage",
    location: "Nabeul, Tunisie",
    when: "juil. 2025 – août 2025 · 2 mois",
    logo: "/images/companies/tunisie-telecom.png",
    bullets: [
      "Mise en place d’un réseau avec VLANs, DMZ et tunnel VPN IPsec",
      "Pare-feux Cisco ASA (ACL hardening), serveurs DNS/Mail/Web en DMZ",
      "Centralisation des logs (serveurs, Snort IDS, iptables) vers un serveur interne",
      "Dashboards & alerting (stack de supervision)",
      "Conteneurisation (Docker), CI/CD",
    ],
    tags: ["VLAN", "DMZ", "VPN IPsec", "ASA", "Snort", "Docker", "SIEM"],
  },
  {
    company: "Tunisie Telecom",
    role: "Stagiaire en initiation — Réseaux & Télécom",
    type: "Stage",
    location: "Nabeul, Tunisie",
    when: "juin 2025 – juil. 2025 · 2 mois",
    logo: "/images/companies/tunisie-telecom.png",
    bullets: [
      "Découverte des infrastructures de transmission (fibre, xDSL, équipements actifs)",
      "Supervision de base et participation à la maintenance",
      "Contribution à l’analyse de pannes et à la supervision réseau",
    ],
    tags: ["Transmission", "xDSL", "Fibre", "NMS"],
  },
];

const exp2024: Exp[] = [
  {
    company: "Hôtel Africa Jade Thalasso",
    role: "Contrôleur au Service Contrôle",
    type: "Saisonnier",
    location: "Korba, Tunisie",
    when: "juin 2024 – sept. 2024 · 4 mois",
    logo: "/images/companies/africa-jade.png",
    bullets: [
      "Suivi des consommations internes et contrôle des écarts",
      "Vérification des bons de sortie / factures fournisseurs",
      "Inventaires périodiques et reporting pour la direction financière",
      "Amélioration des process internes",
    ],
    tags: ["Excel", "Procédures", "Reporting"],
  },
  {
    company: "NOVA-SOFT SOLUTION",
    role: "Développeur en automatisation Excel & VBA",
    type: "Freelance",
    location: "Allemagne (remote)",
    when: "janv. 2024 – mars 2024 · 3 mois",
    logo: "/images/companies/novasoft.png",
    bullets: [
      "Outils d’automatisation en Excel via VBA",
      "Intégration données clients et gestion d’informations",
      "Création d’outils personnalisés de gestion et traitement",
      "Respect de la confidentialité & sécurité de l’information",
    ],
    tags: ["Excel/VBA", "Automation", "Data"],
  },
];

const exp2023: Exp[] = [
  {
    company: "Hôtel Africa Jade Thalasso",
    role: "Aide Économe",
    type: "Saisonnier",
    location: "Korba, Tunisie",
    when: "juin 2023 – sept. 2023 · 4 mois",
    logo: "/images/companies/africa-jade.png",
    bullets: [
      "Suivi des stocks et fiches de consommation",
      "Organisation des inventaires mensuels",
      "Appui logistique et gestion des ressources",
    ],
    tags: ["Stock", "Procédures", "Logistique"],
  },
  {
    company: "SOTIPAPIER",
    role: "Stagiaire PFE — Projet d’automatisation industrielle",
    type: "Stage",
    location: "Belli, Nabeul",
    when: "févr. 2023 – juin 2023 · 5 mois",
    logo: "/images/companies/sotipapier.png",
    bullets: [
      "Optimisation du système de supervision d’un pont roulant",
      "Étude et refonte du système (armoire électrique & contrôle)",
      "Intégration automate Siemens S7-1500 + IHM tactile",
      "Télécommande à distance & interface de supervision",
      "Rédaction technique et tests sur site",
    ],
    tags: ["Siemens S7-1500", "IHM", "Automates", "Supervision"],
  },
];

const exp2022: Exp[] = [
  {
    company: "Hôtel Africa Jade Thalasso",
    role: "Aide Économe",
    type: "Saisonnier",
    location: "Korba, Tunisie",
    when: "juin 2022 – sept. 2022 · 4 mois",
    logo: "/images/companies/africa-jade.png",
    bullets: [
      "Réception et vérification des marchandises",
      "Suivi entrées/sorties de stock & demandes de réappro.",
      "Collaboration fournisseurs & personnel cuisine",
    ],
    tags: ["Stock", "Réception", "Réappro"],
  },
  {
    company: "WeWire Tunisia",
    role: "Stagiaire en perfectionnement industriel",
    type: "Stage",
    location: "Hammamet, Tunisie",
    when: "janv. 2022 – févr. 2022 · 2 mois",
    logo: "/images/companies/wewire.png",
    bullets: [
      "Participation au câblage/assemblage pour l’industrie automobile",
      "Découverte normes qualité et procédures de test",
      "Intégration chaînes de production & contraintes de productivité",
    ],
    tags: ["Qualité", "Production", "Automobile"],
  },
];

const exp2021: Exp[] = [
  {
    company: "BMT",
    role: "Stagiaire en initiation technique",
    type: "Stage",
    location: "Korba, Tunisie",
    when: "janv. 2021 – févr. 2021 · 2 mois",
    logo: "/images/companies/bmt.png",
    bullets: [
      "Observation du fonctionnement industriel & process techniques",
      "Installations électriques et maintenance de premier niveau",
      "Découverte environnement industriel",
    ],
    tags: ["Électricité", "Maintenance", "Industrie"],
  },
];

const YEARS: { year: string; items: Exp[] }[] = [
  { year: "2025", items: exp2025 },
  { year: "2024", items: exp2024 },
  { year: "2023", items: exp2023 },
  { year: "2022", items: exp2022 },
  { year: "2021", items: exp2021 },
];

export const metadata = {
  title: "Experience — Nayer Fki",
  description:
    "Parcours professionnel: réseaux, cybersécurité, DevOps/Cloud et expériences industrielles.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* header section */}
      <section className="relative overflow-hidden bg-cyber">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-400/10 to-cyan-400/20 blur-3xl animate-spin-slower"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Experience</h1>
            <Link
              href="/"
              className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-neutral-300 hover:text-white"
            >
              ← Back to Home
            </Link>
          </div>
          <p className="mt-2 max-w-3xl text-neutral-300">
            Réseaux & cybersécurité (VLAN/DMZ/VPN, Cisco ASA, SIEM), DevOps/Cloud
            et missions industrielles. Voici mon parcours détaillé par année.
          </p>
        </div>
      </section>

      {/* timeline */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />

          <div className="space-y-12">
            {YEARS.map(({ year, items }, i) => (
              <div key={year} className="relative">
                {/* year badge */}
                <div className="mb-6 flex items-center justify-start md:justify-center">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300">
                    {year}
                  </span>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {items.map((e, idx) => (
                    <article
                      key={`${year}-${idx}`}
                      className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
                    >
                      {/* dot on line */}
                      <span className="absolute -left-[23px] top-6 hidden h-3 w-3 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 md:block" />

                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          {e.logo && (
                            <Image
                              src={e.logo}
                              alt={e.company}
                              width={32}
                              height={32}
                              className="h-8 w-8 rounded-md object-contain"
                            />
                          )}
                          <div>
                            <h3 className="text-base font-semibold leading-tight">
                              {e.role}
                            </h3>
                            <p className="mt-0.5 text-sm text-neutral-400">
                              {e.company}
                              {e.type ? ` · ${e.type}` : ""}{" "}
                              {e.location ? ` · ${e.location}` : ""}
                            </p>
                          </div>
                        </div>
                        <span className="shrink-0 text-xs text-neutral-400">
                          {e.when}
                        </span>
                      </div>

                      <ul className="mt-3 space-y-1.5 text-sm text-neutral-300">
                        {e.bullets.map((b, k) => (
                          <li key={k} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/90" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {e.tags && e.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {e.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
