export type Project = {
  id: string;
  tag: string;
  name: string;
  desc: string;
  detail: string;
  stack: string[];
  link: string;
  linkLabel: string;
  kind: "Web App" | "Mobile App" | "UI / UX Case Study" | "Web / Mobile App" | "";

  image: string;
};

export type Job = {
  years: string;
  role: string;
  company: string;
  desc: string;
};

export type SkillGroup = {
  no: string;
  title: string;
  items: string[];
};

export type EducationEntry = {
  years: string;
  degree: string;
  school: string;
};

export type Certification = {
  issuer: string;
  year: string;
  name: string;
  id: string;
};

export type Social = {
  label: string;
  url: string;
};

export const profile = {
  name: "Unaib ur Rehman",
  role: "Full-Stack Developer & Designer",
  intro:
    "I'm Unaib ur Rehman — an experienced full-stack developer who also designs. I build products end to end: React front ends, Node.js APIs, and the interfaces that hold them together.",
  lead: "An experienced Full-Stack Developer — shipping production apps across the stack, with a designer's eye for the interface.",
  body: "I work end to end: architecting APIs and data models in Node.js, building fast React front ends, and designing the UI myself when it needs to be right. Owning both sides means fewer handoffs and better products. Outside of work, I'm passionate about cricket, football, entrepreneurship, and good food.",
  interests: ["Cricket", "Football", "Entrepreneurship", "Good food"],
};

export const skills: SkillGroup[] = [
  {
    no: "01",
    title: "Frontend & Mobile",
    items: [
      "React.js",
      "Next.js",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "React Native",
      "TailwindCSS",
      "CSS / SCSS / Sass",
      "Redux Toolkit",
      "HTML5",
      "Bootstrap",
      "Pinia",
      "Vuetify",
      "Shadcn UI",
      "Expo",
      "Expo CLI",
      "EAS CLI",
      "DOM",
      "Expo / Firebase Push Notifications",
    ],
  },
  {
    no: "02",
    title: "Backend",
    items: ["Node.js", "Express JS", "PHP", "Laravel", "MySQL", "PostgreSQL", "Docker"],
  },
  {
    no: "03",
    title: "Tools & Deployment",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Git CLI",
      "npm / yarn",
      "Jira",
      "Trello",
      "Vercel",
      "Google Play Console",
      "Apple Developer Account (TestFlight)",
      "Hubspot",
      "Bubble.io",
    ],
  },
  {
    no: "04",
    title: "Design & Prototyping",
    items: [
      "Figma",
      "Photoshop",
      "Illustrator",
      "Wireframing",
      "Prototyping",
      "User Flows",
      "User Journey Mapping",
      "UX Research",
      "Design Systems",
      "Visual Design",
      "Responsive Design",
      "UI Design",
    ],
  },
  
];

export const experience: Job[] = [
  {
    years: "2026 — Now",
    role: "Full-Stack Developer (Frontend-Focused)",
    company: "i2c Inc.",
    desc: "Building and shipping production features across the stack — React front ends backed by Node.js services and APIs.",
  },
  {
    years: "2023 — 2026",
    role: "Frontend Engineer",
    company: "Linked Matrix",
    desc: "Developed responsive, component-driven interfaces in React and integrated them against REST APIs.",
  },
  {
    years: "2023 — Now",
    role: "Developer & Designer, Freelance",
    company: "Self-employed",
    desc: "Delivered full web products for clients end to end — from UI design through frontend build and backend integration.",
  },
];

const GITHUB_URL = "https://github.com/unaib-ur-rehman/";
const BEHANCE_URL = "https://www.behance.net/unaiburrehman";

