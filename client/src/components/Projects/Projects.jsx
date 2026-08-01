import Section from "../ui/Section";
import Heading from "../ui/Heading";

import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Section
      id="projects"
      className="
        relative
        overflow-hidden

        bg-white
        dark:bg-slate-950
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-blue-500/10
          blur-3xl

          dark:bg-blue-500/5
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-20
          h-80
          w-80
          rounded-full
          bg-cyan-500/10
          blur-3xl

          dark:bg-cyan-500/5
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          -z-10

          opacity-[0.03]

          [background-image:linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)]
          [background-size:48px_48px]

          dark:opacity-[0.05]
        "
      />

      <Heading
        title="Featured Projects"
        subtitle="A selection of projects that showcase my skills in building modern, responsive, and scalable web applications."
      />

      <div className="relative mt-16 space-y-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;