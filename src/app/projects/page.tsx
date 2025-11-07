// src/app/projects/page.tsx
import Link from "next/link";
import ProjectsClient from "./ProjectsClient";

export type Project = {
  title: string;
  period: string;
  org?: string;
  category: "Network" | "DevOps/Cloud" | "ML/AI" | "Web/JEE";
  summary: string;
  bullets: string[];
  stack: string[];
  image?: string;
  repo: string;      // ✅ إجباري باش نضمن زر Repository
  demo?: string;
};

// ✅ الداتا (كل مشروع عندو repo)
const PROJECTS: Project[] = [
  {
    title: "Conception et sécurisation d’un réseau d’entreprise",
    period: "mars 2025 – mai 2025",
    org: "IT BUSINESS SCHOOL",
    category: "Network",
    summary:
      "Infrastructure multisite complète: zones Inside/DMZ/Outside, VPN IPsec entre succursales, ASA5506-X, services DNS/Web/Mail et supervision.",
    bullets: [
      "Réseau structuré (VLANs, DMZ, Outside)",
      "VPN IPsec site-à-site + ACL hardening",
      "OSPF, DHCP, PAT, SSH",
      "Tests de sécurité & de disponibilité",
    ],
    stack: ["Cisco ASA", "VLAN", "DMZ", "VPN IPsec", "OSPF", "SIEM"],
    image: "/images/projects/enterprise-sec.jpg",
    repo: "https://github.com/nayer-fki/Rapport-du-Mini-Projet-R-seau-Conception-et-S-curisation-d-un-R-seau-d-Entreprise.git", // غيّرها للريبو الصحيح إذا تحب
  },
  {
    title: "SOC/NOC + DMZ — Pro Lab",
    period: "2025",
    category: "Network",
    summary:
      "Lab entreprise: DMZ avec services Docker (Nginx/DNS/Mail), ASA, Snort, centralisation de logs et dashboards.",
    bullets: ["Segmentation VLAN/DMZ", "Snort IDS + logs centralisés", "Dashboards & alerting"],
    stack: ["ASA", "Snort", "Docker", "SIEM"],
    image: "/images/projects/soc-noc-dmz.jpg",
    repo: "https://github.com/nayer-fki", // حدّثه وقت يكون عندك ريبو
  },
  {
    title: "Supervision & Audit Réseau dans le Cloud (GCP)",
    period: "avr. 2025 – mai 2025",
    org: "IT BUSINESS SCHOOL",
    category: "DevOps/Cloud",
    summary:
      "3 VM Linux multi-régions, VPC Flow Logs > BigQuery, alertes Cloud Functions, dashboards Looker Studio + rapport d’audit.",
    bullets: [
      "Collecte logs réseau + analyse BigQuery",
      "Alerting (latence/anomalies) via Cloud Functions",
      "Looker Studio pour visualisation",
    ],
    stack: ["GCP", "VPC", "BigQuery", "Cloud Functions", "Looker"],
    image: "/images/projects/gcp-audit.jpg",
    repo: "https://github.com/nayer-fki",
  },
  {
    title: "Meeting Room Reservation System (Microservices)",
    period: "mars 2025 – mai 2025",
    org: "IT BUSINESS SCHOOL",
    category: "DevOps/Cloud",
    summary:
      "Plateforme de réservation: FastAPI microservices, React frontend, Kafka, Docker, K8s, CI/CD.",
    bullets: ["Kafka pour communication asynchrone", "Kubernetes + pipelines CI/CD", "Observability de base"],
    stack: ["FastAPI", "React", "Kafka", "Docker", "Kubernetes", "CI/CD"],
    image: "/images/projects/meeting-reservation.jpg",
    repo: "https://github.com/nayer-fki/stock-management-system.git",
  },
  {
    title: "Pneumonia Detection with Deep Learning",
    period: "avr. 2025 – mai 2025",
    org: "IT BUSINESS SCHOOL",
    category: "ML/AI",
    summary:
      "CNN على صور X-ray: Backend FastAPI + Front React، solution Docker قابلة للنشر على GCP.",
    bullets: [
      "Prétraitement dataset & entraînement CNN",
      "API de prédiction FastAPI",
      "Interface React pour upload & résultats",
    ],
    stack: ["Python", "TensorFlow/Keras", "FastAPI", "React", "Docker"],
    image: "/images/projects/pneumonia.jpg",
    repo: "https://github.com/nayer-fki/project-pneumonia-detection-deep",
  },
  {
    title: "TTS-PY Machine-learning",
    period: "nov. 2024 – janv. 2025",
    category: "ML/AI",
    summary:
      "Pipeline TTS: préparation dataset, features MFCC/spectrogrammes، modèles KNN/LR/DT، métriques و visualisation.",
    bullets: ["Librosa + features audio", "Modèles classiques ML + comparaison", "Dashboard résultats"],
    stack: ["Python", "Librosa", "scikit-learn", "Flask/Jupyter"],
    image: "/images/projects/tts.jpg",
    repo: "https://github.com/nayer-fki/TTS-PY-Machine--learning",
  },
  {
    title: "Eshops — Plateforme E-commerce (Jakarta EE / JEE)",
    period: "avr. 2025 – mai 2025",
    org: "IT BUSINESS SCHOOL",
    category: "Web/JEE",
    summary:
      "Site e-commerce MVC: produits، catégories، utilisateurs، commandes. Servlets/JSP + JDBC.",
    bullets: ["Architecture MVC claire", "Gestion DB via JDBC", "UI simple et fonctionnelle"],
    stack: ["Java", "Jakarta EE", "Servlets/JSP", "JDBC", "MVC"],
    image: "/images/projects/eshop-jee.jpg",
    repo: "https://github.com/nayer-fki/eshop-jee-website",
  },
  {
    title: "Gym360 (MERN)",
    period: "2025",
    category: "Web/JEE",
    summary:
      "Plateforme fitness/e-shop: auth, rôles (admin/coach/client), uploads, analytics. Next.js + Node/Express + Mongo.",
    bullets: ["Auth + rôles", "Uploads & analytics", "Stack MERN/Next.js"],
    stack: ["Next.js", "Node", "MongoDB", "Auth"],
    image: "/images/projects/gym360.png",
    repo: "https://github.com/nayer-fki/gym360-smart",
  },
];

export const metadata = {
  title: "Projects — Nayer Fki",
  description: "Sélection de projets réseau, cloud/DevOps, ML/AI et web.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-cyber">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-400/10 to-cyan-400/20 blur-3xl animate-spin-slower"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-semibold">Projects</h1>
            <Link
              href="/"
              className="w-max rounded-lg border border-white/10 px-3 py-1.5 text-sm text-neutral-300 hover:text-white"
            >
              ← Back to Home
            </Link>
          </div>
          <p className="mt-2 max-w-3xl text-neutral-300">
            From enterprise network designs and SOC/NOC labs to cloud supervision,
            microservices, and ML/AI apps — a curated set of hands-on projects.
          </p>
        </div>
      </section>

      {/* Client side (filters/search/grid) */}
      <ProjectsClient projects={PROJECTS} />
    </main>
  );
}
