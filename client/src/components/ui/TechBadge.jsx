const TechBadge = ({ icon, name }) => {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-slate-200
        bg-white
        px-4
        py-2
        shadow-sm
        transition-all
        duration-300

        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-200
      "
    >
      {icon}

      <span className="text-slate-700 dark:text-slate-300">
        {name}
      </span>
    </div>
  );
};

export default TechBadge;