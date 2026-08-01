import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
      }}
      className="
        group
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        py-4
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-lg
        hover:shadow-blue-100/60
      "
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition group-hover:bg-blue-50">
        <Icon
          className={`text-2xl ${skill.color} transition duration-300 group-hover:scale-110 group-hover:rotate-6`}
        />
      </div>

      <div>
        <h3 className="font-semibold text-slate-900">
          {skill.name}
        </h3>

        <p className="text-xs text-slate-500">
          {skill.description}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillCard;