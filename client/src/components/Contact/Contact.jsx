import Heading from "../ui/Heading";
import Section from "../ui/Section";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Section
      id="contact"
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#0f172a 1px,transparent 1px),
            linear-gradient(to bottom,#0f172a 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10">
        {/* Heading */}
        <Heading
          badge="Get In Touch"
          title="Let's Build Something Amazing Together."
          subtitle="Whether you have a startup idea, a freelance project, or just want to say hello, I'd love to hear from you. Let's create something meaningful."
        />

        {/* Main Content */}
        <div className="mt-20 grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Bottom CTA */}
        <div className="mt-24">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 dark:border-slate-700 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 p-[1px] shadow-2xl">
            <div className="rounded-[31px] bg-white px-8 py-10 transition-colors dark:bg-slate-900 lg:px-12">
              <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                    Have an idea in mind?
                  </h3>

                  <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
                    I'm always excited to collaborate on modern web
                    applications, startup ideas, dashboards, and business
                    websites. Let's turn your vision into reality.
                  </p>
                </div>

                <a
                  href="mailto:sagorbbr1@gmail.com"
                  className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Let's Talk →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;