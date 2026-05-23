import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Selvarathinam G",
  title: "Hi, I'm Selvarathinam.G",
  description:
    "Adaptive and goal-focused Information Technology student with a strong interest in full-stack development, AI-driven applications, and practical problem solving. I enjoy building responsive interfaces, reliable backends, and useful projects that make everyday tasks easier.",
  resumeLink: "https://drive.google.com/file/d/1ep-m0NM7TcCWGbT2Eoe72gqUzJdA7vi3/view?usp=sharing",
};

export const openSource = {
  githubUserName: "SelvarathinamG",
};

export const contact = {
  title: "Connect",
  description:
    "Use the form below to reach me about opportunities, projects, or collaboration. If you prefer, you can also email me directly.",
  emailLabel: "selvarathinamganapathi@gmail.com",
};

export const socialLinks: SocialLinksType = {
  email: "mailto:selvarathinamganapathi@gmail.com",
  linkedin: "https://www.linkedin.com/in/selvarathinam-g-66863b298/",
  github: "https://github.com/SelvarathinamG",
  instagram: "https://www.instagram.com/soul_of._.single/",
  
};

export const skillsSection: SkillsSectionType = {
  title: "Skills",
  subTitle: "Languages, frameworks, and tools I use to build web, mobile, and AI-focused projects.",
  data: [
    {
      title: "Development Stack",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        "⚡ Programming in Java, Python, JavaScript, and C",
        "⚡ Building responsive UIs with React, HTML5, CSS3, and Tailwind CSS",
        "⚡ Creating backend services and REST APIs with Node.js and FastAPI",
        "⚡ Working with Flutter, MySQL, Firebase, NumPy, and Pandas",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "React",
          iconifyTag: "logos:react",
        },
        {
          skillName: "Tailwind CSS",
          iconifyTag: "logos:tailwindcss-icon",
        },
        {
          skillName: "Flutter",
          iconifyTag: "logos:flutter",
        },
        {
          skillName: "Node.js",
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "Firebase",
          iconifyTag: "logos:firebase",
        },
      ],
    },
    {
      title: "Tools & Collaboration",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json",
      skills: [
        "⚡ Using Git, VS Code, and Postman for development workflows",
        "⚡ Deploying projects with Netlify and Render",
        "⚡ Designing and presenting ideas with Figma and Canva",
        "⚡ Working with teams in remote and collaborative environments",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          iconifyTag: "simple-icons:git",
        },
        {
          skillName: "VS Code",
          iconifyTag: "logos:visual-studio-code",
        },
        {
          skillName: "Postman",
          iconifyTag: "logos:postman-icon",
        },
        {
          skillName: "Figma",
          iconifyTag: "logos:figma",
        },
        {
          skillName: "Canva",
          iconifyTag: "logos:canva",
        },
        {
          skillName: "Netlify",
          iconifyTag: "logos:netlify",
        },
        {
          skillName: "Render",
          iconifyTag: "simple-icons:render",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend & UI",
    progressPercentage: "88",
  },
  {
    Stack: "Backend & APIs",
    progressPercentage: "84",
  },
  {
    Stack: "Tools & Collaboration",
    progressPercentage: "90",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Sri Manakula Vinayagar Engineering College, Puducherry",
    subHeader: "B.Tech - Information Technology",
    duration: "2023 - 2027",
    desc: "Focused on software development, problem solving, and building practical technology projects.",
    grade: "CGPA 7.80",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Krishnasamy Matriculation Higher Secondary School of Excellence, Cuddalore",
    subHeader: "HSC - 12th",
    duration: "2022 - 2023",
    desc: "Higher secondary studies with a strong academic foundation.",
    grade: "65.5%",
    descBullets: [],
  },
  {
    schoolName: "Krishnasamy Matriculation Higher Secondary School of Excellence, Cuddalore",
    subHeader: "SSC - 10th",
    duration: "2020 - 2021",
    desc: "Secondary school completion with consistent academic performance.",
    grade: "Passed",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Developer Intern",
    company: "DevTechAI",
    companyLogo: "https://www.devtechai.org/favicon.ico",
    date: "Jun 2025 - Jan 2026",
    desc: "Working as a part-time Software Developer Intern on front-end development, Java, and related web technologies. I contribute to responsive interfaces, remote collaboration, and product-focused development work.",
    descBullets: [
      "Building and refining front-end features for internal and client-facing products.",
      "Collaborating with a remote team while learning practical engineering workflows.",
      "Working across Java and web technologies to support product delivery.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Competitor Monitor AI",
    desc: "AI-powered market intelligence platform for competitor tracking, trend analysis, and actionable business insights.",
    image: "https://opengraph.githubassets.com/1/SelvarathinamG/Competitor-Monitor-AI",
    github: "https://github.com/SelvarathinamG/Competitor-Monitor-AI",
  },
  {
    name: "smartvendors",
    desc: "A vendor-focused project for organizing products, workflows, and operational data in a simple, practical interface.",
    image: "https://opengraph.githubassets.com/1/SelvarathinamG/smartvendors",
    github: "https://github.com/SelvarathinamG/smartvendors",
  },
  {
    name: "AlcoSecure",
    desc: "A responsible drinking initiative that tracks alcohol purchases with QR-based identity verification and enforces daily consumption limits.",
    image: "https://opengraph.githubassets.com/1/SelvarathinamG/AlcoSecure",
    github: "https://github.com/SelvarathinamG/AlcoSecure",
  },
  {
    name: "FITNESSPRO_DJANGO",
    desc: "A role-based gym management system built with Django for workout plans, diet plans, attendance, and secure admin workflows.",
    image: "https://opengraph.githubassets.com/1/SelvarathinamG/FITNESSPRO_DJANGO",
    github: "https://github.com/SelvarathinamG/FITNESSPRO_DJANGO",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Selvarathinam G",
  description: greetings.description,
  author: "Selvarathinam G",
  image: "https://github.com/SelvarathinamG.png",
  url: "https://github.com/SelvarathinamG",
  keywords: [
    "Selvarathinam G",
    "Selvarathinam",
    "Portfolio",
    "Software Developer",
    "React",
    "Django",
    "Flutter",
  ],
};
