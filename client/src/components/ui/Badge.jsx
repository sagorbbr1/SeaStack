const Badge = ({ children }) => {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-blue-200
        bg-blue-50
        px-4
        py-2
        text-sm
        font-medium
        text-blue-700
        transition-colors
        duration-300

        dark:border-blue-500/30
        dark:bg-blue-500/10
        dark:text-blue-400
      "
    >
      {children}
    </span>
  );
};

export default Badge;