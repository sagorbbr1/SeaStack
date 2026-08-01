import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiFigma,
} from "react-icons/si";

export const skills = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: FaReact,
        color: "text-sky-500",
        description: "UI Library",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-slate-900",
        description: "React Framework",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
        description: "Programming Language",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
        description: "Typed JavaScript",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
        description: "Utility CSS",
      },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-600",
        description: "Runtime Environment",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-slate-700",
        description: "Backend Framework",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
        description: "NoSQL Database",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-orange-500",
        description: "Backend Services",
      },
    ],
  },

  {
    title: "Tools",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-600",
        description: "Version Control",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-slate-900",
        description: "Code Hosting",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-orange-500",
        description: "API Testing",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "text-pink-500",
        description: "UI Design",
      },
    ],
  },
];