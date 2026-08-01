import { FaCode } from "react-icons/fa6";

const ExperienceCard = () => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        w-60
        rounded-3xl
        border border-slate-200
        bg-white/90
        p-5
        shadow-xl
        backdrop-blur
        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
        hover:shadow-blue-500/10

        dark:border-slate-700
        dark:bg-slate-900/90
        dark:hover:border-blue-500
      "
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-br
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
          mb-4
          flex h-12 w-12
          items-center justify-center
          rounded-2xl
          bg-blue-100
          dark:bg-blue-500/10
        "
      >
        <FaCode className="text-xl text-blue-600 dark:text-blue-400" />
      </div>

      {/* Number */}
      <h3 className="relative z-10 text-3xl font-bold text-slate-900 dark:text-white">
        2+
      </h3>

      {/* Text */}
      <p className="relative z-10 mt-1 text-slate-600 dark:text-slate-400">
        Years of Learning
      </p>

      {/* Progress */}
      <div className="relative z-10 mt-5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
      </div>
    </div>
  );
};

export default ExperienceCard;