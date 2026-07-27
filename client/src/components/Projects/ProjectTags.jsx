const ProjectTags = ({ technologies }) => {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;