import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "DevWiseOps Case Study",
  description: "Final-year engineering project: a multi-product DevSecOps/GitOps architecture and centralized operations platform.",
};

const capabilities = [
  {
    title: "Delivery governance",
    text: "GitLab project and pipeline visibility, versioned workspaces, quality policies, controlled promotion, and evidence tied to source revisions.",
  },
  {
    title: "Runtime operations",
    text: "Managed endpoints, Vault-backed credentials, SSH and K3s discovery, runtime inventory, health probes, and freshness-aware status reporting.",
  },
  {
    title: "Observability and security",
    text: "Metrics, logs, traces, alerts, security events, incident views, immutable audit records, and private-access readiness.",
  },
  {
    title: "Intelligent assistance",
    text: "Evidence-grounded RAG with citations, Qdrant indexing, explicit uncertainty, human validation, and operational BI dashboards.",
  },
];

const technologies = ["GitLab CI/CD", "Docker Compose", "K3s", "Argo CD", "Terraform", "Ansible", "Kustomize", "Keycloak", "Vault", "Spring Boot", "Angular", "FastAPI", "Go", "PostgreSQL", "RabbitMQ", "Redis", "MinIO", "Prometheus", "Loki", "Tempo", "OpenTelemetry", "Qdrant", "Playwright", "k6"];

const productMissions = [
  {
    name: "Speedline",
    scope: "GCP migration and OVHcloud target",
    logo: "/images/projects/logos/speedline.png",
    repository: "https://gitlab.com/Mohammed_KHNine/speedline",
    live: "https://speedlineapp.tn",
    mission:
      "Audited the legacy GCP infrastructure and built the OVHcloud K3s/GitOps target with Terraform, Argo CD, Kustomize, Traefik, and 23 managed components.",
    environment:
      "Staging and production were logically isolated with namespaces and overlays. I also documented the physical separation into dedicated OVH VPS clusters, including backup, DNS cutover, hardening, and rollback; that second step is presented as a migration plan, not as a completed production claim.",
    evidence: "Targeted runtime evidence recorded 24/24 application replicas ready in production.",
  },
  {
    name: "Planify",
    scope: "Selective CI/CD and GitOps delivery",
    logo: "/images/projects/logos/planify.png",
    repository: "https://gitlab.com/Mohammed_KHNine/sma",
    mission:
      "Provisioned an OVH VPS, K3s namespaces, and Argo CD with Terraform; created seven reusable Helm charts and 19 staging applications for the Angular frontend and selected microservices.",
    environment:
      "The validated scope was a targeted staging path. Production promotion, restoration, and the complete business journey were not claimed as end-to-end validated.",
    evidence: "Pipeline #2730942453 built, deployed, and verified the frontend, Finance, and Pointage services.",
  },
  {
    name: "Helpify",
    scope: "Progressive DevSecOps migration",
    logo: "/images/projects/logos/helpify.png",
    repository: "https://gitlab.com/Mohammed_KHNine/helpify",
    mission:
      "Created a dedicated Terraform, K3s, Argo CD, and Kustomize foundation, then ordered platform, data, microservice, translation, and interface delivery by dependency.",
    environment:
      "Staging and production had separate desired states. The evidence validates the targeted staging flow; the complete production, recovery, and full security path remained outside that validation level.",
    evidence: "Pipeline #2739698059 passed four builds, four staging deployments, and four verification jobs.",
  },
  {
    name: "ExamBuilder",
    scope: "Production infrastructure and Grafana",
    logo: "/images/projects/logos/exambuilder.jpg",
    repository: "https://gitlab.com/Mohammed_KHNine/EXAM_GEN",
    live: "https://exambuilder.tn",
    mission:
      "Implemented layered K3s infrastructure and GitOps promotion with separate staging/production concerns, protected delivery jobs, smoke checks, and production operations.",
    environment:
      "The observability layer combines Prometheus, Grafana, Alertmanager, Blackbox Exporter, node-exporter, and kube-state-metrics. Grafana is the only public monitoring entry point and is protected by authentication.",
    evidence: "Three Git-managed Grafana dashboards cover host infrastructure, Kubernetes workloads, and real-time performance/k6 signals.",
    monitoring: "https://monitor.exambuilder.tn",
    extension: true,
  },
];

