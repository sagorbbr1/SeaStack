import {
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";

const ProjectButtons = ({ github, live }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {/* GitHub */}
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-slate-300
          bg-white
          px-6
          py-3
          font-medium
          text-slate-700
          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-slate-900
          hover:bg-slate-900
          hover:text-white
          hover:shadow-lg
          hover:shadow-slate-900/20

          dark:border-slate-700
          dark:bg-slate-900
          dark:text-slate-300
          dark:hover:border-white
          dark:hover:bg-white
          dark:hover:text-slate-900
        "
      >
        <FaGithub />
        GitHub
      </a>

      {/* Live Demo */}
      <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-blue-600
          px-6
          py-3
          font-medium
          text-white
          transition-all
          duration-300

          hover:-translate-y-1
          hover:bg-blue-700
          hover:shadow-lg
          hover:shadow-blue-500/30

          dark:bg-blue-500
          dark:hover:bg-blue-400
          dark:hover:shadow-blue-400/30
        "
      >
        Live Demo
        <FaArrowUpRightFromSquare />
      </a>
    </div>
  );
};

export default ProjectButtons;