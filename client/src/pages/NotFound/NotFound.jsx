import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaHouse,
} from "react-icons/fa6";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 dark:bg-slate-950">
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[120px]
          dark:bg-cyan-500/10
        "
      />

      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* 404 */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1
            className="
              select-none
              text-[clamp(7rem,25vw,15rem)]
              font-black
              leading-none
              tracking-[-0.08em]
              text-transparent
              bg-clip-text
              bg-gradient-to-br
              from-blue-600
              via-sky-500
              to-cyan-400
              dark:from-blue-500
              dark:via-cyan-400
              dark:to-teal-300
            "
          >
            404
          </h1>
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Page not found
          </h2>

          <p className="mx-auto mt-4 max-w-md leading-7 text-slate-600 dark:text-slate-400">
            Looks like this page took a wrong turn.
            The page you're looking for doesn't exist
            or may have been moved.
          </p>
        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
        >
          {/* Home */}

          <Link
            to="/"
            className="
              group
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-6
              py-3.5
              font-semibold
              text-white
              shadow-lg
              shadow-blue-500/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-blue-500/30
            "
          >
            <FaHouse
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            Back to Home
          </Link>

          {/* Go Back */}

          <button
            onClick={() => window.history.back()}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-slate-300
              bg-white
              px-6
              py-3.5
              font-semibold
              text-slate-700
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-slate-400
              hover:bg-slate-100

              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-300
              dark:hover:border-slate-600
              dark:hover:bg-slate-800
            "
          >
            <FaArrowLeft />

            Go Back
          </button>
        </motion.div>

        {/* Small footer */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="mt-12 text-xs tracking-wide text-slate-400"
        >
          SAGOR<span className="text-blue-500">.</span>
        </motion.p>
      </div>
    </main>
  );
};

export default NotFound;