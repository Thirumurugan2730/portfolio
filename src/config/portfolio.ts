export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  technologies: string[];
  keyContributions: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  overview: string;
  skills: string[];
  verified: boolean;
}

export interface PortfolioConfig {
  name: string;
  designation: string;
  college: string;
  bioSummary: string;
  detailedBio: string[];
  statusBadge: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  cv: {
    fileName: string;
    downloadUrl: string;
    isPlaceholder: boolean;
    notice: string;
  };
  projects: ProjectItem[];
  experience: ExperienceItem[];
  certificates: CertificateItem[];
}

export const PORTFOLIO_CONFIG: PortfolioConfig = {
  name: "Thirumurugan S",
  designation: "Final Year B.E. Computer Science and Engineering Student",
  college: "Sri Krishna College of Technology, Coimbatore",
  bioSummary: "Final Year B.E. Computer Science and Engineering student at Sri Krishna College of Technology. Interested in software development, practical application engineering, and building resilient, reliable digital systems.",
  detailedBio: [
    "Final Year B.E. Computer Science and Engineering student at Sri Krishna College of Technology with a strong foundation in core computer science disciplines.",
    "Passionate about software development and application engineering, with an enthusiasm for tackling complex problem-solving challenges through structured, scalable code.",
    "Driven by the principles of building clean, reliable, and maintainable software systems that bridge theoretical algorithms with real-world utility."
  ],
  statusBadge: "Available for Software Engineering Roles",
  location: "Tamil Nadu, India",
  email: "thiruveni776@gmail.com",
  githubUrl: "https://github.com/Thirumurugan2730",
  linkedinUrl: "https://www.linkedin.com/in/thirumurugan2730",
  cv: {
    fileName: "Thirumurugan_S_CV_Placeholder.pdf",
    downloadUrl: "/Thirumurugan_S_CV_Placeholder.pdf",
    isPlaceholder: true,
    notice: "A placeholder CV has been downloaded. The architecture is configured to seamlessly link your official CV PDF as soon as it is updated in public/."
  },
  projects: [
    {
      id: "adaptq-vpn",
      title: "ADAPTQ-VPN",
      subtitle: "Condition-Aware Post-Quantum Cryptographic VPN Framework",
      overview: "An optimized and condition-aware post-quantum cryptographic framework designed to safeguard critical infrastructure communication against emerging quantum computational threats. Integrates lattice-based key encapsulation mechanisms with adaptive security level selection.",
      technologies: ["Post-Quantum Cryptography", "NIST ML-KEM / Kyber", "Python", "Linux Networking", "SCADA Security", "Benchmarking"],
      keyContributions: [
        "Architected an adaptive policy decision engine dynamically selecting between Kyber-512, Kyber-768, and Kyber-1024 based on real-time network latency and telemetry sensitivity.",
        "Engineered packet header classification daemon inspecting critical command streams to enforce peak Category-5 quantum resilience.",
        "Benchmarked cryptographic overhead, handshake latency, and tunnel throughput across variable physical and emulated WAN latency testbeds."
      ],
      featured: true
    },
    {
      id: "developer-portfolio",
      title: "Personal Developer Portfolio Web Platform",
      subtitle: "Modern Interactive Portfolio & System Architecture",
      overview: "A high-performance developer portfolio built from the ground up using React 19, TypeScript, and Tailwind CSS v4. Features an interactive terminal C++ code compilation engine, multi-page client-side routing, and an ultra-clean dark monochrome-violet design system.",
      technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite", "React Router", "Lucide React"],
      keyContributions: [
        "Implemented custom left-to-right incremental lexical tokenizer for natural C++ character-by-character typing animation with zero pre-rendered artifacts.",
        "Designed and standardized an accessible, responsive design system supporting desktop, laptop, tablet, and mobile displays with prefers-reduced-motion compliance.",
        "Constructed modular multi-page application structure supporting direct URL access, client-side routing, and automated build verification."
      ],
      githubUrl: "https://github.com/Thirumurugan2730/portfolio",
      featured: true
    }
  ],
  experience: [
    {
      id: "skct-academics",
      role: "B.E. Computer Science and Engineering",
      organization: "Sri Krishna College of Technology",
      location: "Coimbatore, Tamil Nadu",
      period: "2021 – Present (Final Year)",
      type: "Academic Foundation",
      description: [
        "Undergraduate curriculum emphasizing core computer science theory, algorithms, data structures, operating systems, DBMS, and distributed computing.",
        "Hands-on laboratory coursework in systems programming, object-oriented software engineering, network protocols, and secure application development.",
        "Collaborated on academic team projects and technical research explorations in cybersecurity and modern web engineering."
      ],
      skills: ["Data Structures & Algorithms", "C++", "Python", "Computer Networks", "Database Management", "Operating Systems"],
      isCurrent: true
    },
    {
      id: "research-developer",
      role: "Cryptographic Systems & Software Prototyping",
      organization: "Academic Research & Engineering",
      location: "Coimbatore, India",
      period: "2024 – Present",
      type: "Technical Research & Development",
      description: [
        "Researched post-quantum lattice cryptography implementations (NIST FIPS 203 / ML-KEM) and their integration with modern communication tunnels.",
        "Developed experimental test harness and telemetry simulation scripts in Python on Linux environments.",
        "Authored structured technical documentation, architecture flowcharts, and empirical benchmark evaluations."
      ],
      skills: ["Network Security", "Post-Quantum Cryptography", "Python", "Linux Systems", "Performance Analysis"],
      isCurrent: true
    },
    {
      id: "career-opportunities",
      role: "Software Engineering & Developer Roles",
      organization: "Open for Opportunities",
      location: "Ready for Relocation / Remote",
      period: "Upcoming 2025 / 2026",
      type: "Career Transition",
      description: [
        "Actively preparing for software engineer and application developer roles in forward-thinking product engineering teams.",
        "Committed to rigorous engineering practices, continuous learning, and contributing practical, high-impact software solutions."
      ],
      skills: ["Problem Solving", "Software Architecture", "Modern Web Engineering", "Continuous Learning"],
      isCurrent: false
    }
  ],
  certificates: [
    {
      id: "be-cse-degree",
      title: "Bachelor of Engineering in Computer Science and Engineering",
      issuer: "Sri Krishna College of Technology (Autonomous) / Anna University",
      date: "Expected 2025 / 2026",
      credentialId: "Degree Program in Progress",
      overview: "Rigorous 4-year undergraduate degree program encompassing theoretical computer science, software engineering practices, and engineering mathematics.",
      skills: ["Computer Science Fundamentals", "Algorithms", "Software Engineering", "Systems Architecture"],
      verified: true
    },
    {
      id: "pqc-networking",
      title: "Post-Quantum Cryptography & Network Security Research",
      issuer: "Sri Krishna College of Technology",
      date: "2024",
      credentialId: "Institutional Research Project",
      overview: "Comprehensive project-based research and implementation milestone on post-quantum secure communication protocols for critical infrastructure.",
      skills: ["Cryptographic Protocols", "WireGuard/VPN", "Security Engineering", "Performance Benchmarking"],
      verified: true
    },
    {
      id: "software-engineering-curriculum",
      title: "Core Technical Curriculum & Practical Laboratory Certifications",
      issuer: "Department of Computer Science and Engineering, SKCT",
      date: "2021 – 2024",
      credentialId: "Academic Coursework",
      overview: "Demonstrated competence across accredited semester examinations and practical laboratory evaluations in C++, Python, Data Structures, and Database Systems.",
      skills: ["C++ Programming", "Database Systems", "Operating Systems", "Object-Oriented Design"],
      verified: true
    }
  ]
};
