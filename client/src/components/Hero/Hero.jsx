import { motion } from "framer-motion";

import Container from "../Common/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50 min-h-screen flex items-center"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />

      {/* Blur Circle 1 */}
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl -z-10" />

      {/* Blur Circle 2 */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl -z-10" />

      <Container>
        <div className="grid items-center gap-20 py-32 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: .8,
              ease: "easeOut",
            }}
          >
            <HeroContent />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: .8,
              delay: .2,
              ease: "easeOut",
            }}
          >
            <HeroImage />
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;