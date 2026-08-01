import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillCategory = ({ category, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
      className="mb-20"
    >
      {/* Category Header */}

      <div className="mb-10 flex items-center gap-4">

        <div className="h-px flex-1 bg-slate-200" />

        <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          {category.title}
        </span>

        <div className="h-px flex-1 bg-slate-200" />

      </div>

      {/* Skills Grid */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {category.items.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;