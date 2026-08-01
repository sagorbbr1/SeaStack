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
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300

        hover:border-blue-500
        hover:shadow-2xl

        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:border-blue-500
        dark:hover:shadow-blue-500/10
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-blue-500/0
          via-cyan-500/0
          to-blue-500/5
          opacity-0
          transition duration-500
          group-hover:opacity-100

          dark:to-blue-500/10
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          flex h-14 w-14
          items-center justify-center
          rounded-2xl

          bg-blue-50
          text-blue-600

          dark:bg-blue-500/10
          dark:text-blue-400
        "
      >
        <Icon size={24} />
      </div>

      {/* Year */}
      <span
        className="
          relative
          mt-6
          inline-block
          rounded-full
          bg-slate-100
          px-3
          py-1
          text-xs
          font-semibold
          text-slate-600

          dark:bg-slate-800
          dark:text-slate-300
        "
      >
        {item.year}
      </span>

      {/* Title */}
      <h4
        className="
          relative
          mt-4
          text-xl
          font-bold
          text-slate-900

          dark:text-white
        "
      >
        {item.title}
      </h4>

      {/* Description */}
      <p
        className="
          relative
          mt-3
          leading-7
          text-slate-600

          dark:text-slate-400
        "
      >
        {item.description}
      </p>
    </motion.div>
  );
};

export default JourneyCard;