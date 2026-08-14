import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaPlus,
  FaPenToSquare,
  FaTrash,
  FaEye,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const API = import.meta.env.VITE_API_URL;

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [deleteBlog, setDeleteBlog] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${API}/blogs/admin/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to fetch blogs.");
      }

      setBlogs(result.data || []);
    } catch (error) {
      console.error("Fetch blogs error:", error);
      setError(error.message || "Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async () => {
    if (!deleteBlog || deleting) return;

    try {
      setDeleting(true);

      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `${API}/blogs/${deleteBlog._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete blog.");
      }

      setBlogs((prev) =>
        prev.filter((blog) => blog._id !== deleteBlog._id)
      );

      setDeleteBlog(null);
    } catch (error) {
      console.error("Delete blog error:", error);
      setError(error.message || "Failed to delete blog.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            Content
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
            Blogs
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Create and manage your portfolio blog posts.
          </p>
        </div>

        <Link
          to="/admin/blogs/add"
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
          Add Blog
        </Link>
      </motion.div>

      {/* Error */}

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Loading */}

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-28 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-800"
            />
          ))}
        </div>
      ) : blogs.length === 0 ? (
        /* Empty */

        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            No blogs yet
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Start publishing your first blog post.
          </p>

          <Link
            to="/admin/blogs/add"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <FaPlus />
            Create Blog
          </Link>
        </div>
      ) : (
        /* Blog List */

        <div className="space-y-4">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog._id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                dark:border-slate-800
                dark:bg-slate-900
              "
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}

                <div className="h-52 shrink-0 bg-slate-100 md:h-auto md:w-64 dark:bg-slate-800">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-slate-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      {blog.category || "General"}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        blog.published
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                          : "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400"
                      }`}
                    >
                      {blog.published ? "Published" : "Draft"}
                    </span>
                  </div>

                  <h2 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                    {blog.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {blog.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/admin/blogs/edit/${blog._id}`}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-200
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-slate-700
                        transition
                        hover:border-blue-500
                        hover:text-blue-600
                        dark:border-slate-700
                        dark:text-slate-300
                        dark:hover:text-blue-400
                      "
                    >
                      <FaPenToSquare />
                      Edit
                    </Link>

                    {blog.published && (
                      <a
                        href={`/blog/${blog.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-slate-200
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          text-slate-700
                          transition
                          hover:border-blue-500
                          hover:text-blue-600
                          dark:border-slate-700
                          dark:text-slate-300
                          dark:hover:text-blue-400
                        "
                      >
                        <FaEye />
                        View
                      </a>
                    )}

                    <button
                      onClick={() => setDeleteBlog(blog)}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-red-200
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-red-600
                        transition
                        hover:bg-red-50
                        dark:border-red-500/20
                        dark:text-red-400
                        dark:hover:bg-red-500/10
                      "
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {/* Delete Modal */}

      {deleteBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Delete Blog?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {deleteBlog.title}
              </span>
              ?
            </p>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={() => setDeleteBlog(null)}
                disabled={deleting}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                disabled={deleting}
                className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
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

export default AdminBlogs;