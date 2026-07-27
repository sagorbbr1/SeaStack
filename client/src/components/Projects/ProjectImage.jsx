import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";

const ProjectImage = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
    >
      {/* Browser Header */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
        <span className="h-3 w-3 rounded-full bg-green-400"></span>
      </div>

      {/* Screenshot */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-slate-900/70 opacity-0 transition duration-500 group-hover:opacity-100">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-5 py-3 font-medium text-slate-900 transition hover:scale-105"
          >
            <FaArrowUpRightFromSquare />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-5 py-3 font-medium text-slate-900 transition hover:scale-105"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectImage;