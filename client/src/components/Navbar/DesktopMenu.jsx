import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./navLinks";
import { useActiveSection } from "../../context/ActiveSectionContext";

const DesktopMenu = () => {
  const { activeSection, setActiveSection } = useActiveSection();
  const location = useLocation();

  const handleNavClick = (item) => {
    if (item.href.includes("#")) {
      const sectionId = item.href.split("#")[1];
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {navLinks.map((item) => {
        const isSectionLink = item.href.includes("#");

        const sectionId = isSectionLink
          ? item.href.split("#")[1]
          : "";

        const active = isSectionLink
          ? location.pathname === "/" &&
            activeSection === sectionId
          : location.pathname === item.href;

        return (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => handleNavClick(item)}
            className={`
              relative isolate px-5 py-3
              text-[15px] font-medium
              transition-colors duration-200
              ${
                active
                  ? "text-blue-600 dark:text-blue-400"
                  : `
                    text-slate-600
                    hover:text-slate-900
                    dark:text-slate-300
                    dark:hover:text-white
                  `
              }
            `}
          >
            {/* One smooth moving indicator */}
            {active && (
              <motion.span
                layoutId="active-nav-item"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                  mass: 0.8,
                }}
                className="
                  absolute inset-0 -z-10
                  rounded-xl
                  bg-slate-100/80
                  dark:bg-white/[0.07]
                "
              />
            )}

            <span className="relative z-10">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default DesktopMenu;