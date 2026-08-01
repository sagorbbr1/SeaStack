import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        py-4
        shadow-sm
        transition-all
        duration-300

        hover:border-blue-500
        hover:shadow-xl
        hover:shadow-blue-500/10

        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:border-blue-500
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100

          bg-gradient-to-r
          from-blue-500/5
          via-cyan-500/10
          to-blue-500/5

          dark:from-blue-500/10
          dark:via-cyan-500/15
          dark:to-blue-500/10
        "
      />

      {/* Icon */}
      <div
        className="
          relative z-10
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl

          bg-slate-100

          transition-all
          duration-300

          group-hover:bg-blue-50

          dark:bg-slate-800
          dark:group-hover:bg-blue-500/10
        "
      >
        <Icon
          className={`
            text-2xl
            ${skill.color}
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-6
          `}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-semibold text-slate-900 dark:text-white">
          {skill.name}
        </h3>

        {skill.description && (
          <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
            {skill.description}
          </p>
        )}
      </div>

      {/* Right Accent */}
      <div
        className="
          absolute
          right-0
          top-0
          h-full
          w-1

          scale-y-0
          rounded-full
          bg-gradient-to-b
          from-blue-500
          to-cyan-400

          transition-transform
          duration-300

          group-hover:scale-y-100
        "
      />
    </motion.div>
  );
};

export default SkillCard;