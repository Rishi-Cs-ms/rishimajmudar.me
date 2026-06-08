import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cloud,
  Terminal,
  Code2,
  Mail,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  ChevronRight,
  MapPin,
  Award,
  Menu,
  X,
  Server,
  Zap
} from 'lucide-react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
        >
          Rishi Majmudar
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a
            href="/assets/Resume_rishi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-xs font-bold"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium text-slate-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/assets/Resume_rishi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-blue-600 text-center text-white rounded-xl font-bold"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-4"
    >
      {children}
    </motion.h2>
    <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-6" />
    {subtitle && <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
  </div>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <div className="absolute top-[10%] right-[10%] w-[30vw] h-[30vw] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-indigo-600/10 rounded-full blur-[150px]" />
    </div>

    <div className="max-w-7xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-6xl lg:text-8xl font-black mb-6 tracking-tight">
          Full Stack <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
            Developer.
          </span>
        </h1>
        <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl mb-10">
          Full Stack Developer with 3+ years experience building scalable backend services and web apps using Python (FastAPI, Django), JavaScript/TypeScript, and React. Experienced with Docker, Kubernetes, AWS, and designing data layers with PostgreSQL, MongoDB, Redis, and Kafka. Focused on reliable, observable systems and practical CI/CD practices.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <a href="#projects" className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold hover:scale-105 transition-all flex items-center gap-2 group">
            Check Projects
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Rishi-Cs-ms" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rishimajmudar/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-64 md:w-96 aspect-square"
      >
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-blue-500 to-indigo-600 rotate-6 -z-10" />
        <div className="absolute inset-0 rounded-[3rem] bg-slate-900 border border-white/20 p-2 overflow-hidden shadow-2xl">
          <img src="/assets/profile.jpeg" alt="Rishi" className="w-full h-full object-cover rounded-[2.5rem]" />
        </div>
      </motion.div>
    </div>
  </section>
);

