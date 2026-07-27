import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import {
  HiOutlineStatusOnline,
} from "react-icons/hi";

import profile from "../../assets/images/profile.jpg";

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto w-full max-w-[430px]"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-purple-400/20 blur-3xl" />

      {/* Card */}

      <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/70 backdrop-blur-xl shadow-[0_20px_80px_rgba(15,23,42,.12)]">

        {/* Mac Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">

          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-400"></span>
          </div>

          <p className="text-xs font-medium tracking-widest text-slate-500">
            portfolio.dev
          </p>
        </div>

        {/* Image */}

        <div className="relative p-6">

          <img
            src={profile}
            alt="Sagor"
            className="h-[420px] w-full rounded-3xl object-cover"
          />

          {/* Online */}

          <div className="absolute bottom-10 left-10 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 backdrop-blur-lg shadow-lg">

            <HiOutlineStatusOnline className="text-green-500" />

            <span className="text-sm font-medium">
              Available Now
            </span>

          </div>

        </div>

        {/* Info */}

        <div className="px-6 pb-6">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-slate-900">
                Sagor
              </h2>

              <p className="mt-1 text-slate-500">
                Full Stack Developer
              </p>

            </div>

            <a
              href="#"
              className="rounded-xl border border-slate-200 p-3 transition hover:border-blue-500 hover:text-blue-600"
            >
              <FaGithub size={22} />
            </a>

          </div>

          {/* Tech */}

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium">

              <FaReact className="text-sky-500" />

              React

            </span>

            <span className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium">

              <FaNodeJs className="text-green-600" />

              Node

            </span>

            <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium">

              <SiMongodb className="text-green-700" />

              MongoDB

            </span>

            <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">

              <SiExpress />

              Express

            </span>

          </div>

          {/* Bottom */}

          <div className="mt-8 grid grid-cols-3 gap-4">

            <div className="rounded-2xl bg-slate-50 p-4 text-center">

              <h3 className="text-2xl font-bold">
                12+
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Projects
              </p>

            </div>

            <div className="rounded-2xl bg-slate-50 p-4 text-center">

              <h3 className="text-2xl font-bold">
                2+
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Years
              </p>

            </div>

            <div className="rounded-2xl bg-slate-50 p-4 text-center">

              <h3 className="text-2xl font-bold">
                15+
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Skills
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Floating React */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute -left-8 top-24 rounded-2xl bg-white p-4 shadow-xl"
      >
        <FaReact className="text-4xl text-sky-500" />
      </motion.div>

      {/* Floating Node */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute -right-8 bottom-28 rounded-2xl bg-white p-4 shadow-xl"
      >
        <FaNodeJs className="text-4xl text-green-600" />
      </motion.div>
    </motion.div>
  );
};

export default HeroCard;