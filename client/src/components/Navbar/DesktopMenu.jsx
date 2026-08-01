import { motion } from "framer-motion";
import { navLinks } from "./navLinks";
import { useActiveSection } from "../../context/ActiveSectionContext";

const DesktopMenu = () => {
  const { activeSection } = useActiveSection();

  return (
    <div className="hidden items-center gap-2 lg:flex">
      {navLinks.map((item) => {
        const active = activeSection === item.href.replace("#", "");

        return (
          <a
            key={item.name}
            href={item.href}
            className={`relative px-5 py-3 rounded-xl font-medium transition
              ${
                active
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
          >
            {item.name}

            {active && (
              <>
                <motion.div
                  layoutId="nav-bg"
                  className="absolute inset-0 -z-10 rounded-xl bg-blue-50"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />

                <motion.div
                  layoutId="nav-line"
                  className="absolute bottom-1 left-4 right-4 h-[3px] rounded-full bg-blue-600"
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