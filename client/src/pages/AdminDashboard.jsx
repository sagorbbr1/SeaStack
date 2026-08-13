import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaArrowRight,
  FaChartLine,
  FaArrowUpRightFromSquare,
  FaEnvelopeOpen,
  FaReply,
} from "react-icons/fa6";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    unread: 0,
    read: 0,
    replied: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const response = await fetch(`${API}/contact/stats`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Failed to fetch statistics.");
        }

        setStats(result.data);
      } catch (error) {
        console.error("Dashboard stats error:", error);
        setError("Failed to load dashboard statistics.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          Overview
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Manage your portfolio and keep track of incoming inquiries.
        </p>
      </motion.div>

      {/* Error */}

      {error && (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Stats */}

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total */}

        <StatCard
          icon={<FaEnvelope />}
          label="Total Messages"
          value={stats.total}
          loading={loading}
          iconClass="bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
          delay={0.1}
        />

        {/* Unread */}

        <StatCard
          icon={<FaEnvelopeOpen />}
          label="Unread Messages"
          value={stats.unread}
          loading={loading}
          iconClass="bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400"
          delay={0.2}
        />

        {/* Read */}

        <StatCard
          icon={<FaChartLine />}
          label="Read Messages"
          value={stats.read}
          loading={loading}
          iconClass="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
          delay={0.3}
        />

        {/* Replied */}

        <StatCard
          icon={<FaReply />}
          label="Replied Messages"
          value={stats.replied}
          loading={loading}
          iconClass="bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400"
          delay={0.4}
        />
      </div>

      {/* Quick Access */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8"
      >
        <div className="mb-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Quickly access the most important areas.
          </p>
        </div>

        <Link
          to="/admin/messages"
          className="
            group
            flex
            items-center
            justify-between
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-blue-500
            hover:shadow-xl
            hover:shadow-blue-500/10

            dark:border-slate-800
            dark:bg-slate-900
            dark:hover:border-blue-500
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-blue-100
                text-blue-600

                dark:bg-blue-500/10
                dark:text-blue-400
              "
            >
              <FaEnvelope />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                View Messages
              </h3>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {stats.unread > 0
                  ? `You have ${stats.unread} unread ${
                      stats.unread === 1 ? "message" : "messages"
                    }.`
                  : "No unread messages right now."}
              </p>
            </div>
          </div>

          <FaArrowRight
            className="
              text-slate-400
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:text-blue-500
            "
          />
        </Link>
      </motion.section>

      {/* Portfolio */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="
          mt-8
          rounded-3xl
          border
          border-blue-100
          bg-gradient-to-r
          from-blue-50
          to-cyan-50
          p-6

          dark:border-blue-500/10
          dark:from-blue-500/5
          dark:to-cyan-500/5
        "
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Your portfolio is ready.
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Incoming contact requests will appear in your Messages inbox.
            </p>
          </div>

          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-slate-900
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:-translate-y-0.5
              hover:bg-blue-600

              dark:bg-white
              dark:text-slate-900
              dark:hover:bg-blue-400
            "
          >
            Open Website
            <FaArrowUpRightFromSquare size={12} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const StatCard = ({
  icon,
  label,
  value,
  loading,
  iconClass,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg

        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div
        className={`
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          ${iconClass}
        `}
      >
        {icon}
      </div>

      <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
        {label}
      </p>

      {loading ? (
        <div className="mt-2 h-9 w-16 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
      ) : (
        <h2 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
          {value}
        </h2>
      )}
    </motion.div>
  );
};

export default AdminDashboard;