import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft, FaCalendar, FaTag } from "react-icons/fa6";

const API = import.meta.env.VITE_API_URL;

const SingleBlog = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API}/blogs/slug/${slug}`
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Blog not found.");
        }

        setBlog(result.data);
      } catch (error) {
        console.error("Fetch single blog error:", error);
        setError(error.message || "Failed to load blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  // Loading
  if (loading) {
    return (
      <main className="min-h-screen bg-white px-6 py-32 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl animate-pulse">
          <div className="h-5 w-24 rounded bg-slate-200 dark:bg-slate-800" />

          <div className="mt-6 h-12 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />

          <div className="mt-4 h-5 w-1/2 rounded bg-slate-200 dark:bg-slate-800" />

          <div className="mt-10 aspect-video rounded-3xl bg-slate-200 dark:bg-slate-800" />

          <div className="mt-10 space-y-4">
            <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      </main>
    );
  }

  // 404
  if (error || !blog) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 dark:bg-slate-950">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            404
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            Blog not found
          </h1>

          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            The article you're looking for doesn't exist or is no longer
            published.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <FaArrowLeft size={12} />
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const description =
    blog.excerpt ||
    blog.content?.replace(/<[^>]*>/g, "").slice(0, 160);

  return (
    <>
      <Helmet>
        <title>{blog.title} | Sagor</title>

        <meta
          name="description"
          content={description}
        />

        <meta
          property="og:title"
          content={blog.title}
        />

        <meta
          property="og:description"
          content={description}
        />

        {blog.image && (
          <meta
            property="og:image"
            content={blog.image}
          />
        )}

        <meta
          property="og:type"
          content="article"
        />
      </Helmet>

      <main className="min-h-screen bg-white dark:bg-slate-950">
        {/* Hero */}

        <section className="relative overflow-hidden px-6 pb-12 pt-32">
          {/* Glow */}

          <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />

          <div className="absolute -right-40 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/5" />

          <div className="relative mx-auto max-w-4xl">
            <Link
              to="/#blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3 dark:text-blue-400"
            >
              <FaArrowLeft size={12} />
              Back to Blog
            </Link>

            {/* Category */}

            <div className="mt-8">
              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                {blog.category || "General"}
              </span>
            </div>

            {/* Title */}

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              {blog.title}
            </h1>

            {/* Excerpt */}

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-500 dark:text-slate-400">
              {blog.excerpt}
            </p>

            {/* Meta */}

            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <FaCalendar />
                {new Date(blog.createdAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </span>

              {blog.tags?.length > 0 && (
                <span className="inline-flex items-center gap-2">
                  <FaTag />

                  {blog.tags.join(" • ")}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image */}

        {blog.image && (
          <section className="px-6">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="max-h-[600px] w-full object-cover"
              />
            </div>
          </section>
        )}

        {/* Content */}

       
<article className="px-6 py-14 sm:py-20 overflow-hidden">
  <div
    style={{
      width: "100%",
      maxWidth: "768px",
      margin: "0 auto",
    }}
  >
    <div
      className="blog-content prose prose-slate dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{
        __html: blog.content,
      }}
    />
  </div>
</article>

        {/* Bottom */}

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-3xl border-t border-slate-200 pt-8 dark:border-slate-800">
            <Link
              to="/#blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
            >
              <FaArrowLeft size={12} />
              Back to all articles
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default SingleBlog;