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
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-slate-900",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
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
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-slate-700",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-orange-500",
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
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-slate-900",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-orange-500",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "text-pink-500",
      },
    ],
  },
];