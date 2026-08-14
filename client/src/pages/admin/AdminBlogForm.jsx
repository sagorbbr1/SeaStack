import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { FaArrowLeft, FaFloppyDisk } from "react-icons/fa6";

const API = import.meta.env.VITE_API_URL;

const AdminBlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = Boolean(id);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "",
    category: "General",
    tags: "",
    published: false,
  });

  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Generate slug
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-");
  };

  // Fetch existing blog
  useEffect(() => {
    if (!isEdit) return;

    const fetchBlog = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const response = await fetch(`${API}/blogs/admin/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Failed to fetch blog.");
        }

        const blog = result.data;

        setForm({
          title: blog.title || "",
          slug: blog.slug || "",
          excerpt: blog.excerpt || "",
          content: blog.content || "",
          image: blog.image || "",
          category: blog.category || "General",
          tags: Array.isArray(blog.tags)
            ? blog.tags.join(", ")
            : "",
          published: Boolean(blog.published),
        });
      } catch (error) {
        console.error("Fetch blog error:", error);
        setError(error.message || "Failed to load blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;

    setForm((prev) => ({
      ...prev,
      title,
      slug: isEdit ? prev.slug : generateSlug(title),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (
      !form.title.trim() ||
      !form.slug.trim() ||
      !form.excerpt.trim() ||
      !form.content.trim()
    ) {
      setError(
        "Title, slug, excerpt and content are required."
      );
      return;
    }

    try {
      setSaving(true);

      const token = localStorage.getItem("adminToken");

      const payload = {
        title: form.title.trim(),
        slug: form.slug.trim().toLowerCase(),
        excerpt: form.excerpt.trim(),
        content: form.content,
        image: form.image.trim(),
        category: form.category.trim() || "General",
        tags: form.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        published: form.published,
      };

      const response = await fetch(
        isEdit ? `${API}/blogs/${id}` : `${API}/blogs`,
        {
          method: isEdit ? "PUT" : "POST",
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
            `Failed to ${isEdit ? "update" : "create"} blog.`
        );
      }

      navigate("/admin/blogs");
    } catch (error) {
      console.error("Save blog error:", error);
      setError(
        error.message ||
          `Failed to ${isEdit ? "update" : "create"} blog.`
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-10 w-48 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
        <div className="h-96 animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <button
            type="button"
            onClick={() => navigate("/admin/blogs")}
            className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            <FaArrowLeft size={12} />
            Back to Blogs
          </button>

          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {isEdit ? "Edit Blog" : "Create Blog"}
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {isEdit
              ? "Update your blog post."
              : "Create a new blog post for your portfolio."}
          </p>
        </div>
      </div>

      {/* Error */}

      {error && (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Basic Information
          </h2>

          <div className="mt-6 grid gap-6">
            {/* Title */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Title
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleTitleChange}
                placeholder="How I Built My MERN Portfolio"
                maxLength={200}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>

            {/* Slug */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Slug
              </label>

              <input
                type="text"
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="how-i-built-my-mern-portfolio"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />

              <p className="mt-2 text-xs text-slate-400">
                /blog/{form.slug || "your-blog-slug"}
              </p>
            </div>

            {/* Excerpt */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Excerpt
                </label>

                <span className="text-xs text-slate-400">
                  {form.excerpt.length}/500
                </span>
              </div>

              <textarea
                name="excerpt"
                value={form.excerpt}
                onChange={handleChange}
                maxLength={500}
                rows={4}
                placeholder="A short description of your blog post..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>
          </div>
        </section>

        {/* Content */}

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Content
          </h2>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
            <ReactQuill
              theme="snow"
              value={form.content}
              onChange={(content) =>
                setForm((prev) => ({
                  ...prev,
                  content,
                }))
              }
              placeholder="Write your blog content..."
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }],
                  ["bold", "italic", "underline", "strike"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["blockquote", "code-block"],
                  ["link", "image"],
                  [{ align: [] }],
                  [{ color: [] }, { background: [] }],
                  ["clean"],
                ],
              }}
            />
          </div>
        </section>

        {/* Metadata */}

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Blog Details
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Image */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Image URL
              </label>

              <input
                type="url"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://example.com/blog-image.jpg"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>

            {/* Category */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Category
              </label>

              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Web Development"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>

            {/* Tags */}

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Tags
              </label>

              <input
                type="text"
                name="tags"
                value={form.tags}
                onChange={handleChange}
                placeholder="React, Node.js, MongoDB, JavaScript"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />

              <p className="mt-2 text-xs text-slate-400">
                Separate tags with commas.
              </p>
            </div>
          </div>
        </section>

        {/* Publishing */}

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-bold text-slate-900 dark:text-white">
                Publish Blog
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Published blogs will appear on your public website.
              </p>
            </div>

            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                name="published"
                checked={form.published}
                onChange={handleChange}
                className="peer sr-only"
              />

              <div className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-500/20 dark:bg-slate-700" />

              <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5" />
            </label>
          </div>
        </section>

        {/* Actions */}

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => navigate("/admin/blogs")}
            disabled={saving}
            className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FaFloppyDisk />

            {saving
              ? "Saving..."
              : isEdit
              ? "Update Blog"
              : "Create Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminBlogForm;