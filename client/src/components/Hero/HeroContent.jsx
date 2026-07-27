
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const HeroContent = () => {
  return (
    <div className="max-w-2xl">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white/70 backdrop-blur-md px-5 py-2 shadow-sm"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>

        <span className="text-sm font-medium text-slate-700">
          Available for Freelance
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .25 }}
        className="mt-10 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-7xl"
      >
        BUILDING
        <br />

        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
          DIGITAL
        </span>

        <br />

        EXPERIENCES.
      </motion.h1>

      {/* Subtitle */}

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .45 }}
        className="mt-8 text-2xl font-semibold text-slate-800"
      >
        Full Stack MERN Developer
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .6 }}
        className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
      >
        I design and develop fast, scalable and modern web
        applications using React, Node.js, Express and MongoDB.
        My focus is creating clean user experiences with robust
        backend architecture.
      </motion.p>

      {/* CTA */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .75 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          Let's Talk

          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
        >
          <FiDownload />

          Resume
        </a>
      </motion.div>

      {/* Social */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .9 }}
        className="mt-12 flex items-center gap-4"
      >
        {[
          FaGithub,
          FaLinkedinIn,
          FaFacebookF,
        ].map((Icon, index) => (
          <a
            key={index}
            href="/"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg"
          >
            <Icon />
          </a>
        ))}
      </motion.div>

      {/* Bottom Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 flex flex-wrap gap-10"
      >
       
      </motion.div>

    </div>
  );
};

export default HeroContent;