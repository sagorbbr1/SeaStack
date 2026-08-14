import { useState } from "react";
import { motion } from "framer-motion";
import { FaLock, FaArrowRight } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const AdminLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const { data } = await axios.post(
        `${API}/auth/login`,
        form
      );

      if (data.success) {
        localStorage.setItem("adminToken", data.token);

        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
          "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6 dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-xl

          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        {/* Icon */}

        <div className="mb-6 flex justify-center">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-blue-600
              text-white
              shadow-lg
              shadow-blue-500/30
            "
          >
            <FaLock size={22} />
          </div>
        </div>

        {/* Heading */}

        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Sign in to manage your portfolio.
          </p>
        </div>

        {/* Error */}

        {error && (
          <div
            className="
              mt-6
              rounded-xl
              bg-red-100
              px-4
              py-3
              text-sm
              font-medium
              text-red-700

              dark:bg-red-500/10
              dark:text-red-400
            "
          >
            {error}
          </div>
        )}

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="admin@example.com"
              required
              autoComplete="email"
              className="
                h-13
                w-full
                rounded-xl
                border
                border-slate-300
                bg-transparent
                px-4
                text-slate-900
                outline-none
                transition
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/10

                dark:border-slate-700
                dark:text-white
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              autoComplete="current-password"
              className="
                h-13
                w-full
                rounded-xl
                border
                border-slate-300
                bg-transparent
                px-4
                text-slate-900
                outline-none
                transition
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/10

                dark:border-slate-700
                dark:text-white
              "
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={!loading ? { scale: 1.02 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              py-4
              font-semibold
              text-white
              shadow-lg
              transition
              hover:shadow-blue-500/30
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >
            {loading ? (
              "Signing in..."
            ) : (
              <>
                Sign In
                <FaArrowRight />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;