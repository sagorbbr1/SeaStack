import { motion } from "framer-motion";

const StatCard = ({ value, label }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:shadow-lg

        dark:border-slate-700
        dark:bg-slate-900
        dark:hover:border-blue-500
        dark:hover:shadow-slate-900/30
      "
    >
      <h3
        className="
          text-3xl
          font-bold
          text-slate-900

          dark:text-white
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-2
          text-sm
          text-slate-600

          dark:text-slate-400
        "
      >
        {label}
      </p>
    </motion.div>
  );
};

export default StatCard;