export default function DevWiseOpsCaseStudy() {
  return (
    <main className="page-shell">
      <Navbar />
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <Link href="/projects" className="text-sm font-medium text-blue-300 hover:text-blue-200">← Back to projects</Link>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.25fr_.75fr]">
            <div>
              <div className="flex items-center gap-3">
                <Image src="/images/projects/logos/devwiseops.png" alt="DevWiseOps logo" width={56} height={56} className="h-14 w-14 rounded-xl bg-white object-contain p-1.5" />
                <div><p className="eyebrow">Final-year engineering project</p><p className="mt-1 text-sm text-slate-400">DevWise · February–August 2026</p></div>
              </div>
              <h1 className="text-balance mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">DevWiseOps</h1>
              <p className="mt-4 max-w-3xl text-xl leading-8 text-slate-300">Design and implementation of a multi-product DevSecOps/GitOps infrastructure and an intelligent centralized operations platform.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://gitlab.com/Mohammed_KHNine/devwiseops" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-400"><Image src="/icons/gitlab.svg" alt="" width={18} height={18} />Private GitLab repository <span aria-hidden="true">↗</span></a>
                <a href="mailto:nayerfki5@gmail.com?subject=DevWiseOps%20project" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Request more information</a>
              </div>
            </div>
            <Image src="/images/companies/devwise.png" alt="DevWise logo" width={648} height={485} className="mx-auto max-h-56 w-auto rounded-2xl bg-white p-6" />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[['24', 'weeks'], ['12', 'two-week sprints'], ['4', 'product contexts'], ['4', 'delivery releases']].map(([value, label]) => <div key={label} className="surface-card rounded-xl p-5"><strong className="text-3xl font-semibold text-white">{value}</strong><p className="mt-1 text-sm text-slate-400">{label}</p></div>)}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="eyebrow">The challenge</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">One evidence model for different delivery environments.</h2></div>
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>Four existing products—DevWise, Helpify, Planify, and Speedline—used different infrastructure and delivery approaches. Automation existed, but pipelines, environments, controls, and runtime evidence were difficult to compare.</p>
            <p>The project established a shared reference without forcing every product into one architecture. It linked source changes, built artifacts, target environments, runtime state, and audit evidence while preserving each source system as the authority for its own data.</p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10">
          <Image src="/images/projects/devwiseops-command-center.png" alt="DevWiseOps command center showing operational indicators" width={1600} height={900} className="w-full object-cover" />
        </div>

        <div id="product-missions" className="scroll-mt-24 pt-16">
          <p className="eyebrow">Product-by-product missions</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white">A precise infrastructure mission for every product.</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">Each card separates implemented work, validation evidence, and remaining scope. The links provide direct access to the corresponding private GitLab project.</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {productMissions.map((product) => (
              <article key={product.name} className="surface-card flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <Image src={product.logo} alt={`${product.name} logo`} width={52} height={52} className="h-[52px] w-[52px] rounded-xl bg-white object-contain p-1.5" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                    <p className="mt-1 text-sm text-blue-300">{product.scope}</p>
                  </div>
                </div>
                {product.extension && <p className="mt-5 rounded-lg border border-amber-300/20 bg-amber-300/[0.06] px-3 py-2 text-xs leading-5 text-amber-200">Post-PFE extension: ExamBuilder was a complementary monitored runtime in the original report; this infrastructure work was developed separately afterward.</p>}
                <div className="mt-5 text-sm leading-6 text-slate-300">
                  <p><strong className="text-white">Mission:</strong> {product.mission}</p>
                  <div className="mt-4 hidden space-y-4 sm:block">
                    <p><strong className="text-white">Environments:</strong> {product.environment}</p>
                    <p><strong className="text-white">Evidence:</strong> {product.evidence}</p>
                  </div>
                  <details className="mt-4 rounded-lg border border-white/10 bg-white/[0.02] p-3 sm:hidden">
                    <summary className="cursor-pointer font-medium text-slate-200">Environment and evidence</summary>
                    <div className="mt-3 space-y-3 text-slate-400"><p>{product.environment}</p><p><strong className="text-slate-200">Evidence:</strong> {product.evidence}</p></div>
                  </details>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  {product.live && <a href={product.live} target="_blank" rel="noreferrer" className="text-sm font-semibold text-emerald-300 hover:text-emerald-200">Open production app <span aria-hidden="true">↗</span></a>}
                  <a href={product.repository} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"><Image src="/icons/gitlab.svg" alt="" width={17} height={17} />Open private GitLab project <span aria-hidden="true">↗</span></a>
                  {product.monitoring && <a href={product.monitoring} target="_blank" rel="noreferrer" className="text-sm font-semibold text-blue-300 hover:text-blue-200">Open protected Grafana <span aria-hidden="true">↗</span></a>}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Platform capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">A control plane from source to runtime.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {capabilities.map((capability, index) => <article key={capability.title} className="surface-card rounded-2xl p-6"><span className="text-xs font-semibold text-blue-300">0{index + 1}</span><h3 className="mt-3 text-lg font-semibold text-white">{capability.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{capability.text}</p></article>)}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">My contribution</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Designed, integrated, tested, and documented.</h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
              {[
                "Audited the initial delivery and infrastructure state and defined the reusable DevSecOps/GitOps reference.",
                "Implemented infrastructure, CI/CD, GitOps adaptations, services, user interface, integrations, tests, runbooks, diagrams, and evidence artifacts.",
                "Built DevWiseOps around independently owned domains using Java, Go, and Python services behind an Angular interface and API gateway.",
                "Created a validation model that distinguishes configured capability, controlled execution, and verified end-to-end behavior.",
              ].map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" /><span>{item}</span></li>)}
            </ul>
          </div>
          <div className="surface-card rounded-2xl p-6">
            <p className="eyebrow">Validation snapshot</p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p><strong className="text-white">Automated suites:</strong> 509 Java tests, 181 Python tests plus 12 subtests, and 36 Go tests passed in the targeted local campaign.</p>
              <p><strong className="text-white">Observability:</strong> 18 of 18 Prometheus targets were up during the recorded local validation.</p>
              <p><strong className="text-white">Load probe:</strong> 1,383 read-only health requests completed without failure, with an 11.02 ms p95 in the local laboratory.</p>
              <p className="border-t border-white/10 pt-4 text-slate-400"><strong className="text-amber-300">Scope note:</strong> these results demonstrate targeted local or product-level workflows. The report does not claim a complete end-to-end N3 production path across the entire portfolio.</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Technology stack</p>
          <div className="mt-5 flex flex-wrap gap-2">{technologies.map((technology) => <span key={technology} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300">{technology}</span>)}</div>
        </div>

        <div className="mt-16 rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-6 text-sm leading-6 text-slate-300">
          <strong className="text-white">Ownership clarification.</strong> DevWise, Helpify, Planify, and Speedline were existing company products. My work covered their DevOps audit and industrialization scope, plus the design and implementation of the separate DevWiseOps platform; I do not present their business application code as my own work.
        </div>
      </section>
      <Footer />
    </main>
  );
}
