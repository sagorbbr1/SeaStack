import {
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";

const ProjectButtons = ({ github, live }) => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-slate-900 hover:text-white"
      >
        <FaGithub />
        GitHub
      </a>

      <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Live Demo
        <FaArrowUpRightFromSquare />
      </a>
    </div>
  );
};

export default ProjectButtons;