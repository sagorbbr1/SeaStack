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
  { icon: <SiExpress className="text-slate-700 dark:text-slate-300" />, name: "Express" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
  { icon: <FaGithub className="text-slate-800 dark:text-slate-200" />, name: "GitHub" },
];

const TechMarquee = () => {
  return (
    <section
      className="
        overflow-hidden
        border-y border-slate-200
        bg-white
        py-5
        transition-colors
        duration-300

        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      <div className="overflow-hidden">
        <div className="marquee flex w-max gap-12">
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className="
                flex
                shrink-0
                items-center
                gap-3
                whitespace-nowrap
                text-slate-700
                transition-all
                duration-300

                hover:scale-105

                dark:text-slate-300
              "
            >
              <span className="text-2xl">
                {tech.icon}
              </span>

              <span className="font-medium tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;