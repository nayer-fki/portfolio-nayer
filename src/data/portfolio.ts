export type ProjectCategory = "DevOps" | "Cloud" | "Software" | "AI";

export type Project = {
  title: string;
  period: string;
  organization?: string;
  category: ProjectCategory;
  summary: string;
  highlights: string[];
  stack: string[];
  image: string;
  logo?: string;
  repository?: string;
  repositoryLabel?: string;
  caseStudyHref?: string;
};

export type Experience = {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  logo?: string;
  highlights: string[];
  stack: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  logo: string;
  credential?: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    title: "DevWiseOps — DevSecOps Governance Platform",
    period: "February 2026 – August 2026",
    organization: "DevWise · Final-Year Engineering Project",
    category: "DevOps",
    summary:
      "Designed a multi-product DevSecOps/GitOps reference architecture and built a centralized platform that connects delivery, runtime, security, observability, and operational evidence.",
    highlights: [
      "Audited four heterogeneous products and adapted a common CI/CD, infrastructure-as-code, GitOps, and environment-separation standard to each context",
      "Built a microservices control plane integrating identity and RBAC, GitLab pipelines, workspaces, managed endpoints, K3s runtime discovery, Vault-backed secrets, and audit events",
      "Integrated Prometheus, Loki, Tempo, OpenTelemetry, security controls, evidence-grounded RAG, and operational BI while explicitly tracking validation scope and data freshness",
    ],
    stack: ["GitLab CI/CD", "Docker", "K3s", "Argo CD", "Terraform", "Vault", "OpenTelemetry", "Prometheus"],
    image: "/images/projects/devwiseops-command-center.png",
    logo: "/images/projects/logos/devwiseops.png",
    repository: "https://gitlab.com/Mohammed_KHNine/devwiseops",
    repositoryLabel: "Private GitLab repository",
    caseStudyHref: "/projects/devwiseops",
  },
  {
    title: "Speedline — GCP to OVHcloud Infrastructure",
    period: "2026",
    organization: "DevWise · PFE product mission",
    category: "Cloud",
    summary:
      "Industrialized Speedline's delivery architecture while preparing its transition from the legacy GCP estate to an OVHcloud K3s and GitOps platform.",
    highlights: [
      "Audited the legacy GCP setup and designed the OVHcloud target with Terraform, K3s, Argo CD, Kustomize, and 23 versioned GitOps components",
      "Implemented logical staging/production isolation through dedicated namespaces and overlays; documented the physical split into separate OVH VPS clusters, including DNS, backup, cutover, hardening, and rollback steps",
      "Connected the production runtime to DevWiseOps observability and recorded a targeted state with 24 of 24 application replicas ready behind Traefik",
    ],
    stack: ["GCP", "OVHcloud", "Terraform", "K3s", "Argo CD", "Kustomize", "Prometheus", "Traefik"],
    image: "/images/projects/pfe/speedline-observability.png",
    logo: "/images/projects/logos/speedline.png",
    repository: "https://gitlab.com/Mohammed_KHNine/speedline",
    repositoryLabel: "Private GitLab repository",
    caseStudyHref: "/projects/devwiseops#product-missions",
  },
  {
    title: "Planify — K3s and GitOps Delivery",
    period: "2026",
    organization: "DevWise · PFE product mission",
    category: "DevOps",
    summary:
      "Created a selective CI/CD and GitOps delivery path for Planify's Angular frontend and microservices on an OVHcloud-hosted K3s platform.",
    highlights: [
      "Provisioned the OVH VPS foundation, K3s namespaces, and Argo CD with Terraform",
      "Created seven reusable Helm charts and 19 staging Argo CD applications with environment-specific configuration",
      "Validated a targeted GitLab pipeline that built, deployed, and verified the frontend, Finance, and Pointage services in staging",
    ],
    stack: ["GitLab CI/CD", "OVHcloud", "Terraform", "K3s", "Argo CD", "Helm", "Angular"],
    image: "/images/projects/pfe/planify-pipeline.png",
    logo: "/images/projects/logos/planify.png",
    repository: "https://gitlab.com/Mohammed_KHNine/sma",
    repositoryLabel: "Private GitLab repository",
    caseStudyHref: "/projects/devwiseops#product-missions",
  },
  {
    title: "Helpify — Progressive DevSecOps Migration",
    period: "2026",
    organization: "DevWise · PFE product mission",
    category: "DevOps",
    summary:
      "Built a dedicated K3s/GitOps foundation for Helpify and migrated its services progressively with controlled staging and production states.",
    highlights: [
      "Provisioned infrastructure with Terraform and organized K3s, Argo CD, and Kustomize delivery around separate staging and production states",
      "Defined dependency-aware deployment for platform services, data services, microservices, translation services, and user interfaces",
      "Validated four image builds, four staging deployments, and four runtime checks in a successful targeted GitLab pipeline",
    ],
    stack: ["GitLab CI/CD", "Terraform", "K3s", "Argo CD", "Kustomize", "RabbitMQ", "OpenTelemetry"],
    image: "/images/projects/pfe/helpify-pipeline.png",
    logo: "/images/projects/logos/helpify.png",
    repository: "https://gitlab.com/Mohammed_KHNine/helpify",
    repositoryLabel: "Private GitLab repository",
    caseStudyHref: "/projects/devwiseops#product-missions",
  },
  {
    title: "ExamBuilder — Infrastructure and Grafana Observability",
    period: "2026",
    organization: "Post-PFE DevOps extension",
    category: "DevOps",
    summary:
      "Extended the PFE approach into a production-oriented ExamBuilder platform with layered K3s infrastructure, GitOps promotion, and a dedicated observability stack.",
    highlights: [
      "Separated staging and production concerns across foundation, access and security, shared services, applications, and operations layers",
      "Implemented GitLab quality, security, image-build, infrastructure, GitOps promotion, deployment, and production-operation stages",
      "Deployed Prometheus, Grafana, Alertmanager, Blackbox Exporter, node-exporter, and kube-state-metrics with three version-controlled Grafana dashboards for infrastructure, Kubernetes, and real-time performance",
    ],
    stack: ["GitLab CI/CD", "Terraform", "K3s", "Argo CD", "Helm", "Prometheus", "Grafana", "Alertmanager"],
    image: "/images/projects/pfe/exambuilder-observability.png",
    logo: "/images/projects/logos/exambuilder.jpg",
    repository: "https://gitlab.com/Mohammed_KHNine/EXAM_GEN",
    repositoryLabel: "Private GitLab repository",
    caseStudyHref: "/projects/devwiseops#product-missions",
  },
  {
    title: "MediCore AI",
    period: "2026",
    organization: "Independent engineering project",
    category: "AI",
    summary:
      "An intelligent medical-practice platform combining patient operations, supervised AI workflows, mobile access, and governed business intelligence.",
    highlights: [
      "Containerized the web, API, mobile, PostgreSQL, ML, NiFi, and Superset workloads as a reproducible multi-service environment",
      "Versioned analytical views and dashboard provisioning, including 14 PostgreSQL views, 14 datasets, 39 charts, and three Superset dashboards",
      "Defined the GitLab and GitOps migration path while documenting secret management, reproducibility, and recovery limitations",
    ],
    stack: ["React", "Node.js", "Python", "PostgreSQL", "Docker", "NiFi", "Superset", "GitLab"],
    image: "/images/projects/medicore-ai.jpg",
    logo: "/images/projects/logos/medicore.png",
    repository: "https://gitlab.com/nayer-fki/medicore-ai",
    repositoryLabel: "Private GitLab repository",
  },
  {
    title: "DHTech Logistics",
    period: "2026",
    organization: "Industrial logistics platform",
    category: "Software",
    summary:
      "A full-stack logistics and production-tracking system covering customers, orders, receipts, batches, workshop movements, stock, anomalies, and shipments.",
    highlights: [
      "Developed a Next.js and NestJS application with Prisma, PostgreSQL, Redis, role-based workflows, and auditable business operations",
      "Created a Docker Compose environment with persistent services, health checks, automated migrations, seed data, and administration tooling",
      "Validated the complete industrial flow from customer order and partial receipt through production, inventory, shipment, and audit history",
    ],
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Redis", "Docker Compose"],
    image: "/images/projects/dhtech-logistics.jpeg",
    logo: "/images/projects/logos/dhtech.png",
    repository: "https://gitlab.com/nayer-fki/dhtech-logistics",
    repositoryLabel: "Private GitLab repository",
  },
  {
    title: "MEDIS Track",
    period: "2026",
    organization: "Commerce, WMS, and logistics platform",
    category: "DevOps",
    summary:
      "A web and mobile logistics platform with order management, warehouse operations, fleet workflows, live tracking, and controlled multi-environment delivery.",
    highlights: [
      "Built GitLab CI quality gates for unit and integration tests, production builds, container publishing, and smoke validation",
      "Provisioned VPS and DNS foundations with Terraform and secured HTTPS ingress with Traefik, isolated networks, environments, data, and secrets",
      "Implemented immutable SHA-tagged releases, automatic staging delivery, manual production promotion, health-based rollback, and pre-migration PostgreSQL backups",
    ],
    stack: ["GitLab CI/CD", "Terraform", "Docker", "Traefik", "Next.js", "Express", "Expo", "PostgreSQL"],
    image: "/images/projects/medis-track.jpg",
    logo: "/images/projects/logos/medis-track.jpeg",
    repository: "https://gitlab.com/nayer-fki/medis-track",
    repositoryLabel: "Private GitLab repository",
  },
  {
    title: "Secure Enterprise Network Architecture",
    period: "March 2025 – May 2025",
    organization: "IT Business School",
    category: "DevOps",
    summary:
      "Designed and secured a multi-site enterprise infrastructure with segmented internal, DMZ, and external zones.",
    highlights: [
      "Implemented site-to-site IPsec VPN and hardened access-control policies",
      "Configured OSPF, DHCP, PAT, SSH, and resilient network services",
      "Validated availability and security through structured test scenarios",
    ],
    stack: ["Cisco ASA", "VLAN", "DMZ", "IPsec", "OSPF", "Monitoring"],
    image: "/images/projects/enterprise-sec.jpg",
    repository:
      "https://github.com/nayer-fki/Rapport-du-Mini-Projet-R-seau-Conception-et-S-curisation-d-un-R-seau-d-Entreprise.git",
  },
  {
    title: "Cloud Network Monitoring and Audit",
    period: "April 2025 – May 2025",
    organization: "IT Business School",
    category: "Cloud",
    summary:
      "Built a multi-region monitoring environment on Google Cloud to collect, analyze, and visualize network activity.",
    highlights: [
      "Collected VPC Flow Logs and analyzed them with BigQuery",
      "Automated latency and anomaly alerts with Cloud Functions",
      "Created operational dashboards and delivered a technical audit report",
    ],
    stack: ["GCP", "VPC", "BigQuery", "Cloud Functions", "Looker Studio"],
    image: "/images/projects/gcp-audit.jpg",
  },
  {
    title: "Meeting Room Reservation Platform",
    period: "March 2025 – May 2025",
    organization: "IT Business School",
    category: "DevOps",
    summary:
      "Developed a containerized microservices platform for managing meeting-room availability and reservations.",
    highlights: [
      "Used Kafka for asynchronous communication between services",
      "Packaged services with Docker and deployed them on Kubernetes",
      "Integrated CI/CD workflows and foundational observability",
    ],
    stack: ["FastAPI", "React", "Kafka", "Docker", "Kubernetes", "CI/CD"],
    image: "/images/projects/meeting-reservation.jpg",
  },
  {
    title: "Pneumonia Detection Platform",
    period: "April 2025 – May 2025",
    organization: "IT Business School",
    category: "AI",
    summary:
      "Created an end-to-end application that uses a convolutional neural network to analyze chest X-rays.",
    highlights: [
      "Prepared the dataset and trained the image-classification model",
      "Exposed predictions through a FastAPI service",
      "Built a React interface and containerized the full solution",
    ],
    stack: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
    image: "/images/projects/pneumonia.jpg",
    repository: "https://github.com/nayer-fki/project-pneumonia-detection-deep",
  },
  {
    title: "Speech and Machine Learning Playground",
    period: "November 2024 – January 2025",
    category: "AI",
    summary:
      "Explored audio feature extraction and compared classical machine-learning models in a text-to-speech workflow.",
    highlights: [
      "Extracted MFCC and spectrogram-based audio features",
      "Compared KNN, logistic regression, and decision-tree models",
      "Visualized evaluation metrics for repeatable experiments",
    ],
    stack: ["Python", "Librosa", "scikit-learn", "Jupyter"],
    image: "/images/projects/tts.jpg",
    repository: "https://github.com/nayer-fki/TTS-PY-Machine--learning",
  },
  {
    title: "E-commerce Web Platform",
    period: "April 2025 – May 2025",
    organization: "IT Business School",
    category: "Software",
    summary:
      "Developed an MVC e-commerce application for products, categories, users, and order management.",
    highlights: [
      "Structured the application around a clear MVC architecture",
      "Implemented persistent data access with JDBC",
      "Delivered product, customer, and order-management workflows",
    ],
    stack: ["Java", "Jakarta EE", "Servlets", "JSP", "JDBC", "MVC"],
    image: "/images/projects/eshop-jee.jpg",
    repository: "https://github.com/nayer-fki/eshop-jee-website",
  },
  {
    title: "Gym360 Fitness Platform",
    period: "2025",
    category: "Software",
    summary:
      "Built a fitness and commerce platform with authentication, role-based experiences, uploads, and analytics.",
    highlights: [
      "Implemented administrator, coach, and customer roles",
      "Built secure authentication and content-upload workflows",
      "Added operational and engagement analytics",
    ],
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "Authentication"],
    image: "/images/projects/gym360.png",
    repository: "https://github.com/nayer-fki/gym360-smart",
  },
];

