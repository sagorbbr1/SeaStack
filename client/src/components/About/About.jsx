import Section from "../ui/Section";
import Heading from "../ui/Heading";

import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <Section
      id="about"
      className="
        relative overflow-hidden
        bg-slate-50
        dark:bg-slate-950
      "
    >
      {/* Background Blur */}

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

      {/* Optional Grid Pattern */}

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
        badge="About Me"
        title="Building Digital Products That Make an Impact."
        subtitle="I enjoy creating modern web applications with clean architecture, exceptional user experience, and scalable backend systems."
      />

      <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
        <AboutImage />
        <AboutContent />
      </div>
    </Section>
  );
};

export default About;