const Education = () => {
  const education = [
    {
      degree: "Master of Engineering in Software Engineering",
      institution: "Carleton University, Ottawa, Canada",
      period: "Jan 2024 – Jun 2025",
      icon: <Award className="text-blue-400" />
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Gujarat Technological University, Gujarat, India",
      period: "Jul 2019 – Jun 2023",
      icon: <Code2 className="text-indigo-400" />
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="My academic foundation in software engineering and computer science.">
          Education
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs font-mono text-slate-400">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/badges/225b4e21-1626-4b0f-991b-7cd3a2a01d22/linked_in_profile",
      icon: <Cloud className="text-orange-400" />,
      color: "from-orange-500/20 to-transparent"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "KodeKloud",
      link: "https://learn.kodekloud.com/certificate/0ac21477-5391-42e1-b44f-f9a8705188cd",
      icon: <Server className="text-blue-400" />,
      color: "from-blue-500/20 to-transparent"
    },
    {
      title: "Terraform Associate",
      issuer: "HashiCorp",
      link: "https://learn.kodekloud.com/user/certificate/28a0abd1-bf25-497a-b69f-9b65ced43105",
      icon: <Terminal className="text-purple-400" />,
      color: "from-purple-500/20 to-transparent"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Industry-recognized validations of my technical expertise.">
          Professional Certifications
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${cert.color} border border-white/10 hover:border-white/20 transition-all group relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{cert.title}</h3>
                <p className="text-slate-500 text-sm font-medium mb-6">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest">
                  View Credential <ExternalLink size={14} />
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={80} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  // Combined and simplified categories for cleaner layout
  const categories = [
    {
      title: 'Languages & Frameworks',
      icon: <Code2 />,
      skills: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'Django', 'DRF', 'Flask', 'FastAPI', 'Node.js', 'SQL']
    },
    {
      title: 'Frontend',
      icon: <Cloud />,
      skills: ['HTML5', 'CSS3', 'React.js', 'Redux Toolkit', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Figma']
    },
    {
      title: 'Cloud & DevOps',
      icon: <Server />,
      skills: ['AWS (EC2, Lambda, S3, RDS, CloudWatch)', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Linux']
    },
    {
      title: 'Databases & Messaging',
      icon: <Zap />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Kafka', 'Redis Streams', 'ELK']
    },
    {
      title: 'Testing & CI/CD',
      icon: <Terminal />,
      skills: ['PyTest', 'unittest', 'Postman', 'Selenium', 'Swagger/OpenAPI', 'SonarQube', 'Jenkins Pipelines', 'Docker Compose']
    },
    {
      title: 'AI & Tools',
      icon: <Award />,
      skills: ['TensorFlow', 'Scikit-learn', 'LLM Integration (OpenAI, LangChain)', 'RAG', 'VS Code', 'PyCharm', 'Chrome DevTools']
    }
  ];


  return (
    <section id="skills" className="py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Certified expertise in cloud architecture and modern DevOps practices.">
          Technical Skills
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-blue-500/40 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <span key={s} className="px-2 py-1 rounded-md bg-white/3 text-xs font-medium text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const list = [
    {
      title: "AI Document Parser",
      subtitle: "Serverless, Bedrock, Textract",
      tech: "Serverless · Bedrock · Textract",
      desc: "Designed a serverless, event-driven architecture that processed 1,000+ documents with zero idle compute costs, reducing total infrastructure spend by 40%. Integrated Amazon Bedrock and Textract to automate OCR and data synthesis, improving document processing speed by 60% compared to manual workflows. Optimized DynamoDB performance using Global Secondary Indexes (GSI), achieving sub-10ms query latency for large-scale metadata retrieval.",
      icon: <Server className="text-emerald-400" />,
      github: "https://github.com/Rishi-Cs-ms/ai-doc-parser",
      live: "https://ai-doc-parser.rishimajmudar.me/"
    },
    {
      title: "AWS Three-Tier Architecture",
      subtitle: "Terraform, OIDC, Multi-AZ",
      tech: "Terraform · OIDC · Multi-AZ",
      desc: "Provisioned a production-ready VPC using Terraform Modules, reducing manual configuration time by 70% and ensuring 100% environment consistency across Dev/Prod. Hardened security posture by implementing GitHub Actions with OIDC, removing long-lived credentials and decreasing potential attack surfaces by 80%. Deployed CloudFront and ALB to serve global traffic, realizing a 30% reduction in latency and ensuring seamless failover during simulated regional outages.",
      icon: <Zap className="text-amber-400" />,
      github: "https://github.com/Rishi-Cs-ms/aws-three-tier-architecture",
    },
    {
      title: "Cloud Portfolio Infrastructure",
      subtitle: "Infrastructure as Code",
      tech: "S3 (Private) · CloudFront (OAC) · Route53 · ACM · AWS WAF · Terraform · GitHub OIDC · CloudWatch",
      desc: "Engineered secure static hosting blocking 95% of malicious requests using WAF managed rule sets. Enabled centralized monitoring via CloudWatch logs and metrics, improving incident detection time by 50%. Designed Terraform remote backend with DynamoDB locking.",
      icon: <ChevronRight className="text-blue-400" />,
      github: "https://github.com/Rishi-Cs-ms/rishimajmudar.me",
      live: "https://portfolio.rishimajmudar.me/"
    },
    {
      title: "Microservices on Amazon EKS",
      subtitle: "Kubernetes, Helm, HPA",
      tech: "Kubernetes · Helm · HPA",
      desc: "Orchestrated containerized microservices on Amazon EKS, maintaining 99.9% uptime through automated self-healing and Horizontal Pod Autoscaling (HPA). Implemented RBAC and IAM Roles for Service Accounts (IRSA), enforcing the Principle of Least Privilege and reducing internal security risks. Managed stateful workloads using MongoDB StatefulSets, ensuring data persistence and zero-loss scaling during high-traffic bursts.",
      icon: <MapPin className="text-rose-400" />,
      github: "https://github.com/Rishi-Cs-ms/microservice-architecture-aws-eks"
    }
  ];

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="AWS production-style architectures including serverless, EKS, and multi-tier infrastructure.">
          Featured Work
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {list.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-blue-600/20 transition-all duration-500"
            >
              <div className="p-8 h-full bg-slate-950 rounded-[calc(1.5rem-1px)] flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 transition-transform group-hover:rotate-12">
                      {proj.icon}
                    </div>
                    <div className="flex gap-4">
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer">
                          <Github size={20} className="text-slate-500 hover:text-white transition-colors" />
                        </a>
                      )}
                      {proj.live && (
                        <a href={proj.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={20} className="text-slate-500 hover:text-white transition-colors" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{proj.title}</h3>
                  <div className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">{proj.subtitle}</div>
                  <div className="text-xs font-mono text-blue-400 mb-4 tracking-widest leading-relaxed">{proj.tech}</div>
                  <p className="text-slate-400 leading-relaxed mb-8">{proj.desc}</p>
                </div>
                <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "DXC Technology, Canada",
      period: "Jan 2025 – Present",
      points: [
        "Reviewed the existing post-trade enrichment system to identify delays and rule-handling issues, and provided improvement recommendations guiding the team’s modernization approach.",
        "Converted core enrichment logic into Python microservices using FastAPI, enabling independent deployments and safer updates to trade flows.",
        "Set up a real-time event ingestion layer on Apache Kafka, allowing the platform to process ~15K+ trade events/sec and dramatically reducing lag from the previous batch workflow.",
        "Built Spark Structured Streaming jobs to validate, map, and enrich trade attributes, improving data consistency and lowering downstream reconciliation issues by ~18%.",
        "Introduced Open Policy Agent (OPA) to centralize entitlement and compliance rules, cutting conflicting rule configurations across trade flows by roughly half.",
        "Improved PostgreSQL and MongoDB performance via schema restructuring, indexing, and query optimization, resulting in ~20% faster queries during peak hours.",
        "Added Redis caching for high-frequency enrichment lookups, reducing DB load and bringing API response times down from ~280 ms to ~180 ms.",
        "Created a React + TypeScript dashboard for Operations to track trade lineage and review exceptions in real time, cutting investigation time by 35–40%.",
        "Containerized services with Docker and deployed on Kubernetes with autoscaling and health checks, improving stability and maintaining 99.9% uptime during market volatility.",
        "Strengthened CI/CD with Jenkins, GitHub Actions, PyTest, Jest, and contract testing, raising test coverage to ~90% and reducing integration issues before release by ~25%."
      ],
      current: true
    },
    {
      title: "Full Stack Developer",
      company: "Newgen Software, India",
      period: "May 2022 – Dec 2023",
      points: [
        "Rebuilt critical legacy workflows into Python microservices using FastAPI and Django REST, simplifying maintenance and improving system stability.",
        "Developed backend services for case assignment, audit review, document handling, and dashboards using FastAPI, SQLAlchemy, and Redis, improving processing speed by 20–25%.",
        "Implemented Kafka event streams to ensure taxpayer data consistency across modules, enabling near real-time updates and cutting manual reconciliation by ~30%.",
        "Optimized PostgreSQL through query tuning, indexing, and table restructuring, halving report generation times and improving responsiveness during high-volume seasons.",
        "Redesigned officer-facing interfaces with React.js and TypeScript, reducing average case lookup times by 15–20% as reported by end-users.",
        "Integrated OAuth2 and role-based access via Keycloak, securing sensitive modules and ensuring workflows were accessible only to authorized personnel.",
        "Built a configuration-driven rules engine in Python to let policy teams update assessment and validation rules without code releases, shortening change cycles from weeks to days.",
        "Identified and resolved API performance bottlenecks using PySpy and logs, improving latency for frequently used endpoints by 20–30%.",
        "Set up automated CI/CD pipelines with GitLab CI, Jenkins, Docker, and SonarQube, standardizing deployments and improving release predictability."
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading>Professional Experience</SectionHeading>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 border-l-2 border-white/10">
              <div className={`absolute top-0 -left-[9px] w-4 h-4 rounded-full ${exp.current ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'bg-slate-700'}`} />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                </div>
                <span className="px-4 py-2 rounded-full bg-white/5 text-sm font-mono text-slate-400 self-start md:self-center">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-4">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-4 text-slate-400 leading-relaxed">
                    <span className="text-blue-500 shrink-0 text-xl">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <SectionHeading subtitle="I'm always open to discussing cloud architecture, automation, or new opportunities.">
              Get in Touch
            </SectionHeading>

            <div className="space-y-8 mt-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-medium">rishimajmudar25@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-medium">Ottawa, ON, Canada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="p-8 md:p-12 rounded-[2.5rem] bg-slate-950 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea rows="4" placeholder="How can I help you?" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors resize-none" />
              </div>
              <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 text-slate-200">
      <Nav />
      <Hero />
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-12">
            {[
              { Icon: Github, href: 'https://github.com/Rishi-Cs-ms' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/rishimajmudar/' },
              { Icon: Mail, href: 'mailto:rishimajmudar96@gmail.com' }
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all border border-white/5"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Rishi Majmudar. @ 2026.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default App;
