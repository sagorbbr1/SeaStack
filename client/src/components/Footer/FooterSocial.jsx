import { socialLinks } from "./footerData";

const FooterSocial = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-300
              bg-white
              text-slate-700
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500
              hover:bg-blue-600
              hover:text-white

              dark:border-slate-700
              dark:bg-slate-800
              dark:text-slate-300
              dark:hover:border-blue-500
              dark:hover:bg-blue-600
              dark:hover:text-white
            "
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default FooterSocial;