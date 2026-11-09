import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2,
  BrainCircuit, Sparkles, Cpu, ExternalLink, Download, ChevronRight,
  Layers3, Terminal, Award, GraduationCap, BriefcaseBusiness
} from "lucide-react";
import profilePhoto from "./profile.jpg";

const nav = ["Home", "About", "Skills", "Experience", "Projects", "Research", "Achievements", "Contact"];
const roles = ["AI & ML Enthusiast", "Web Developer", "Computer Science Student", "Creative Problem Solver"];

const skills = [
  ["Python", "language"], ["JavaScript", "language"],
  ["React.js", "frontend"], ["HTML & CSS", "frontend"], ["Node.js", "backend"],
  ["FastAPI", "backend"], ["MySQL", "database"],
  ["Git & GitHub", "tools"], ["Figma", "design"], ["Canva", "design"]
];

const projects = [
  {
    number: "01", title: "SignFlow AI", type: "ACCESSIBILITY · AI",
    description: "A real-time multimodal sign language and audio bridge designed to make online communication more inclusive.",
    tags: ["Python", "React", "FastAPI", "Computer Vision", "Transformers"],
    icon: BrainCircuit, accent: "violet", link: ""
  },
 
  {
    number: "02", title: "Gram-Pragati AI", type: "RURAL INNOVATION · AI",
    description: "A voice-first business advisory concept helping rural entrepreneurs explore opportunities and plan with confidence.",
    tags: ["AI", "Voice UX", "React", "Python"], icon: Sparkles, accent: "pink", link: ""
  },
  {
    number: "03", title: "CPU Scheduling Simulator", type: "SYSTEMS · VISUALIZATION",
    description: "An interactive simulator that visualizes CPU scheduling algorithms and helps learners compare execution behavior.",
    tags: ["JavaScript", "React", "FCFS", "SJF", "Round Robin"],
    icon: Layers3, accent: "cyan", link: "https://cpu-scheduling-simulator-green.vercel.app/"
  }
  
];

const achievements = [
  ["WorldSUAS 2026", "Research paper co-author", "Research"],
  ["Challenge X", "1st Place", "Competition"],
  ["SUAS Poster Presentation", "1st Position — SignFlow AI", "Recognition"]
  
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} variants={fadeUp} initial="hidden"
    whileInView="visible" viewport={{ once: true, amount: 0.14 }}
    transition={{ delay: reduce ? 0 : delay }}>{children}</motion.div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  useEffect(() => {
    const update = () => {
      let current = "Home";
      nav.forEach(item => {
        const el = document.getElementById(item.toLowerCase());
        if (el && el.getBoundingClientRect().top <= 130) current = item;
      });
      setActive(current);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const go = item => {
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return <header className="header">
    <a className="brand" href="#home" onClick={() => go("Home")}><span className="brand-mark">S<span>.</span></span><span>SANDHYA<span className="brand-muted">/PORTFOLIO</span></span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    <nav className={open ? "nav open" : "nav"}>
      {nav.map(item => <button key={item} className={active === item ? "nav-link active" : "nav-link"} onClick={() => go(item)}>{item}</button>)}
    </nav>
    <a className="header-cta" href="#contact">LET'S TALK <ArrowUpRight size={14}/></a>
  </header>;
}

function RoleTicker() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(v => (v + 1) % roles.length), 2500);
    return () => clearInterval(id);
  }, []);
  return <div className="role-line"><span className="status-dot" /><span className="role-label">CURRENTLY EXPLORING</span>
    <motion.span key={roles[index]} className="role-value" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>{roles[index]}</motion.span>
  </div>;
}

