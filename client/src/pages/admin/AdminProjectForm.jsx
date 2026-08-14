import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaPlus,
  FaPenToSquare,
} from "react-icons/fa6";

const API = import.meta.env.VITE_API_URL;

const initialForm = {
  title: "",
  description: "",
  image: "",
  technologies: "",
  github: "",
  live: "",
  featured: true,
  order: 0,
};

const AdminProjectForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEditMode = Boolean(id);

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(isEditMode);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Fetch project when editing
  useEffect(() => {
    if (!isEditMode) return;

    const fetchProject = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API}/projects/${id}`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Failed to fetch project.");
        }

        const project = result.data;

        setForm({
          title: project.title || "",
          description: project.description || "",
          image: project.image || "",
          technologies: project.technologies?.join(", ") || "",
          github: project.github || "",
          live: project.live || "",
          featured: project.featured ?? true,
          order: project.order ?? 0,
        });
      } catch (error) {
        console.error("Fetch project error:", error);
        setError(error.message || "Failed to load project.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    try {
      setSubmitting(true);
      setError("");

      const token = localStorage.getItem("adminToken");

      const payload = {
        title: form.title.trim(),
        description: form.description.trim(),
        image: form.image.trim(),
        technologies: form.technologies
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean),
        github: form.github.trim(),
        live: form.live.trim(),
        featured: form.featured,
        order: Number(form.order) || 0,
      };

      const response = await fetch(
        isEditMode
          ? `${API}/projects/${id}`
          : `${API}/projects`,
        {
          method: isEditMode ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            `Failed to ${isEditMode ? "update" : "create"} project.`
        );
      }

      navigate("/admin/projects");
    } catch (error) {
      console.error("Project submit error:", error);
      setError(error.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-3xl animate-pulse">
        <div className="mb-8">
          <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-800" />
          <div className="mt-4 h-10 w-64 rounded bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="h-14 rounded-xl bg-slate-200 dark:bg-slate-800"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate("/admin/projects")}
          className="
            mb-5
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-slate-500
            transition
            hover:text-blue-600
            dark:text-slate-400
            dark:hover:text-blue-400
          "
        >
          <FaArrowLeft />
          Back to Projects
        </button>

        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          Portfolio
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
          {isEditMode ? "Edit Project" : "Add Project"}
        </h1>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {isEditMode
            ? "Update your portfolio project details."
            : "Add a new project to your portfolio."}
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="
          max-w-3xl
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
          sm:p-8
          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        <div className="grid gap-6">
          <FormInput
            label="Project Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter project title"
            required
          />

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
              Description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={5}
              maxLength={1000}
              placeholder="Describe your project..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            <p className="mt-1 text-right text-xs text-slate-400">
              {form.description.length}/1000
            </p>
          </div>

          <FormInput
            label="Image URL"
            name="image"
            type="url"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/project-image.jpg"
            required
          />

          <FormInput
            label="Technologies"
            name="technologies"
            value={form.technologies}
            onChange={handleChange}
            placeholder="React, Node.js, MongoDB"
            required
          />

          <FormInput
            label="GitHub URL"
            name="github"
            type="url"
            value={form.github}
            onChange={handleChange}
            placeholder="https://github.com/username/project"
          />

          <FormInput
            label="Live URL"
            name="live"
            type="url"
            value={form.live}
            onChange={handleChange}
            placeholder="https://your-project.com"
          />

          <FormInput
            label="Display Order"
            name="order"
            type="number"
            value={form.order}
            onChange={handleChange}
            placeholder="1"
          />

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-700">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
              className="h-4 w-4 accent-blue-600"
            />

            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Featured Project
              </p>

              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Display this project in your featured portfolio section.
              </p>
            </div>
          </label>

          <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end dark:border-slate-800">
            <button
              type="button"
              onClick={() => navigate("/admin/projects")}
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isEditMode ? <FaPenToSquare /> : <FaPlus />}

              {submitting
                ? isEditMode
                  ? "Updating..."
                  : "Adding..."
                : isEditMode
                  ? "Update Project"
                  : "Add Project"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
      />
    </div>
  );
};

export default AdminProjectForm;