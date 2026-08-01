import Section from "../ui/Section";
import Heading from "../ui/Heading";

import SkillCategory from "./SkillCategory";
import { skills } from "./skillsData";


const Skills = () => {


  return (
    <Section
      id="skills"
      className="relative overflow-hidden bg-slate-50"
    >
      {/* Background */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <Heading
        badge="Tech Stack"
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