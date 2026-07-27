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
      "
    >
      {icon}

      <span>{name}</span>
    </div>
  );
};

export default TechBadge;