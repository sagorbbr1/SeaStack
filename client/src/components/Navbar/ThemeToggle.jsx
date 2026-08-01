import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.92 }}
      className="
        relative
        flex h-11 w-11 items-center justify-center
        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-white
        text-slate-700
        shadow-sm
        transition-all
        duration-300

        hover:border-blue-500
        hover:shadow-lg
        hover:shadow-blue-500/20

        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-200
        dark:hover:border-blue-400
        dark:hover:shadow-blue-500/10
      "
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0
          opacity-0
          transition-opacity
          duration-300
          hover:opacity-100
          bg-gradient-to-br
          from-blue-500/10
          to-cyan-400/10
        "
      />

      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            key="moon"
            initial={{
              rotate: -90,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              rotate: 0,
              scale: 1,
              opacity: 1,
            }}
            exit={{
              rotate: 90,
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative"
          >
            <FiMoon size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{
              rotate: 90,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              rotate: 0,
              scale: 1,
              opacity: 1,
            }}
            exit={{
              rotate: -90,
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative text-yellow-400"
          >
            <FiSun size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;