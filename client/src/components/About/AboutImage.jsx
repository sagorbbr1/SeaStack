import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import StatCard from "../ui/StatCard";
import {stats} from "./aboutData"

import profile from "../../assets/images/profile.jpg"; // change your image path

const AboutImage = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-wrap justify-center gap-4">
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      {/* Background Glow */}
      <div className="absolute -left-8 top-12 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Image Card */}
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-xl">
        <img
          src={profile}
          alt="Sagor"
          className="h-[520px] w-[420px] rounded-[24px] object-cover"
        />
      </div>

      {/* Floating Card */}
      <div className="absolute -bottom-8 -right-6">
        <ExperienceCard />
      </div>

    </motion.div>
    
           <motion.div className="mt-12 grid grid-cols-2 gap-5">
        {stats.map((item) => (
          <StatCard
            key={item.label}
            value={item.value}
            label={item.label}
          />
        ))}
      </motion.div>
      </div>
      </div>

  );
};

export default AboutImage;