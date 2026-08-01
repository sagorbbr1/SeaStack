import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.45,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,.12)]"
    >
      {/* Background Glow */}

      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100"
      >
        <Icon className={`text-3xl ${skill.color}`} />
      </motion.div>

      {/* Content */}

      <div className="mt-6">

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-semibold text-slate-900">
            {skill.name}
          </h3>

          <FiArrowUpRight className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

        </div>

        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          Building fast, scalable and maintainable applications using{" "}
          {skill.name}.
        </p>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Experience
          </span>

          <span className="text-sm font-semibold text-blue-600">
            Advanced
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-100">

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "92%",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: index * 0.1,
            }}
            className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400"
          />

        </div>

      </div>
    </motion.div>
  );
};

export default SkillCard;