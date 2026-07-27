import Section from "../ui/Section";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <Section id="about">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <AboutImage />
        <AboutContent />
      </div>
    </Section>
  );
};

export default About;