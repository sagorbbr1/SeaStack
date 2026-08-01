import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiX } from "react-icons/fi";
import { navLinks } from "./navLinks";
import { useActiveSection } from "../../context/ActiveSectionContext";

const backdrop = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const drawer = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 340,
      damping: 32,
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.28,
    },
  },
};

const MobileMenu = ({ open, setOpen }) => {
  const { activeSection } = useActiveSection();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm dark:bg-black/60"
          />

          {/* Drawer */}

          <motion.aside
            variants={drawer}
            initial="hidden"
            animate="show"
            exit="exit"
            className="
              fixed right-0 top-0 z-50
              flex h-screen w-[320px] flex-col overflow-hidden

              border-l border-slate-200
              bg-white/95
              backdrop-blur-xl
              shadow-[0_20px_80px_rgba(15,23,42,.15)]

              dark:border-slate-800
              dark:bg-slate-950/95
              dark:shadow-[0_20px_80px_rgba(0,0,0,.5)]
            "
          >
            {/* Glow */}

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl dark:bg-blue-500/10" />

            {/* Header */}

            <div className="relative flex items-center justify-between border-b border-slate-200 px-6 py-6 dark:border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Navigation
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Explore Portfolio
                </p>
              </div>

              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                }}
                onClick={() => setOpen(false)}
                className="
                  rounded-xl
                  border border-slate-200
                  p-2
                  text-slate-700
                  transition-all

                  hover:bg-slate-100

                  dark:border-slate-700
                  dark:text-slate-200
                  dark:hover:bg-slate-800
                "
              >
                <FiX size={22} />
              </motion.button>
            </div>

            {/* Links */}

            <div className="relative flex-1 px-5 py-8">
              {navLinks.map((link) => {
                const active =
                  activeSection === link.href.replace("#", "");

                return (
                  <motion.a
                    key={link.name}
                    variants={item}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group mb-2 flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 ${
                      active
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                    }`}
                  >
                    <span className="font-medium">
                      {link.name}
                    </span>

                    <motion.div
                      animate={{
                        x: active ? 0 : -4,
                        opacity: active ? 1 : 0,
                      }}
                    >
                      <FiArrowRight />
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>

            {/* Footer */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
              }}
              className="
                m-5
                rounded-3xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                p-5
                text-white
                shadow-xl
                shadow-blue-500/20

                dark:shadow-blue-900/30
              "
            >
              <h4 className="text-center font-semibold">
                Let's Build Together 🚀
              </h4>

              <p className="mt-2 text-center text-sm text-blue-100">
                Available for freelance & full-stack projects.
              </p>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;