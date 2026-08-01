import { motion } from "framer-motion";

import Container from "../Common/Container";
import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";
import HeroBackground from "./HeroBackground";
import TechMarquee from "./TechMarquee";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        pt-28
        transition-colors
        duration-300

        dark:bg-slate-950

        lg:pt-36
      "
    >
      <HeroBackground />

      <Container>
        <div className="grid min-h-[85vh] items-center gap-20 lg:grid-cols-[1.15fr_.85fr]">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
            }}
          >
            <HeroContent />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="relative"
          >
            <HeroCard />
          </motion.div>

        </div>
      </Container>

      <TechMarquee />
    </section>
  );
};

export default Hero;