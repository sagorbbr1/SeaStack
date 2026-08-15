import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./navLinks";
import { useActiveSection } from "../../context/ActiveSectionContext";

const backdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.18 },
  },
};

const drawer = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 30,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const MobileMenu = ({ open, setOpen }) => {
  const { activeSection, setActiveSection } = useActiveSection();
  const location = useLocation();

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavClick = (link) => {
    const isSectionLink = link.href.includes("#");

    if (isSectionLink) {
      const sectionId = link.href.split("#")[1];
      setActiveSection(sectionId);
    }

    handleClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
            className="
              fixed inset-0 z-40
              bg-slate-950/30
              backdrop-blur-sm
              dark:bg-black/50
            "
          />

          {/* Drawer */}
          <motion.aside
            variants={drawer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed right-0 top-0 z-50
              flex h-[100dvh] w-[min(88vw,360px)]
              flex-col
              border-l border-slate-200
              bg-white
              shadow-[-20px_0_60px_rgba(15,23,42,0.12)]

              dark:border-slate-800
              dark:bg-slate-950
              dark:shadow-[-20px_0_60px_rgba(0,0,0,0.4)]
            "
          >
            {/* Header */}
            <div
              className="
                flex items-center justify-between
                border-b border-slate-100
                px-6 py-5
                dark:border-slate-800
              "
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  Menu
                </p>

                <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                  Navigation
                </h3>
              </div>

              <motion.button
                type="button"
                onClick={handleClose}
                whileTap={{ scale: 0.9 }}
                className="
                  grid h-11 w-11 place-items-center
                  rounded-xl
                  text-slate-600
                  transition-colors duration-200
                  hover:bg-slate-100
                  hover:text-slate-900

                  dark:text-slate-300
                  dark:hover:bg-slate-800
                  dark:hover:text-white
                "
                aria-label="Close menu"
              >
                <FiX size={24} />
              </motion.button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-5">
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
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => handleNavClick(link)}
                    className={`
                      group flex items-center justify-between
                      rounded-xl px-4 py-4
                      transition-colors duration-200
                      ${
                        active
                          ? `
                            bg-blue-50
                            font-semibold
                            text-blue-600

                            dark:bg-blue-500/10
                            dark:text-blue-400
                          `
                          : `
                            text-slate-600
                            hover:bg-slate-50
                            hover:text-slate-900

                            dark:text-slate-300
                            dark:hover:bg-slate-900
                            dark:hover:text-white
                          `
                      }
                    `}
                  >
                    <span>{link.name}</span>

                    <motion.span
                      initial={false}
                      animate={{
                        opacity: active ? 1 : 0,
                        x: active ? 0 : -5,
                      }}
                      transition={{ duration: 0.18 }}
                    >
                      <FiArrowRight size={18} />
                    </motion.span>
                  </Link>
                );
              })}
            </nav>

            {/* Footer CTA */}
            <div className="border-t border-slate-100 p-5 dark:border-slate-800">
              <Link
                to="/#contact"
                onClick={() => {
                  setActiveSection("contact");
                  handleClose();
                }}
                className="
                  flex w-full items-center justify-center
                  rounded-xl
                  bg-blue-600
                  px-5 py-3.5
                  font-semibold text-white
                  transition-all duration-200
                  hover:bg-blue-700
                  active:scale-[0.98]
                "
              >
                Let's Talk
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;