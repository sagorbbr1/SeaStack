import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";

import profile from "../../assets/images/profile.jpg";

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto w-full max-w-[430px]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-indigo-400/20 blur-3xl" />

      {/* Browser Card */}
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,.12)]">
        {/* Browser Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <p className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
            portfolio.dev
          </p>
        </div>

        {/* Image */}
        <div className="relative p-5">
          <img
            src={profile}
            alt="Sagor"
            className="h-[520px] w-full rounded-3xl object-cover"
          />

          {/* Available Badge */}
          <div className="absolute bottom-10 left-10 flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-xl">
            <HiOutlineStatusOnline className="text-green-500" />

            <span className="text-sm font-medium text-slate-700">
              Available for Work
            </span>
          </div>
        </div>
      </div>

      {/* Floating React */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -left-8 top-24 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-xl"
      >
        <FaReact className="text-4xl text-sky-500" />
      </motion.div>

      {/* Floating Node */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute -right-8 bottom-24 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-xl"
      >
        <FaNodeJs className="text-4xl text-green-600" />
      </motion.div>
    </motion.div>
  );
};

export default HeroCard;