import { quickLinks } from "./footerData";

const FooterLinks = () => {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-white">
        Quick Links
      </h3>

      <div className="space-y-3">
        {quickLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="block text-slate-400 transition hover:text-blue-400"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;