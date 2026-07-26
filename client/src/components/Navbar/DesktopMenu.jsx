import navLinks from "../../constants/navLinks";

const DesktopMenu = () => {
  return (
    <div className="hidden lg:flex items-center gap-8">
      {navLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="relative text-slate-700 font-medium transition hover:text-blue-600 group"
        >
          {item.name}

          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </div>
  );
};

export default DesktopMenu;