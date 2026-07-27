import { motion } from "framer-motion";

import Heading from "../ui/Heading";
import Button from "../ui/Button";
import Timeline from "./Timeline";


const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <Heading
        badge="About Me"
        title="Building Modern Web Applications with MERN Stack"
        subtitle="I enjoy turning ideas into fast, scalable, and user-friendly web applications. I focus on writing clean code, creating responsive interfaces, and continuously improving my skills through real-world projects."
      />

      <div className="mt-10">
        <Timeline />
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
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