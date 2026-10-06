import erpImg from '../assets/edupulse.webp';
import healthImg from '../assets/aurahealth.webp';

// All portfolio content lives here — edit this file to update the site and the resume section.

export const profile = {
  name: 'Dolisha Gandhi',
  role: 'Full Stack & AI Developer',
  tagline: 'Learn. Build. Grow — every day as a developer.',
  intro:
    'I build production-grade web platforms end to end — from React and Next.js interfaces to NestJS, Node.js and FastAPI backends, LLM-powered agents, and Dockerized deployments on AWS.',
  location: 'Delhi, India',
  email: 'dolishagandhi@gmail.com',
  phone: '+91 7014093257',
  availability: 'Open to full-time roles & internships',
  resumePdf: '/Dolisha_Gandhi_Resume.pdf',
  // Image of the PDF's first page, shown in the Resume section — regenerate when the PDF changes.
  resumePreview: '/resume-page-1.webp',
};

export const socials = {
  github: 'https://github.com/dolishaa29',
  linkedin: 'https://linkedin.com/in/dolishagandhi',
  twitter: 'https://twitter.com/dolishagandhi',
  facebook: 'https://www.facebook.com/share/1ECSxwDi4a/',
};

export const stats = [
  { value: '9.3', label: 'CGPA / 10' },
  { value: '350+', label: 'LeetCode problems' },
  { value: '2', label: 'Internships' },
  { value: '1st', label: 'College hackathon' },
];

export const about = {
  summary:
    "I'm a Full Stack & AI Developer, B.Tech Computer Science student and Software Developer Intern at Sipify, where I work on a live marketing campaign & ads platform. I love building systems that are secure, scalable and genuinely useful — from telemedicine platforms with WebRTC video to multi-agent AI research pipelines.",
  highlights: [
    {
      title: 'Full Stack',
      text: 'React, Next.js, Node.js, NestJS, Express, FastAPI and Flask — clean architecture and REST APIs.',
    },
    {
      title: 'AI & LLMs',
      text: 'LangChain agents, RAG, tool calling, SSE-streamed chatbots with Gemini, OpenAI and Mistral.',
    },
    {
      title: 'Real-time',
      text: 'WebRTC video, Socket.IO chat with Redis adapters, WebSocket signaling.',
    },
    {
      title: 'Cloud & DevOps',
      text: 'Docker on AWS EC2 behind Nginx — load balancing, rate limiting, health checks, HTTPS.',
    },
  ],
  interests: ['Open Source', 'System Design', 'Generative AI', 'Cloud', 'DSA'],
};

export const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++'] },
  { title: 'Frontend & UI', items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'Flask', 'REST APIs', 'Socket.IO'] },
  { title: 'AI & LLMs', items: ['LangChain', 'RAG', 'Agents', 'Gemini API', 'OpenAI API', 'Mistral AI', 'Hugging Face'] },
  { title: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
  { title: 'Cloud & Tools', items: ['AWS (EC2, S3)', 'Docker', 'Nginx', 'Git & GitHub', 'Postman', 'Vercel', 'Cloudinary'] },
];

export const coreCS = ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'];

export const services = [
  {
    title: 'Web Applications',
    text: 'Responsive, production-ready apps with React and Next.js, built around real user workflows.',
  },
  {
    title: 'APIs & Backends',
    text: 'Secure REST APIs with NestJS, Express or FastAPI — JWT auth, RBAC and solid data modelling.',
  },
  {
    title: 'AI Integrations',
    text: 'LLM chatbots, RAG pipelines and autonomous agents wired into real products.',
  },
  {
    title: 'Cloud Deployment',
    text: 'Dockerized services on AWS with Nginx, HTTPS, caching and rate limiting.',
  },
];

export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Sipify',
    period: 'May 2026 — Present',
    type: 'Internship',
    points: [
      'Contributing to a live production Marketing Campaign & Ads platform built with NestJS and Next.js.',
      'Engineered REST APIs and campaign launch workflows; integrated Google and Meta Ads APIs.',
      'Optimized PostgreSQL schemas, Cloudflare caching and AWS workflows.',
      'Code optimization, functional testing and API validation with Postman in an Agile/Scrum team.',
    ],
    tech: ['NestJS', 'Next.js', 'PostgreSQL', 'AWS', 'Cloudflare'],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Microsun Global Infotech',
    period: 'Jun 2025 — Aug 2025',
    type: 'Internship',
    points: [
      'Developed MERN stack applications and implemented JWT authentication.',
      'Redesigned backend API modules and managed Git workflows.',
      'Tested and validated APIs with Postman.',
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
];

