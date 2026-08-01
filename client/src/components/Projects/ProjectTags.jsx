const ProjectTags = ({ technologies }) => {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="
            rounded-full
            border border-slate-200
            bg-slate-50
            px-4 py-2
            text-sm
            font-medium
            text-slate-700
            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:border-blue-600
            hover:bg-blue-50
            hover:text-blue-600

            dark:border-slate-700
            dark:bg-slate-900
            dark:text-slate-300
            dark:hover:border-blue-500
            dark:hover:bg-blue-500/10
            dark:hover:text-blue-400
          "
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;