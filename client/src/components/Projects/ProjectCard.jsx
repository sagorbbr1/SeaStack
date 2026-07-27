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
      <div className="group">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 group-hover:shadow-2xl">
          
          {/* Browser Header */}
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-400"></span>
          </div>

          {/* Screenshot */}
          <div className="overflow-hidden">
            <ProjectImage project={project} />
          </div>

        </div>
      </div>


      {/* Content */}
      <div>
        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
          Featured Project
        </span>

        <h3 className="mt-6 text-4xl font-bold text-slate-900">
          {project.title}
        </h3>

        <p className="mt-6 leading-8 text-slate-600">
          {project.description}
        </p>


        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-3">
          <ProjectTags technologies={project.technologies} />
        </div>


        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
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