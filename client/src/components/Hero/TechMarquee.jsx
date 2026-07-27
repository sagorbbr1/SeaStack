import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const techs = [
  { icon: <FaReact className="text-sky-500" />, name: "React" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
  { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
];

const TechMarquee = () => {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-5">
      <div className="flex w-max marquee whitespace-nowrap gap-12">
        {[...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-slate-700 whitespace-nowrap"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechMarquee;