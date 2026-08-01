import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillCategory = ({ category }) => {
  return (
    <section className="mb-14">

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
        className="mb-6 flex items-center gap-4"
      >
        <div className="h-px flex-1 bg-slate-200" />

        <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-blue-600">
          {category.title}
        </h3>

        <div className="h-px flex-1 bg-slate-200" />
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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