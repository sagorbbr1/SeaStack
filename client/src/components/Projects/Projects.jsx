import { useEffect, useState } from "react";

import Section from "../ui/Section";
import Heading from "../ui/Heading";
import ProjectCard from "./ProjectCard";

const API = import.meta.env.VITE_API_URL;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API}/projects`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Failed to fetch projects.");
        }

        setProjects(result.data || []);
      } catch (error) {
        console.error("Fetch projects error:", error);
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
        {/* Loading */}

        {loading && (
          <div className="space-y-10">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                  grid
                  animate-pulse
                  gap-14
                  lg:grid-cols-2
                "
              >
                <div className="h-80 rounded-3xl bg-slate-200 dark:bg-slate-800" />

                <div className="flex flex-col justify-center">
                  <div className="h-6 w-32 rounded bg-slate-200 dark:bg-slate-800" />

                  <div className="mt-6 h-10 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />

                  <div className="mt-6 h-20 w-full rounded bg-slate-200 dark:bg-slate-800" />

                  <div className="mt-8 h-10 w-1/2 rounded bg-slate-200 dark:bg-slate-800" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div
            className="
              rounded-2xl
              border
              border-red-200
              bg-red-50
              px-6
              py-5
              text-center
              text-sm
              font-medium
              text-red-600
              dark:border-red-500/20
              dark:bg-red-500/10
              dark:text-red-400
            "
          >
            {error}
          </div>
        )}

        {/* Projects */}

        {!loading &&
          !error &&
          projects.map((project, index) => (
            <ProjectCard
              key={project._id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}

        {/* Empty State */}

        {!loading && !error && projects.length === 0 && (
          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              px-6
              py-16
              text-center
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              No projects available
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Projects will appear here once they are added.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Projects;