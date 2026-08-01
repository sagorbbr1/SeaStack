import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#020617]"
        >
          {/* Soft Background Glow */}

          <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[180px]" />

          {/* Content */}

          <div className="relative text-center">

            {/* Logo */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-5xl font-bold tracking-[0.18em] text-white"
            >
              Sagor
            </motion.h1>

            {/* Subtitle */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: .2,
              }}
              className="mt-5 text-xs uppercase tracking-[0.35em] text-slate-500"
            >
              Building Digital Experiences
            </motion.p>

            {/* Line */}

            <div className="mx-auto mt-8 h-[2px] w-52 overflow-hidden rounded-full bg-slate-800">

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
              />

            </div>

            {/* Loading */}

            <motion.p
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
              }}
              className="mt-5 text-[11px] tracking-[0.3em] uppercase text-slate-600"
            >
              Loading...
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;