export const education = [
  {
    degree: 'B.Tech, Computer Science and Technology',
    school: 'Modern Institute of Technology & Research Centre (MITRC)',
    period: '2023 — Present',
    detail: 'CGPA: 9.3 / 10',
  },
  {
    degree: 'Class XII (CBSE)',
    school: 'Alwar Public School',
    period: '2022 — 2023',
    detail: '77%',
  },
  {
    degree: 'Class X (CBSE)',
    school: 'Alwar Public School',
    period: '2020 — 2021',
    detail: '85.6%',
  },
];

export const achievements = [
  { title: 'Winner, Internal College Hackathon', text: '1st position at institute-level hackathon for web application design.' },
  { title: 'TATA Imagination Hackathon', text: 'Certificate of appreciation for innovative problem-solving.' },
  { title: 'Top 10, Cloud Computing Quiz', text: 'SkillOcean — ranked among top performers across participating colleges.' },
  { title: 'LeetCode 350+', text: 'Solved 350+ DSA problems covering core data structures and algorithms.' },
];

export const certifications = [
  { title: 'Cloud Computing', issuer: 'SkillOcean' },
  { title: 'Deep Learning, NLP & GPT Technologies', issuer: 'SkillOcean' },
  { title: 'AI Tools & Productivity', issuer: 'Be10x' },
  { title: 'Advanced Java Programming', issuer: 'Upflairs' },
];

export const projects = [
  {
    title: 'AuraHealth',
    subtitle: 'AI-Powered Healthcare Platform',
    description:
      'Telemedicine platform with Admin, Doctor and Patient portals, WebRTC video consultations, Socket.IO chat and a Gemini-powered assistant for symptom triage, report and skin analysis.',
    points: [
      'JWT + RBAC + OTP resets; cut dependency vulnerabilities from 39 to 0',
      'Dockerized on AWS EC2 behind Nginx with Redis rate limiting (20 req/min)',
      'Async locking to prevent appointment double-booking',
    ],
    image: healthImg,
    tech: ['React 19', 'Express 5', 'MongoDB', 'WebRTC', 'Redis', 'Docker', 'Gemini'],
    github: 'https://github.com/dolishaa29/healthcare_app',
    live: 'https://auraahealth.vercel.app/',
    featured: true,
  },
  {
    title: 'EduPulse ERP',
    subtitle: 'Education Management System',
    description:
      '3-portal ERP (Admin / Staff / Student) across 18+ modules — fees, hostel, library, transport — with facial-recognition attendance and a bilingual Gemini AI assistant.',
    points: [
      'TensorFlow.js face attendance with 200m geofencing',
      'WebRTC meetings, Socket.IO chat, automated PDF reports',
      'Docker on AWS EC2 behind Nginx with HTTPS',
    ],
    image: erpImg,
    tech: ['React', 'Node.js', 'MongoDB', 'Material UI', 'Socket.IO', 'Docker', 'AWS'],
    github: 'https://github.com/dolishaa29/EDUpulse_2.0',
    live: 'https://frontend-4pr1.onrender.com/',
    featured: true,
  },
  {
    title: 'Multi-Agent Research System',
    subtitle: 'Autonomous AI research pipeline',
    description:
      'An autonomous 3-agent pipeline (Planner, Search Agent, Reader Agent) that decomposes research topics, fetches live web data and synthesizes structured summaries.',
    points: [
      'LangChain tool-calling agents with Tavily search and BeautifulSoup scrapers',
      'FastAPI backend with a React dashboard visualizing each agent step',
      'Modular writer / critic pipelines for AI-assisted article generation',
    ],
    image: null,
    tech: ['Python', 'FastAPI', 'LangChain', 'Mistral AI', 'Tavily API', 'BeautifulSoup', 'React'],
    github: 'https://github.com/dolishaa29?tab=repositories',
    live: null,
    featured: true,
  },
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];
