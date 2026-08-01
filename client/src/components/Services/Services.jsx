import Heading from "../ui/Heading";
import Section from "../ui/Section";

import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

const Services = () => {
  return (
    <Section
      id="services"
      className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <Heading
        badge="Services"
        title="What I Can Build"
        subtitle="Helping businesses and startups turn ideas into modern, scalable and high-performance web applications."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;