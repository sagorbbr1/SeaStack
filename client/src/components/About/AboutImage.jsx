import { motion } from "framer-motion";
import {
  HiMapPin,
  HiSignal,
} from "react-icons/hi2";

import profile from "../../assets/images/about.jpg";
import CurrentFocus from "./CurrentFocus";
import TechArsenal from "./TechArsenal";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0 rounded-[40px]
          bg-gradient-to-br
          from-blue-500/10
          via-cyan-500/10
          to-indigo-500/10
          blur-3xl
          dark:from-blue-500/5
          dark:via-cyan-500/5
          dark:to-indigo-500/5
        "
      />

      {/* Card */}
      <div
        className="
          relative overflow-hidden
          rounded-[32px]
          border border-slate-200
          bg-white
          p-5
          shadow-xl

          dark:border-slate-800
          dark:bg-slate-900
          dark:shadow-black/30
        "
      >
        <img
          src={profile}
          alt="Sagor"
          className="h-[520px] w-full rounded-3xl object-cover"
        />

        <div className="mt-6 space-y-3">
          <div
            className="
              flex items-center gap-3
              rounded-xl
              bg-slate-50
              p-3

              dark:bg-slate-800
            "
          >
            <HiSignal className="text-xl text-green-500" />

            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Open to Work
            </span>
          </div>

          <div
            className="
              flex items-center gap-3
              rounded-xl
              bg-slate-50
              p-3

              dark:bg-slate-800
            "
          >
            <HiMapPin className="text-xl text-blue-500" />

            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Rajshahi, Bangladesh
            </span>
          </div>
        </div>
      </div>

      {/* Tech */}
      <div className="mt-12">
        <TechArsenal />
      </div>

      {/* Current Focus */}
      <div className="mt-12">
        <CurrentFocus />
      </div>
    </motion.div>
  );
};

export default AboutImage;