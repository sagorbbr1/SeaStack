const Badge = ({
  children,
}) => {
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
      "
    >
      {children}
    </span>
  );
};

export default Badge;