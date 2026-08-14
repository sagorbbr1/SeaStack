import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const API = import.meta.env.VITE_API_URL;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API}/blogs`);
        const result = await response.json();

        if (response.ok) {
          setBlogs(result.data || []);
        }
      } catch (error) {
        console.error("Fetch blogs error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-white py-24 dark:bg-slate-950"
    >
      {/* Background glow */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />

      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/5" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            My Blog
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Thoughts & Insights
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
            I write about web development, MERN stack, JavaScript,
            projects, and things I learn along the way.
          </p>
        </div>

        {/* Loading */}

        {loading && (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[400px] animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800"
              />
            ))}
          </div>
        )}

        {/* Empty */}

        {!loading && blogs.length === 0 && (
          <div className="mt-14 rounded-3xl border border-dashed border-slate-300 px-6 py-16 text-center dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400">
              No blog posts published yet.
            </p>
          </div>
        )}

        {/* Blogs */}

        {!loading && blogs.length > 0 && (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog._id}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500/40
                  hover:shadow-xl
                  hover:shadow-blue-500/10
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                {/* Image */}

                <Link to={`/blog/${blog.slug}`}>
                  <div className="aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-slate-400">
                        No Image
                      </div>
                    )}
                  </div>
                </Link>

                {/* Content */}

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      {blog.category || "General"}
                    </span>

                    <span className="text-xs text-slate-400">
                      {new Date(blog.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>

                  <Link to={`/blog/${blog.slug}`}>
                    <h3 className="mt-4 line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {blog.excerpt}
                  </p>

                  <Link
                    to={`/blog/${blog.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition dark:text-blue-400"
                  >
                    Read Article
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;