export const devProjects: Project[] = [
    {
    id: "dev-3",
    tag: "Full-Stack",
    name: "QA Review Board",
    desc: "A visual-first issue tracker for design and UI reviews that turns annotated screenshots into structured issues and one clean link for developers.",
    detail:
      "A visual-first issue tracking tool for design and UI reviews. Instead of dumping messy screenshots into Jira comments, QA logs annotated visual issues in a structured table and shares one clean link with the developer.",
    stack: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL" ,"Supabase", "Vercel", "Docker", "TailwindCSS"],
    link: "https://github.com/unaib-ur-rehman/QA-Review-Board",
    linkLabel: "View repository",
    kind: "",
    image: "/qa-review-board.png",
  },
  {
    id: "dev-4",
    tag: "Full-Stack",
    name: "ClaroDraft",
    desc: "ClaroDRAFT turns scattered financial and operational data into clear, structured decisions.",
    detail:
      "ClaroDRAFT helps businesses turn scattered data, reporting challenges, financial uncertainty, tax obligations, and operational risks into structured decisions — connecting accounting, reporting, tax, cash flow, and risk insights into one cohesive narrative.",
    stack: ["React", "JavaScript", "PHP", "Git", "NameCheap"],
    link: "https://github.com/ClaroDRAFT",
    linkLabel: "View repository",
    kind: "",
    image: "/clarodraft.png",
  },
  {
    id: "dev-1",
    tag: "Javascript · CSS",
    name: "Football Live Score Extension",
    desc: "A Chrome extension that displays live football scores using the API-FOOTBALL service.",
    detail:
      "A Chrome extension that displays live football scores using the API-FOOTBALL service.",
    stack: ["Javascript", "CSS"],
    link: "https://github.com/unaib-ur-rehman/football-score-live",
    linkLabel: "View repository",
    kind: "Web App",
    image: "https://raw.githubusercontent.com/unaib-ur-rehman/football-score-live/refs/heads/main/icons/screenshot.png",
  },
  {
    id: "dev-2",
    tag: "Full-Stack",
    name: "BubbleTea AI Chat",
    desc: "A platform providing instant web and mobile interfaces for AI agents and chatbots, acting as the UI layer for developer-built AI tools.",
    detail:
      "A platform providing instant web and mobile interfaces for AI agents and chatbots, acting as the UI layer for developer-built AI tools.",
    stack: ["TypeScript", "Next.js", "React Native", "Python", "AWS", "Vercel", "Expo"],
    link: GITHUB_URL,
    linkLabel: "View",
    kind: "Web / Mobile App",
    image: "",
  },
];

export const designProjects: Project[] = [
  {
    id: "ux-1",
    tag: "Mobile App · UI/UX",
    name: "Design Project One [placeholder]",
    desc: "A short one-line description of the product and who it was designed for.",
    detail:
      "Placeholder — replace with the case study: the brief, your research, the key flows you designed, the decisions behind the interface, and what changed as a result.",
    stack: ["Figma", "Wireframing", "Prototyping", "Design System"],
    link: BEHANCE_URL,
    linkLabel: "View on Behance",
    kind: "UI / UX Case Study",
    image: "/placeholders/ux-1.svg",
  },
  {
    id: "ux-2",
    tag: "Web App · UI/UX",
    name: "Design Project Two [placeholder]",
    desc: "A short one-line description of the product and who it was designed for.",
    detail:
      "Placeholder — replace with the case study: the brief, your research, the key flows you designed, the decisions behind the interface, and what changed as a result.",
    stack: ["Figma", "User Flows", "Interaction Design", "Prototyping"],
    link: BEHANCE_URL,
    linkLabel: "View on Behance",
    kind: "UI / UX Case Study",
    image: "/placeholders/ux-2.svg",
  },
  {
    id: "ux-3",
    tag: "Dashboard · UI",
    name: "Design Project Three [placeholder]",
    desc: "A short one-line description of the product and who it was designed for.",
    detail:
      "Placeholder — replace with the case study: the brief, your research, the key flows you designed, the decisions behind the interface, and what changed as a result.",
    stack: ["Figma", "Data Visualisation", "Design System", "Illustrator"],
    link: BEHANCE_URL,
    linkLabel: "View on Behance",
    kind: "UI / UX Case Study",
    image: "/placeholders/ux-3.svg",
  },
  {
    id: "ux-4",
    tag: "Branding · Visual",
    name: "Design Project Four [placeholder]",
    desc: "A short one-line description of the product and who it was designed for.",
    detail:
      "Placeholder — replace with the case study: the brief, the visual direction you explored, the identity system you built, and how it was applied.",
    stack: ["Illustrator", "Photoshop", "Figma", "Brand Guidelines"],
    link: BEHANCE_URL,
    linkLabel: "View on Behance",
    kind: "UI / UX Case Study",
    image: "/placeholders/ux-4.svg",
  },
];

export const education: EducationEntry[] = [
  {
    years: "2019 — 2023",
    degree: "BS Software Engineering",
    school: "Government College University",
  },
  {
    years: "2017 — 2019",
    degree: "Intermediate / Computer Science",
    school: "Punjab Group of Colleges",
  },
];

export const certifications: Certification[] = [
  {
    issuer: "Anthropic",
    year: "2026",
    name: "Claude Code 101",
    // https://verify.skilljar.com/c/sqn53jz3zdj5
    id: "Credential ID: sqn53jz3zdj5",
  },
  {
    issuer: "Meta",
    year: "2026",
    name: "Programming with JavaScript",
    id: "Credential ID: 2MKLFV04E2M5",
  },
];

export const socials: Social[] = [
  { label: "GitHub", url: GITHUB_URL },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/unaib-ur-rehman31/" },
  { label: "Behance", url: BEHANCE_URL },
  {
    label: "Stack Overflow",
    url: "https://stackoverflow.com/users/23595049/rehman-unaib",
  },
  { label: "Instagram", url: "https://www.instagram.com/unaiburrehman31/" },
  { label: "Email", url: "unaiburrehman31@gmail.com" },
];
