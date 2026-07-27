import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiPostman,
  SiWordpress,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "text-sky-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "Express", icon: SiExpress, color: "text-gray-700" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "text-slate-900" },
  { name: "Postman", icon: SiPostman, color: "text-orange-600" },
  { name: "WordPress", icon: SiWordpress, color: "text-blue-500" },
];

const TechArsenal = () => {
  return (
    <section className="mt-12">
      <h3 className="mb-6 text-2xl font-bold text-slate-900">
        Tech Arsenal
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >
              <Icon className={`text-lg ${skill.color}`} />
              <span className="text-sm font-medium text-slate-700">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechArsenal;