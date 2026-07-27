import { motion } from "framer-motion";

const JourneyCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-2xl"
    >
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        <Icon size={24} />
      </div>

      {/* Year */}
      <span className="mt-6 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
        {item.year}
      </span>

      {/* Title */}
      <h4 className="mt-4 text-xl font-bold text-slate-900">
        {item.title}
      </h4>

      {/* Description */}
      <p className="mt-3 leading-7 text-slate-600">
        {item.description}
      </p>
    </motion.div>
  );
};

export default JourneyCard;