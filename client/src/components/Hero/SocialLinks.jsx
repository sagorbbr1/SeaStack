import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/yourusername",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com/yourusername",
  },
  {
    icon: HiOutlineMail,
    href: "mailto:sagorbbr1@gmail.com",
  },
];

const SocialLinks = () => {
  return (
    <div className="mt-12 mb-16 flex items-center gap-4">
      {socials.map(({ icon: Icon, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={href}
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full
            border border-slate-200
            bg-white
            text-xl text-slate-700
            shadow-sm
            transition-all duration-300

            hover:-translate-y-1
            hover:border-blue-600
            hover:bg-blue-600
            hover:text-white
            hover:shadow-lg

            dark:border-slate-700
            dark:bg-slate-900
            dark:text-slate-300
            dark:hover:border-blue-500
            dark:hover:bg-blue-500
            dark:hover:text-white
            dark:shadow-slate-950/40
          "
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;