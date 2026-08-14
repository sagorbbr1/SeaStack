import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";

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
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#EEF1F5]"
        >
          <motion.div
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotateY: {
                duration: 1.8,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <FaGlobe className="text-5xl text-slate-800" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;