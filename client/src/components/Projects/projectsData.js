import realEstate from "../../assets/images/project.jpg";
import portfolio from "../../assets/images/project.jpg";
import dashboard from "../../assets/images/project.jpg";

export const projects = [
  {
    id: 1,
    title: "Real Estate Landing Page",
    description:
      "A modern landing page designed for real estate agencies with responsive UI, lead generation, and clean animations.",
    image: realEstate,
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    github: "#",
    live: "#",
    featured: true,
  },

  {
    id: 2,
    title: "Developer Portfolio",
    description:
      "A premium portfolio website with modern UI, smooth animations, and responsive layouts.",
    image: portfolio,
    technologies: [
      "React",
      "Framer Motion",
      "Tailwind CSS",
    ],
    github: "#",
    live: "#",
    featured: true,
  },

  {
    id: 3,
    title: "Admin Dashboard",
    description:
      "A responsive dashboard with charts, authentication, CRUD operations, and analytics.",
    image: dashboard,
    technologies: [
      "React",
      "Express",
      "MongoDB",
    ],
    github: "#",
    live: "#",
    featured: true,
  },
];