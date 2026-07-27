import { motion } from "framer-motion";

const StatCard = ({ value, label }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg"
    >
      <h3 className="text-3xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {label}
      </p>
    </motion.div>
  );
};

export default StatCard;