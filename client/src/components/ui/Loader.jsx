import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="
            fixed inset-0 z-[99999]
            flex items-center justify-center
            bg-[#EEF1F5]
            dark:bg-slate-950
          "
        >
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  scaleY: [0.45, 1.4, 0.45],
                  opacity: [0.35, 1, 0.35],
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-8 w-1.5
                  origin-center
                  rounded-full
                  bg-slate-900
                  dark:bg-white
                "
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;