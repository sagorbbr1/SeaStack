import { quickLinks } from "./footerData";

const FooterLinks = () => {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">
        Quick Links
      </h3>

      <div className="space-y-3">
        {quickLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="
              block
              text-slate-600
              transition-all
              duration-300
              hover:translate-x-1
              hover:text-blue-600
              dark:text-slate-400
              dark:hover:text-blue-400
            "
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;