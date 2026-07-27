import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-50 overflow-hidden">

      {/* Main Background */}
      <div className="absolute inset-0 bg-[#F8FAFC]" />

      {/* Grid Pattern */}
      <div
        className="
          absolute inset-0
          opacity-[0.35]
          [background-image:linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]
          [background-size:45px_45px]
        "
      />

      {/* Top Left Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-32
          -left-24
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-500/20
          blur-[120px]
        "
      />

      {/* Bottom Right Glow */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -right-24
          h-[480px]
          w-[480px]
          rounded-full
          bg-cyan-400/20
          blur-[140px]
        "
      />

      {/* Center Gradient Blob */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[340px]
          w-[340px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gradient-to-r
          from-blue-400/20
          via-cyan-300/20
          to-sky-300/20
          blur-[90px]
        "
      />

      {/* Floating Dot */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          top-40
          right-1/4
          h-6
          w-6
          rounded-full
          bg-blue-500
          opacity-40
        "
      />

      {/* Floating Ring */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          bottom-32
          left-20
          h-24
          w-24
          rounded-full
          border
          border-blue-300/40
        "
      />

      {/* Small Glow */}
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          right-32
          top-24
          h-20
          w-20
          rounded-full
          bg-cyan-300/40
          blur-3xl
        "
      />

    </div>
  );
};

export default HeroBackground;