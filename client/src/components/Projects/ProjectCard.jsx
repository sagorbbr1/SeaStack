import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";
import ProjectTags from "./ProjectTags";
import ProjectButtons from "./ProjectButtons";

const ProjectCard = ({ project, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`grid items-center gap-14 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div>
        <ProjectImage project={project} />
      </div>

      {/* Content */}
      <div>
        {/* Badge */}
        <span
          className="
            inline-flex
            rounded-full
            bg-blue-50
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-600

            dark:bg-blue-500/10
            dark:text-blue-400
          "
        >
          Featured Project
        </span>

        {/* Title */}
        <h3
          className="
            mt-6
            text-4xl
            font-bold
            text-slate-900

            dark:text-white
          "
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-6
            leading-8
            text-slate-600

            dark:text-slate-400
          "
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-8">
          <ProjectTags
            technologies={project.technologies}
          />
        </div>

        {/* Buttons */}
        <div className="mt-10">
          <ProjectButtons
            github={project.github}
            live={project.live}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;