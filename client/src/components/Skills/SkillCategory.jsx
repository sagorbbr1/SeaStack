import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillCategory = ({ category }) => {
  return (
    <section className="mb-16">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
        className="mb-8 flex items-center gap-5"
      >
        {/* Left Line */}
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-700" />

        {/* Title */}
        <h3
          className="
            whitespace-nowrap
            rounded-full
            border
            border-blue-200
            bg-blue-50
            px-5
            py-2
            text-sm
            font-bold
            uppercase
            tracking-[0.25em]
            text-blue-600

            dark:border-blue-500/20
            dark:bg-blue-500/10
            dark:text-blue-400
          "
        >
          {category.title}
        </h3>

        {/* Right Line */}
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-700" />
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {category.items.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillCategory;