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
  repository?: string;
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
    description: "Repeatable delivery workflows, containerized services, automation, and operational reliability.",
    skills: ["Docker", "CI/CD", "Linux", "Nginx", "Git", "Bash"],
  },
  {
    title: "Cloud and Infrastructure",
    description: "Cloud environments designed with observability, networking, security, and scalability in mind.",
    skills: ["AWS", "GCP", "Kubernetes", "VPC", "Monitoring", "Alerting"],
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
