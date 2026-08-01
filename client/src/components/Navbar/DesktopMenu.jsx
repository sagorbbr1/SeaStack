import { motion } from "framer-motion";
import { navLinks } from "./navLinks";
import { useActiveSection } from "../../context/ActiveSectionContext";

const DesktopMenu = () => {
  const { activeSection } = useActiveSection();

  return (
    <div className="hidden items-center gap-2 lg:flex">
      {navLinks.map((item) => {
        const active =
          activeSection === item.href.replace("#", "");

        return (
          <a
            key={item.name}
            href={item.href}
            className={`
              relative
              rounded-xl
              px-5
              py-3
              font-medium
              transition-all
              duration-300

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
                {/* Background */}
                <motion.div
                  layoutId="nav-bg"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  className="
                    absolute
                    inset-0
                    -z-10
                    rounded-xl
                    bg-blue-50

                    dark:bg-blue-500/10
                  "
                />

                {/* Bottom Line */}
                <motion.div
                  layoutId="nav-line"
                  className="
                    absolute
                    bottom-1
                    left-4
                    right-4
                    h-[3px]
                    rounded-full
                    bg-blue-600

                    dark:bg-blue-400
                  "
                />
              </>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default DesktopMenu;