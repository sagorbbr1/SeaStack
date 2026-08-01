import Section from "../ui/Section";
import Heading from "../ui/Heading";

import SkillCategory from "./SkillCategory";
import { skills } from "./skillsData";

const Skills = () => {
  return (
    <Section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-slate-50

        dark:bg-slate-950
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute -left-40 top-20
          h-80 w-80 rounded-full
          bg-blue-500/10
          blur-3xl

          dark:bg-blue-500/5
        "
      />

      <div
        className="
          absolute -right-40 bottom-20
          h-80 w-80 rounded-full
          bg-cyan-500/10
          blur-3xl

          dark:bg-cyan-500/5
        "
      />

      {/* Grid Pattern */}

      <div
        className="
          absolute inset-0 -z-10
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)]
          [background-size:48px_48px]

          dark:opacity-[0.05]
        "
      />

      <Heading
        title="Technologies I Use to Build Modern Web Applications"
        subtitle="From pixel-perfect user interfaces to scalable backend systems, these are the technologies I rely on to build fast, secure, and production-ready applications."
      />

      <div className="relative mt-20">
        {skills.map((category, index) => (
          <SkillCategory
            key={category.title}
            category={category}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;