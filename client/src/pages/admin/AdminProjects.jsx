import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaPenToSquare, FaTrash, FaGithub, FaGlobe } from "react-icons/fa6";

const API = import.meta.env.VITE_API_URL;

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
const [deleteProject, setDeleteProject] = useState(null);
const [deleting, setDeleting] = useState(false);
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

  const handleDelete = async () => {
  if (!deleteProject || deleting) return;

  try {
    setDeleting(true);

    const token = localStorage.getItem("adminToken");

    const response = await fetch(
      `${API}/projects/${deleteProject._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to delete project.");
    }

    // Update UI without refetching
    setProjects((prev) =>
      prev.filter((project) => project._id !== deleteProject._id)
    );

    setDeleteProject(null);
  } catch (error) {
    console.error("Delete project error:", error);
    setError(error.message || "Failed to delete project.");
  } finally {
    setDeleting(false);
  }
};

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            Portfolio
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projects
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Manage the projects displayed on your portfolio.
          </p>
        </div>

        <Link
          to="/admin/projects/add"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-blue-600
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-blue-700
          "
        >
          <FaPlus />
          Add Project
        </Link>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-80 animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800"
            />
          ))}
        </div>
      )}

      {/* Projects */}
      {!loading && !error && projects.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project._id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies?.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                  <div className="flex gap-3 text-slate-400">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-500"
                      >
                        <FaGithub />
                      </a>
                    )}

                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-500"
                      >
                        <FaGlobe />
                      </a>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={`/admin/projects/edit/${project._id}`}
                      className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-500/10"
                    >
                      <FaPenToSquare />
                    </Link>

                  <button
  onClick={() => setDeleteProject(project)}
  className="
    rounded-lg
    p-2
    text-red-500
    transition
    hover:bg-red-50
    dark:hover:bg-red-500/10
  "
  title="Delete project"
>
  <FaTrash />
</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty */}
      {!loading && !error && projects.length === 0 && (
        <div className="rounded-3xl border border-dashed border-slate-300 px-6 py-20 text-center dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            No projects yet
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Add your first project to display it on your portfolio.
          </p>
        </div>
      )}
      {deleteProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        Delete Project?
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
        Are you sure you want to delete{" "}
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          {deleteProject.title}
        </span>
        ? This action cannot be undone.
      </p>

      <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button
          onClick={() => setDeleteProject(null)}
          disabled={deleting}
          className="
            rounded-xl
            border
            border-slate-200
            px-5
            py-3
            text-sm
            font-semibold
            text-slate-700
            transition
            hover:bg-slate-50
            disabled:opacity-50
            dark:border-slate-700
            dark:text-slate-300
            dark:hover:bg-slate-800
          "
        >
          Cancel
        </button>

        <button
          onClick={handleDelete}
          disabled={deleting}
          className="
            rounded-xl
            bg-red-600
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-red-700
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {deleting ? "Deleting..." : "Yes, Delete"}
        </button>
      </div>
    </div>
  </div>
)}
    </div>
    
  );
};

export default AdminProjects;