function Hero() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-grid" />
    <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
    <div className="hero-content">
      <motion.div className="eyebrow" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>
        <span className="eyebrow-line" /> HELLO, WORLD. I'M
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 35, filter: "blur(12px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, delay: .3 }}>
        SANDHYA<br/><span className="name-glow">PAL<span className="name-period">.</span></span>
      </motion.h1>
      <RoleTicker />
      <motion.p className="hero-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>
        Building intelligent digital experiences through code, creativity, and innovation.
      </motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
        <a className="button button-primary" href="#projects">EXPLORE MY WORK <ArrowUpRight size={16}/></a>
        <a className="button button-ghost" href="/resume.pdf" download><Download size={15}/> DOWNLOAD RESUME</a>
      </motion.div>
      <motion.div className="social-links hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}>
        <a href="https://www.linkedin.com/in/sandhya-pal1087" target="_blank" rel="noreferrer" aria-label="Visit Sandhya Pal on LinkedIn"><Linkedin size={16}/> LINKEDIN <ArrowUpRight size={12}/></a>
        <a href="https://github.com/sandhyapal1812" target="_blank" rel="noreferrer" aria-label="Visit Sandhya Pal on GitHub"><Github size={16}/> GITHUB <ArrowUpRight size={12}/></a>
      </motion.div>
    </div>
    <div className="hero-side-note"><i /> INDEPENDENT THINKER · CONTINUOUS LEARNER</div>
    <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
    <div className="hero-coordinate"><br/>INDORE, INDIA</div>
    <div className="hero-visual" aria-hidden="true">
      <div className="visual-ring ring-a"/><div className="visual-ring ring-b"/><div className="visual-ring ring-c"/>
      
      <div className="visual-core profile-core">
  <span className="profile-fallback">SP</span>

  <img
    className="profile-photo"
    src={profilePhoto}
    alt="Sandhya Pal"
    onLoad={() => console.log("Image loaded successfully")}
    onError={(e) => {
      console.error("Image loading failed:", profilePhoto);
      e.currentTarget.style.display = "none";
    }}
  />

  <small>BUILD / CREATE</small>
</div>
      <div className="orbit-chip chip-a"><BrainCircuit size={17}/><span>AI / ML</span></div>
      <div className="orbit-chip chip-b"><Code2 size={17}/><span>DEVELOPMENT</span></div>
      <div className="orbit-chip chip-c"><Sparkles size={17}/><span>IDEAS</span></div>
    </div>
  </section>;
}

function SectionHeading({ kicker, title, index }) {
  return <div className="section-heading">
    <div><div className="section-kicker"><span>{index}</span> {kicker}</div><h2>{title}</h2></div>
    <div className="heading-line"/>
  </div>;
}

function About() {
  return <section className="section section-wrap" id="about">
    <SectionHeading index="01" kicker="A LITTLE ABOUT ME" title={<>Curiosity into <em>creation.</em></>}/>
    <div className="about-layout">
      <Reveal className="about-intro"><div className="about-symbol"><Code2 size={26}/></div>
        <p className="about-lead">I’m a computer science student who loves exploring the space where <span>technology meets meaningful impact.</span></p>
        <p className="muted">I enjoy turning ideas into useful digital experiences — from building web applications to exploring AI-driven solutions. I’m continuously learning, experimenting, and looking for opportunities to solve real-world problems with technology.</p>
      </Reveal>
      <Reveal className="about-details" delay={.12}>
        <div className="detail-row"><GraduationCap/><div><small>EDUCATION</small><strong>B.Tech — Computer Science & IT</strong><span>Symbiosis University of Applied Sciences, Indore</span></div></div>
        <div className="detail-row"><BriefcaseBusiness/><div><small>CURRENT CHAPTER</small><strong>2nd Year Undergraduate</strong><span>Building foundations, projects, and research experience</span></div></div>
        <div className="detail-row"><Sparkles/><div><small>ACADEMIC PERFORMANCE</small><strong>8.857 CGPA — First Year</strong><span>B.Tech Computer Science & IT</span></div></div>
        <div className="detail-row"><Sparkles/><div><small>AREAS OF INTEREST</small><strong>AI / ML · Web Developer· UI/UX</strong><span>Problem-solving, accessible technology, and creative development</span></div></div>
      </Reveal>
    </div>
    <div className="stats-row">
      {[["8.857", "FIRST-YEAR CGPA"], ["01", "INTERNSHIP EXPERIENCE"], ["02", "RESEARCH PAPERS IN PROGRESS"]].map(([n,l])=><div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>)}
    </div>
  </section>;
}

