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
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
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
            href="/api/resume"
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
                href="/api/resume"
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
          <Award size={14} />
          AWS Certified Solutions Architect
        </div>
        <h1 className="text-6xl lg:text-8xl font-black mb-6 tracking-tight">
          Cloud <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
            Architect.
          </span>
        </h1>
        <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl mb-10">
          Passionate AWS Cloud Engineer focused on building scalable,
          automated, and highly available infrastructure. Currently crafting cloud solutions in Ottawa, Canada.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <a href="#projects" className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold hover:scale-105 transition-all flex items-center gap-2 group">
            Check Projects
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-4">
            <a href="https://github.com" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
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

const Skills = () => {
  const categories = [
    { title: 'AWS Cloud', icon: <Cloud />, skills: ['EC2', 'S3', 'IAM', 'VPC', 'CloudFront', 'Lambda', 'RDS', 'SQS/SNS', 'Auto Scaling', 'WAF'] },
    { title: 'DevOps & IaC', icon: <Terminal />, skills: ['Linux Bash', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Terraform'] },
    { title: 'Engineering', icon: <Code2 />, skills: ['React', 'JavaScript', 'Node.js', 'Python', 'PHP', 'MySQL/MongoDB'] },
  ];

  return (
    <section id="skills" className="py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Continuously evolving with the cloud-native ecosystem.">
          Core Expertise
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
      title: "Secure Cloud Architecture",
      tech: "S3 · CloudFront · Route 53 · WAF",
      desc: "Architected a secure static hosting environment with global CDN acceleration and web application firewall protection.",
      icon: <Server className="text-emerald-400" />
    },
    {
      title: "Automated CI/CD Pipelines",
      tech: "GitHub Actions · Docker · EC2",
      desc: "Designed and implemented automated workflows for testing, containerization, and deployment to AWS environments.",
      icon: <Zap className="text-amber-400" />
    },
    {
      title: "Distributed Monitoring",
      tech: "Load Balancing · Replication",
      desc: "Built a fault-tolerant monitoring system across distributed nodes ensuring high availability and zero downtime.",
      icon: <MapPin className="text-rose-400" />
    },
    {
      title: "E-Commerce System",
      tech: "PHP · MySQL · Session Logic",
      desc: "Developed a full-stack cart system with dynamic inventory management and automated tax calculation.",
      icon: <ChevronRight className="text-blue-400" />
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
                      <Github size={20} className="text-slate-500 hover:text-white cursor-pointer" />
                      <ExternalLink size={20} className="text-slate-500 hover:text-white cursor-pointer" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{proj.title}</h3>
                  <div className="text-xs font-mono text-blue-400 mb-4 tracking-widest">{proj.tech}</div>
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
              <h3 className="text-2xl font-bold">AWS Cloud Intern</h3>
              <p className="text-blue-400 font-medium">RoyalSoft Solutions, India</p>
            </div>
            <span className="px-4 py-2 rounded-full bg-white/5 text-sm font-mono text-slate-400">6 Months</span>
          </div>
          <p className="text-slate-400 max-w-3xl leading-relaxed">
            Hands-on management of EC2, S3, IAM, and VPC resources. Specialized in automating infrastructure tasks
            using AWS Lambda and CloudWatch, ensuring secure and cost-optimized environments.
          </p>
        </div>

        <div className="relative pl-12 border-l-2 border-white/10">
          <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-slate-700" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold">University Lecturer</h3>
              <p className="text-blue-400 font-medium">KPGU University, India</p>
            </div>
            <span className="px-4 py-2 rounded-full bg-white/5 text-sm font-mono text-slate-400">6 Months</span>
          </div>
          <p className="text-slate-400 max-w-3xl leading-relaxed">
            Mentored students in Computer Science & Engineering subjects. Led laboratory sessions and academic
            curriculum development, while honing leadership and articulation skills.
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
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-12">
            {[
              { Icon: Github, href: '#' },
              { Icon: Linkedin, href: '#' },
              { Icon: Mail, href: 'mailto:rishimajmudar@gmail.com' }
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
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
