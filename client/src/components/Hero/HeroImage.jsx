import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi";

import FloatingCard from "./FloatingCard";
import profile from "../../assets/images/profile.jpg";

const HeroImage = () => {
  return (
    <div className="relative mx-auto flex h-[500px] w-full max-w-[520px] items-center justify-center">

      {/* Glow */}
      <div className="absolute h-[380px] w-[380px] rounded-full bg-sky-400/20 blur-3xl" />

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-20"
      >
        <div className="rounded-full bg-gradient-to-br from-sky-500 to-blue-600 p-2">
          <img
            src={profile}
            alt="Sagor"
            className="h-72 w-72 rounded-full border-4 border-white object-cover shadow-2xl md:h-96 md:w-96"
          />
        </div>
      </motion.div>

      {/* Cards */}
      <FloatingCard
        icon={<FaReact />}
        title="React"
        subtitle="Frontend"
        className="top-10 left-0 md:left-4"
      />

      <FloatingCard
        icon={<FaNodeJs />}
        title="Node.js"
        subtitle="Backend"
        className="top-16 right-0 md:right-4"
      />

      <FloatingCard
        icon={<SiMongodb />}
        title="MongoDB"
        subtitle="Database"
        className="bottom-14 left-2 md:left-8"
      />

      <FloatingCard
        icon={<HiOutlineSparkles />}
        title="2+ Years"
        subtitle="Experience"
        className="bottom-10 right-0 md:right-2"
      />
    </div>
  );
};

export default HeroImage;