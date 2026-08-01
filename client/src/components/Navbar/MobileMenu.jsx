import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiX } from "react-icons/fi";
import {navLinks }from "./navLinks";
import { useActiveSection } from "../../context/ActiveSectionContext";

const backdrop = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
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
            className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm"
          />

          {/* Drawer */}

          <motion.aside
            variants={drawer}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col overflow-hidden border-l border-white/10 bg-white/95 backdrop-blur-xl shadow-[0_20px_80px_rgba(15,23,42,.15)]"
          >
            {/* Glow */}

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Header */}

            <div className="relative flex items-center justify-between border-b border-slate-200 px-6 py-6">

              <div>

                <h3 className="text-lg font-bold text-slate-900">
                  Navigation
                </h3>

                <p className="text-sm text-slate-500">
                  Explore Portfolio
                </p>

              </div>

              <motion.button
                whileHover={{
                  rotate: 90,
                }}
                whileTap={{
                  scale: .9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                }}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-200 p-2"
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
                    whileHover={{
                      x: 6,
                    }}
                    whileTap={{
                      scale: .98,
                    }}
                    className={`group mb-2 flex items-center justify-between rounded-2xl px-5 py-4 transition-all
                      ${
                        active
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700 hover:bg-slate-100"
                      }
                    `}
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
                delay: .35,
              }}
              className="m-5 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white"
            >
              <h4 className="font-semibold text-center">
                Let's Build Together 🚀
              </h4>

            
    
            </motion.div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;