import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./navLinks";
import { useActiveSection } from "../../context/ActiveSectionContext";

const DesktopMenu = () => {
  const { activeSection } = useActiveSection();
  const location = useLocation();

  return (
    <motion.div
      initial={false}
      className="hidden items-center gap-2 lg:flex"
    >
      {navLinks.map((item) => {
        const isSectionLink = item.href.includes("#");

        const sectionId = isSectionLink
          ? item.href.split("#")[1]
          : "";

        const active = isSectionLink
          ? location.pathname === "/" && activeSection === sectionId
          : location.pathname === item.href;

        return (
          <Link
            key={item.name}
            to={item.href}
            className={`
              relative rounded-xl px-5 py-3 font-medium
              transition-colors duration-200
              ${
                active
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              }
            `}
          >
            {item.name}

            {active && (
              <>
                <motion.div
                  layoutId="nav-bg"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 28,
                  }}
                  className="
                    absolute inset-0 -z-10
                    rounded-xl
                    bg-blue-50
                    dark:bg-blue-500/10
                  "
                />

                <motion.div
                  layoutId="nav-line"
                  initial={false}
                  transition={{
                    duration: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute bottom-1
                    left-4 right-4
                    h-[3px]
                    rounded-full
                    bg-blue-600
                    dark:bg-blue-400
                  "
                />
              </>
            )}
          </Link>
        );
      })}
    </motion.div>
  );
};

export default DesktopMenu;