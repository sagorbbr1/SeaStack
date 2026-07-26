import { motion } from "framer-motion";
import  heroData  from "./heroData";
import CTAButtons from "./CTAButtons";
import SocialLinks from "./SocialLinks";

const HeroContent = () => {
  return (
    <div className="max-w-xl">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .2 }}
        className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>

        Available for Freelance
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .3 }}
        className="mt-8 text-lg font-medium text-slate-500"
      >
        {heroData.greeting}
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .4 }}
        className="mt-2 text-5xl font-black leading-tight text-slate-900 md:text-6xl xl:text-7xl"
      >
        {heroData.name}
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .5 }}
        className="mt-6 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl"
      >
        {heroData.role}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .6 }}
        className="mt-8 leading-8 text-slate-600"
      >
        {heroData.description}
      </motion.p>

      <CTAButtons />

      <SocialLinks />

    </div>
  );
};

export default HeroContent;