export const experiences: Experience[] = [
  {
    company: "Omnixis AI",
    role: "Software and AI Engineering Intern",
    type: "Internship",
    location: "Remote",
    period: "August 2026 – Present",
    logo: "/images/companies/omnixis.png",
    highlights: [
      "Delivered production features across a FastAPI backend and Next.js frontend for an AI-powered voice-calling platform",
      "Built AI avatar generation, provider failover, queue orchestration, and live usage controls around FLUX and Hugging Face",
      "Implemented website knowledge ingestion, guarded public call flows, tenant-scoped analytics, and telephony workflows",
      "Improved staging and production delivery through self-hosted runners, Docker-based checks, and automated deployment safeguards",
    ],
    stack: ["FastAPI", "Next.js", "Python", "TypeScript", "Docker", "CI/CD", "Azure", "Cloudflare"],
  },
  {
    company: "DevWise",
    role: "DevOps and Software Engineering Intern — Final-Year Project",
    type: "Six-month internship",
    location: "Nabeul, Tunisia",
    period: "February 2026 – August 2026",
    logo: "/images/companies/devwise.png",
    highlights: [
      "Defined and applied a multi-product DevSecOps/GitOps reference model across heterogeneous software products",
      "Developed DevWiseOps, a microservices platform for delivery governance, runtime visibility, security, audit, RAG, and operational analytics",
      "Integrated GitLab, K3s, Argo CD, Vault, Keycloak, Prometheus, Loki, Tempo, OpenTelemetry, and Qdrant",
      "Validated targeted workflows with automated Java, Go, Python, Playwright, smoke, and load-testing suites",
    ],
    stack: ["DevSecOps", "GitOps", "GitLab CI/CD", "K3s", "Terraform", "Spring Boot", "Angular", "Observability"],
  },
  {
    company: "Tunisie Telecom",
    role: "Network, Cybersecurity and Monitoring Intern",
    type: "Internship",
    location: "Nabeul, Tunisia",
    period: "July 2025 – August 2025",
    logo: "/images/companies/tunisie-telecom.png",
    highlights: [
      "Built segmented VLAN and DMZ environments with an IPsec VPN tunnel",
      "Hardened Cisco ASA access-control policies and deployed DNS, mail, and web services",
      "Centralized server, Snort IDS, and iptables logs for dashboards and alerting",
      "Containerized supporting services and worked with CI/CD practices",
    ],
    stack: ["Cisco ASA", "VLAN", "DMZ", "IPsec", "Snort", "Docker", "SIEM"],
  },
  {
    company: "Tunisie Telecom",
    role: "Network and Telecommunications Intern",
    type: "Internship",
    location: "Nabeul, Tunisia",
    period: "June 2025 – July 2025",
    logo: "/images/companies/tunisie-telecom.png",
    highlights: [
      "Explored fiber, xDSL, and active transmission infrastructure",
      "Supported basic network monitoring and maintenance activities",
      "Contributed to incident analysis and service supervision",
    ],
    stack: ["Networking", "Fiber", "xDSL", "NMS"],
  },
  {
    company: "NOVA-SOFT SOLUTION",
    role: "Excel and VBA Automation Developer",
    type: "Freelance",
    location: "Remote, Germany",
    period: "January 2024 – March 2024",
    logo: "/images/companies/novasoft.png",
    highlights: [
      "Developed tailored Excel and VBA automation tools",
      "Integrated customer data and streamlined information processing",
      "Handled business information with a strong focus on confidentiality",
    ],
    stack: ["Excel", "VBA", "Automation", "Data Processing"],
  },
  {
    company: "Africa Jade Thalasso Hotel",
    role: "Operations Controller",
    type: "Seasonal role",
    location: "Korba, Tunisia",
    period: "June 2024 – September 2024",
    logo: "/images/companies/africa-jade.png",
    highlights: [
      "Monitored internal consumption and investigated discrepancies",
      "Validated inventory records and supplier documentation",
      "Prepared periodic reports for financial management",
    ],
    stack: ["Excel", "Reporting", "Process Control"],
  },
  {
    company: "SOTIPAPIER",
    role: "Industrial Automation Engineering Intern",
    type: "Graduation internship",
    location: "Belli, Tunisia",
    period: "February 2023 – June 2023",
    logo: "/images/companies/sotipapier.png",
    highlights: [
      "Redesigned the supervision system for an industrial overhead crane",
      "Integrated a Siemens S7-1500 PLC and touch-screen HMI",
      "Performed on-site testing and produced technical documentation",
    ],
    stack: ["Siemens S7-1500", "HMI", "PLC", "Industrial Monitoring"],
  },
  {
    company: "WeWire Tunisia",
    role: "Industrial Engineering Intern",
    type: "Internship",
    location: "Hammamet, Tunisia",
    period: "January 2022 – February 2022",
    logo: "/images/companies/wewire.png",
    highlights: [
      "Supported automotive wiring and assembly operations",
      "Learned production-quality standards and testing procedures",
      "Worked within a structured, high-throughput production environment",
    ],
    stack: ["Quality", "Production", "Automotive"],
  },
];

