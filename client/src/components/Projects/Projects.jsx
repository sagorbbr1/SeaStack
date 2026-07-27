import Section from "../ui/Section";
import Heading from "../ui/Heading";

import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Section id="projects">
      <Heading
        badge="Portfolio"
        title="Featured Projects"
        subtitle="A selection of projects that showcase my skills in building modern, responsive, and scalable web applications."
      />

      <div className="mt-16 space-y-10">
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