function Skills() {
  const groups = ["language", "frontend", "backend", "database", "tools", "design"];
  const labels = { language: "LANGUAGES", frontend: "FRONTEND", backend: "BACKEND", database: "DATABASE", tools: "TOOLS", design: "DESIGN" };
  return <section className="section section-wrap" id="skills">
    <SectionHeading index="02" kicker="MY TOOLKIT" title={<>Skills & <em>technologies.</em></>}/>
    <p className="section-desc">A growing toolkit for turning thoughtful ideas into reliable, useful products.</p>
    <div className="skill-groups">{groups.map((group, i)=><Reveal className="skill-group" delay={i*.05} key={group}>
      <div className="skill-group-label"><span>0{i+1}</span>{labels[group]}</div>
      <div className="skill-list">{skills.filter(s=>s[1]===group).map(([name])=><motion.div className="skill-pill" key={name} whileHover={{ y: -4, scale: 1.025 }}><span className="skill-dot"/>{name}<ArrowUpRight size={12}/></motion.div>)}</div>
    </Reveal>)}</div>
  </section>;
}

function Experience() {
  return <section className="section section-wrap" id="experience">
    <SectionHeading index="03" kicker="WHERE I'VE WORKED" title={<>Experience & <em>growth.</em></>}/>
    <Reveal className="experience-card">
      <div className="timeline-rail"><span/></div>
      <div className="experience-top"><div><div className="micro-label">JUNE 2026 — JULY 2026</div><h3>Backend Developer Intern</h3><p className="company">AURXON <span>·</span> Internship</p></div><div className="experience-icon"><BriefcaseBusiness/></div></div>
      <p className="muted exp-copy">Contributed to backend development and API-related tasks while gaining practical experience with collaborative software development workflows.</p>
      <div className="tag-row"><span>Backend Development</span><span>API Work</span><span>Python</span></div>
    </Reveal>
  </section>;
}

function Projects() {
  return <section className="section section-wrap" id="projects">
    <SectionHeading index="04" kicker="SELECTED WORK" title={<>Ideas made <em>real.</em></>}/>
    <div className="project-grid">{projects.map((p,i)=><Reveal key={p.title} delay={(i%2)*.08} className={`project-card ${p.accent}`}>
      <div className="project-card-top"><span>{p.number} / 05</span><span className="project-type">{p.type}</span></div>
      <div className="project-art"><div className="art-grid"/><div className="art-glow"/><p.icon size={46} strokeWidth={1.15}/><span className="art-caption">SANDHYA.PAL / LAB</span></div>
      <div className="project-info"><h3>{p.title}</h3><p>{p.description}</p>
        <div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
        <div className="project-links">{p.link ? <a href={p.link} target="_blank" rel="noreferrer">LIVE DEMO <ExternalLink size={13}/></a> : <span className="private-label">PROJECT DETAILS <span>·</span> ADD LINK</span>}<span className="project-arrow"><ArrowUpRight size={18}/></span></div>
      </div>
    </Reveal>)}</div>
  </section>;
}