export const certifications: Certification[] = [
  {
    name: "Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    date: "September 2025",
    logo: "/images/certifcation/cisco.png",
    skills: ["Networking", "Routing", "Security", "Automation"],
  },
  {
    name: "IBM Cybersecurity Analyst",
    issuer: "IBM",
    date: "July 2025",
    logo: "/images/certifcation/IBM.jpg",
    credential: "https://coursera.org/verify/R7Q8BHTUOUOA",
    skills: ["SOC", "SIEM", "IDS/IPS", "Incident Response"],
  },
  {
    name: "Introduction to Big Data with Spark and Hadoop",
    issuer: "IBM",
    date: "June 2025",
    logo: "/images/certifcation/IBM.jpg",
    credential: "https://coursera.org/verify/JYO5WWKA92DL",
    skills: ["Spark", "Hadoop", "Big Data", "Data Engineering"],
  },
  {
    name: "Linux Essentials",
    issuer: "Cisco",
    date: "May 2025",
    logo: "/images/certifcation/cisco.png",
    skills: ["Linux", "Shell", "System Administration"],
  },
  {
    name: "Getting Started with Deep Learning",
    issuer: "NVIDIA",
    date: "January 2025",
    logo: "/images/certifcation/nvidia.png",
    skills: ["Deep Learning", "Neural Networks", "AI"],
  },
  {
    name: "AWS Academy Machine Learning Foundations",
    issuer: "Amazon Web Services",
    date: "December 2024",
    logo: "/images/certifcation/aws.png",
    skills: ["AWS", "Machine Learning", "Cloud"],
  },
  {
    name: "Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    date: "July 2024",
    logo: "/images/certifcation/cisco.png",
    skills: ["Routing", "Switching", "VLAN", "Wireless"],
  },
  {
    name: "Python 3 Programming Specialization",
    issuer: "University of Michigan",
    date: "March 2024",
    logo: "/images/certifcation/michigan.png",
    credential: "https://coursera.org/verify/62HALL8HCJL8",
    skills: ["Python", "Automation", "Scripting"],
  },
  {
    name: "Database Programming with SQL",
    issuer: "Oracle",
    date: "January 2024",
    logo: "/images/certifcation/oracle.png",
    skills: ["SQL", "Databases", "Query Design"],
  },
];

export const expertise = [
  {
    title: "DevOps Engineering",
    description: "Versioned delivery workflows, infrastructure automation, GitOps promotion, and reliable runtime operations.",
    skills: ["GitLab CI/CD", "Docker", "K3s", "Argo CD", "Terraform", "GitOps"],
  },
  {
    title: "Cloud and Infrastructure",
    description: "Cloud environments designed with environment isolation, observability, networking, and security in mind.",
    skills: ["OVHcloud", "GCP", "AWS", "Kubernetes", "Prometheus", "Grafana"],
  },
  {
    title: "Software Engineering",
    description: "Maintainable full-stack applications and APIs built around clear, pragmatic architectures.",
    skills: ["Next.js", "React", "Node.js", "FastAPI", "Java", "REST APIs"],
  },
  {
    title: "Security and Networking",
    description: "Secure network design, traffic segmentation, detection, and centralized operational visibility.",
    skills: ["VLAN", "DMZ", "IPsec", "Cisco ASA", "Snort", "SIEM"],
  },
] as const;
