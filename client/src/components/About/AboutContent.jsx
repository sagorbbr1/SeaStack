import { motion } from "framer-motion";

import Button from "../ui/Button";

import JourneyCards from "./JourneyCards";
import TechArsenal from "./TechArsenal";
import CurrentFocus from "./CurrentFocus";

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Small Label */}
      <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
        Who I Am
      </span>

      {/* Heading */}
      <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
        Building Digital Products,
        <br />
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Not Just Websites.
        </span>
      </h2>

      {/* Description */}
      <p className="mt-8 text-lg leading-8 text-slate-600">
        I'm a Full Stack MERN Developer passionate about creating fast,
        scalable, and user-friendly web applications. I enjoy solving
        real-world problems through clean architecture, modern UI, and
        maintainable code.
      </p>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Every project is an opportunity to improve my skills, explore
        new technologies, and build digital experiences that are both
        functional and visually engaging.
      </p>

      {/* Journey */}
      <div className="mt-12">
        <JourneyCards />
      </div>

  

      {/* CTA */}
      <div className="mt-12 flex flex-wrap gap-4">
        <Button>
          Download Resume
        </Button>

        <Button variant="secondary">
          Let's Talk
        </Button>
      </div>
    </motion.div>
  );
};

export default AboutContent;