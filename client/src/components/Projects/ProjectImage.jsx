import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";

const ProjectImage = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-lg
        transition-all
        duration-300

        hover:border-blue-500
        hover:shadow-2xl
        hover:shadow-blue-500/10

        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:border-blue-500
      "
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100

          bg-gradient-to-br
          from-blue-500/5
          via-cyan-500/10
          to-blue-500/5

          dark:from-blue-500/10
          dark:via-cyan-500/15
          dark:to-blue-500/10
        "
      />

      {/* Browser Header */}
      <div
        className="
          relative z-10
          flex items-center gap-2
          border-b
          border-slate-200
          bg-slate-50
          px-5 py-3

          dark:border-slate-800
          dark:bg-slate-950
        "
      >
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center gap-4

            bg-slate-950/70
            backdrop-blur-sm

            opacity-0
            transition-all
            duration-500

            group-hover:opacity-100
          "
        >
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              flex h-12 w-12 items-center justify-center
              rounded-xl
              bg-white
              text-slate-900

              transition-all
              duration-300

              hover:scale-110
              hover:bg-blue-600
              hover:text-white
            "
          >
            <FaArrowUpRightFromSquare />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex h-12 w-12 items-center justify-center
              rounded-xl
              bg-white
              text-slate-900

              transition-all
              duration-300

              hover:scale-110
              hover:bg-slate-900
              hover:text-white

              dark:hover:bg-slate-700
            "
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectImage;