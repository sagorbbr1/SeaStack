import { motion } from "framer-motion";
import { contactData } from "./contactData";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-3xl font-bold text-slate-900">
        Get In Touch
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        I'm currently available for freelance work, collaborations,
        and exciting opportunities. Feel free to reach out anytime.
      </p>

      <div className="mt-10 space-y-5">
        {contactData.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={item.link || "#"}
              target={item.link?.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h4 className="font-semibold text-slate-900">
                  {item.value}
                </h4>
              </div>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ContactInfo;