function Research() {
  const papers = [
    {number: "01", title: "ADAPTIVE REMAINING-TIME-AWARE PROCESS SCHEDULING FOR HETEROGENEOUS AND ENERGY-CONSTRAINED MULTI-CORE SYSTEMS ", area: "Operating Systems and Computer Architecture", description: "Proposed an adaptive CPU scheduling framework that optimizes process execution by considering remaining time, workload phases, core performance, and energy consumption.",status: "ACCEPTED — IEEE Xplore Publication Pending",tags: ["Process Scheduling", "Heterogeneous Multi-Core Systems", "Energy Optimization", "Operating Systems", "WorldSUAS 2026"] },
    { number: "02", title: "SignFlow AI – ISL Recognition & Speech Output", area: "SIGN LANGUAGE · ACCESSIBILITY · AI", description: "Research focused on Indian Sign Language recognition and converting recognised gestures into speech output to support more accessible communication.", status: "IN PROGRESS", tags: ["Indian Sign Language", "Computer Vision", "Deep Learning", "Speech Output"] },
    { number: "03", title: "Microarchitectural Overhead and Hardware Acceleration Vectors for Finalized NIST Post-Quantum Cryptography Standards in Constrained IoT Infrastructure: A Systematic Review", area: "POST-QUANTUM CRYPTOGRAPHY · IOT · SYSTEMS", description: "A systematic review examining the microarchitectural costs and hardware acceleration approaches for finalized NIST post-quantum cryptography standards in resource-constrained IoT environments.", status: "IN PROGRESS", tags: ["Post-Quantum Cryptography", "NIST Standards", "Hardware Acceleration", "IoT"] }
  ];
  return <section className="section section-wrap" id="research">
    <SectionHeading index="05" kicker="RESEARCH & WRITING" title={<>Exploring beyond <em>the code.</em></>}/>
    <p className="section-desc">Current research work exploring accessibility, intelligent systems, and emerging computing challenges.</p>
    <div className="research-grid">{papers.map((paper, i) => <Reveal className="research-card" key={paper.number} delay={i * .08}>
      <div className="research-top"><span>{paper.number} / 03</span><span className="research-status">{paper.status}</span></div>
      <small className="research-area">{paper.area}</small><h3>{paper.title}</h3><p>{paper.description}</p>
      <div className="tag-row">{paper.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </Reveal>)}</div>
  </section>;
}

function Achievements() {
  return <section className="section section-wrap" id="achievements">
    <SectionHeading index="06" kicker="MILESTONES" title={<>A few proud <em>moments.</em></>}/>
    <div className="achievement-grid">{achievements.map(([name,desc,type],i)=><Reveal key={name} delay={i*.06} className="achievement-card">
      <div className="achievement-top"><span>0{i+1}</span><Award size={18}/></div><small>{type}</small><h3>{name}</h3><p>{desc}</p>
    </Reveal>)}</div>
  </section>;
}


function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // NEW BACKEND SUBMIT FUNCTION
  const submit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    setLoading(true);
    setSent(false);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:8000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: data.get("name").trim(),
            email: data.get("email").trim(),
            subject: data.get("subject").trim(),
            message: data.get("message").trim()
          })
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.detail || "Submission failed");
      }

      setSent(true);
      form.reset();

    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return <section className="section section-wrap contact-section" id="contact">
    <SectionHeading index="07" kicker="LET'S CONNECT" title={<>Have an idea? <em>Let’s talk.</em></>}/>
    <div className="contact-layout">
      <Reveal className="contact-copy">
        <p className="contact-big">Good things<br/>start with a <span>hello.</span></p>
        <p className="muted">Whether it’s an opportunity, collaboration, or a thoughtful conversation about technology — my inbox is open.</p>

        <a className="contact-email" href="mailto:sandhyapal6742@gmail.com">
          <Mail size={17}/> sandhyapal6742@gmail.com <ArrowUpRight size={15}/>
        </a>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/sandhya-pal1087" target="_blank" rel="noreferrer">
            <Linkedin size={16}/> LINKEDIN <ArrowUpRight size={12}/>
          </a>
          <a href="https://github.com/sandhyapal1812" target="_blank" rel="noreferrer">
            <Github size={16}/> GITHUB <ArrowUpRight size={12}/>
          </a>
        </div>
      </Reveal>

      <Reveal className="contact-form-wrap" delay={.12}>
        <form onSubmit={submit} className="contact-form">

          <label>Your name
            <input name="name" placeholder="What should I call you?" required/>
          </label>

          <label>Email address
            <input name="email" type="email" placeholder="you@example.com" required/>
          </label>

          <label>Subject
            <input name="subject" placeholder="A quick introduction..."/>
          </label>

          <label>Message
            <textarea name="message" rows="4" placeholder="Tell me a little about it..." required/>
          </label>

          <button className="button button-primary" type="submit" disabled={loading}>
            {loading ? "SENDING..." : "SEND MESSAGE"}
            <ArrowUpRight size={16}/>
          </button>

          {sent && <small className="form-note">
            Thank you! Your message has been received successfully.
          </small>}

          {error && <small className="form-error">
            {error}
          </small>}

        </form>
      </Reveal>
    </div>
  </section>;
}


function Footer() {
  return <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">S<span>.</span></span><span>SANDHYA<span className="brand-muted">/PORTFOLIO</span></span></a><span>DESIGNED & BUILT WITH CURIOSITY · © {new Date().getFullYear()}</span><a href="#home">BACK TO TOP ↑</a></footer>;
}

function CursorGlow() {
  useEffect(() => {
    const move = e => { document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`); document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`); };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div className="cursor-glow" aria-hidden="true"/>;
}

export default function App() {
  return <><CursorGlow/><div className="noise" aria-hidden="true"/><Header/><main><Hero/><About/><Skills/><Experience/><Projects/><Research/><Achievements/><Contact/></main><Footer/></>;
}
