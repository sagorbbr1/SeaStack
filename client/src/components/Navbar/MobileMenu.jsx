import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./navLinks";
import { useActiveSection } from "../../context/ActiveSectionContext";

const backdrop = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
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
      stiffness: 220,
      damping: 28,
      mass: 0.9,
      when: "beforeChildren",
      delayChildren: 0.08,
      staggerChildren: 0.04,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: 12,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const footer = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const MobileMenu = ({ open, setOpen }) => {
  const { activeSection } = useActiveSection();
  const location = useLocation();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={handleClose}
            className="
              fixed inset-0 z-40
              bg-slate-950/35
              backdrop-blur-[2px]
              dark:bg-black/55
            "
          />

          {/* Drawer */}
          <motion.aside
            variants={drawer}
            initial="hidden"
            animate="show"
            exit="exit"
            className="
              fixed right-0 top-0 z-50
              flex h-[100dvh] w-[min(88vw,340px)] flex-col
              overflow-hidden
              border-l border-slate-200/80
              bg-white/95
              shadow-[-20px_0_60px_rgba(15,23,42,0.12)]
              backdrop-blur-2xl

              dark:border-slate-800
              dark:bg-slate-950/95
              dark:shadow-[-20px_0_60px_rgba(0,0,0,0.35)]
            "
          >
            {/* Subtle Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />

            {/* Header */}
            <div className="relative flex items-center justify-between border-b border-slate-200/80 px-6 py-6 dark:border-slate-800">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                  Navigation
                </h3>

                <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                  Explore Portfolio
                </p>
              </div>

              <motion.button
                type="button"
                onClick={handleClose}
                whileHover={{
                  scale: 1.04,
                  rotate: 90,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  rounded-xl border border-slate-200 p-2
                  text-slate-700
                  transition-colors duration-200
                  hover:bg-slate-100

                  dark:border-slate-700
                  dark:text-slate-200
                  dark:hover:bg-slate-800
                "
                aria-label="Close menu"
              >
                <FiX size={22} />
              </motion.button>
            </div>

            {/* Links */}
            <div className="relative flex-1 px-5 py-7">
              {navLinks.map((link) => {
                const isSectionLink = link.href.includes("#");

                const sectionId = isSectionLink
                  ? link.href.split("#")[1]
                  : "";

                const active = isSectionLink
                  ? location.pathname === "/" &&
                    activeSection === sectionId
                  : location.pathname === link.href;

                return (
                  <motion.div
                    key={link.name}
                    variants={item}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                  >
                    <Link
                      to={link.href}
                      onClick={handleClose}
                      className={`
                        group mb-2 flex items-center justify-between
                        rounded-2xl px-5 py-4
                        transition-colors duration-200
                        ${
                          active
                            ? `
                              bg-blue-50
                              text-blue-600
                              dark:bg-blue-500/10
                              dark:text-blue-400
                            `
                            : `
                              text-slate-700
                              hover:bg-slate-100
                              dark:text-slate-300
                              dark:hover:bg-slate-800
                              dark:hover:text-white
                            `
                        }
                      `}
                    >
                      <span className="font-medium">
                        {link.name}
                      </span>

                      <motion.div
                        initial={false}
                        animate={{
                          x: active ? 0 : -6,
                          opacity: active ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                      >
                        <FiArrowRight />
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer */}
            <motion.div
              variants={footer}
              initial="hidden"
              animate="show"
              className="
                m-5 mt-auto rounded-3xl
                bg-gradient-to-r from-blue-600 to-cyan-500
                p-5 text-white
                shadow-lg shadow-blue-500/20
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