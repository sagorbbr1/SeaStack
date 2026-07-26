import { motion } from "framer-motion";

const FloatingCard = ({ icon, title, subtitle, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-30 ${className}`}
    >
      <div className="flex items-center gap-3 rounded-xl border border-white/50 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-md">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500 text-lg text-white">
          {icon}
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-800">
            {title}
          </h4>
          <p className="text-xs text-slate-500">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingCard;