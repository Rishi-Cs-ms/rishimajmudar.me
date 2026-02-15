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
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
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
          Cloud & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
            DevOps.
          </span>
        </h1>
        <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl mb-10">
          I build secure, scalable, cost-optimized, and production-ready cloud infrastructure on AWS with a strong focus on Infrastructure as Code, Kubernetes, and CI/CD automation.
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
      degree: "Master of Engineering (MEng) in Software Engineering",
      institution: "Carleton University, Ottawa, Canada",
      period: "2025",
      icon: <Award className="text-blue-400" />
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Gujarat Technological University (GTU), Gujarat, India",
      period: "2023",
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
      issuer: "Amazon Web Services (AWS)",
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
      title: "Terraform – Infrastructure as Code",
      issuer: "KodeKloud",
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
  const categories = [
    {
      title: 'Cloud (AWS)',
      icon: <Cloud />,
      skills: ['EC2', 'S3', 'Lambda', 'API Gateway', 'RDS', 'CloudFront', 'IAM', 'WAF', 'CloudWatch', 'VPC']
    },
    {
      title: 'DevOps & Infrastructure',
      icon: <Terminal />,
      skills: ['Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'CI/CD', 'Infrastructure as Code', 'Observability']
    },
    {
      title: 'Development',
      icon: <Code2 />,
      skills: ['Node.js', 'Express.js', 'REST API', 'React', 'JavaScript', 'HTML5', 'CSS3']
    },
  ];

  return (
    <section id="skills" className="py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Certified expertise in cloud architecture and modern DevOps practices.">
          Technical Skills
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <span key={s} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-semibold text-slate-400">
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
      subtitle: "Serverless Architecture",
      tech: "AWS Lambda · API Gateway · Bedrock · Cognito · DynamoDB · CloudFront · S3",
      desc: "A secure, production-ready serverless application for AI-powered document analysis. Implements IAM least privilege and Cognito authentication.",
      icon: <Server className="text-emerald-400" />,
      github: "https://github.com/Rishi-Cs-ms/ai-doc-parser",
      live: "https://ai-doc-parser.rishimajmudar.me/"
    },
    {
      title: "Three-Tier Architecture",
      subtitle: "Production-Grade Infrastructure",
      tech: "Terraform · EC2 ASG · ALB · RDS Multi-AZ · GitHub Actions",
      desc: "Infrastucture as Code for a highly available web application. Features include cost-aware design, secure VPC networking, and automated CI/CD.",
      icon: <Zap className="text-amber-400" />,
      github: "https://github.com/Rishi-Cs-ms/aws-three-tier-architecture",
    },
    {
      title: "Microservices Booking App",
      subtitle: "EKS + DevOps",
      tech: "Amazon EKS · Kubernetes Ingress · HPA · Docker · Terraform",
      desc: "Containerized microservices deployed on EKS. Optimized for scaling with HPA and managed using Terraform and GitHub Actions.",
      icon: <MapPin className="text-rose-400" />,
      github: "https://github.com/Rishi-Cs-ms/microservice-architecture-aws-eks"
    },
    {
      title: "Cloud Portfolio",
      subtitle: "Secure Static Hosting + IaC",
      tech: "S3 · CloudFront · AWS WAF · Terraform · GitHub Actions",
      desc: "My personal portfolio hosted securely on AWS. Automated deployment pipeline and WAF protection for enhanced security.",
      icon: <ChevronRight className="text-blue-400" />,
      github: "https://github.com/Rishi-Cs-ms/rishimajmudar.me",
      live: "https://portfolio.rishimajmudar.me/"
    }
  ];

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Hands-on experience with production-grade architectures.">
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

const Experience = () => (
  <section id="experience" className="py-32 bg-slate-900/30">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading>Professional Journey</SectionHeading>
      <div className="space-y-12">
        <div className="relative pl-12 border-l-2 border-white/10">
          <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold">Lecturer</h3>
              <p className="text-blue-400 font-medium">KPGU, Vadodara, India</p>
            </div>
            <span className="px-4 py-2 rounded-full bg-white/5 text-sm font-mono text-slate-400">5 Months</span>
          </div>
          <p className="text-slate-400 max-w-3xl leading-relaxed">
            Delivered lectures on Computer Science fundamentals, AWS cloud concepts, and networking principles.
            Conducted hands-on sessions on EC2, S3, IAM, and VPC fundamentals. Mentored students on project development and deployment practices.
          </p>
        </div>

        <div className="relative pl-12 border-l-2 border-white/10">
          <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-slate-700" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold">Web Developer Intern</h3>
              <p className="text-blue-400 font-medium">Royalsoft Solutions, Vadodara, India</p>
            </div>
            <span className="px-4 py-2 rounded-full bg-white/5 text-sm font-mono text-slate-400">4 Months</span>
          </div>
          <p className="text-slate-400 max-w-3xl leading-relaxed">
            Developed responsive web interfaces using HTML, CSS, and JavaScript. Built backend APIs using Node.js and Express.
            Assisted in REST API development and debugging. Participated in testing and deployment activities.
          </p>
        </div>
      </div>
    </div>
  </section>
);

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
                  <p className="text-xl font-medium">rishimajmudar@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-medium">Ottawa, Canada</p>
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
      <Education />
      <Certifications />
      <Projects />
      <Experience />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-12">
            {[
              { Icon: Github, href: 'https://github.com/Rishi-Cs-ms' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/rishimajmudar/' },
              { Icon: Mail, href: 'mailto:rishimajmudar@gmail.com' }
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
