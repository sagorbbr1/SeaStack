const Button = ({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}) => {
  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/20",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600",

    ghost:
      "bg-transparent hover:bg-slate-100",
  };

  return (
    <button
      {...props}
      className={`
      inline-flex items-center
      gap-2
      rounded-xl
      px-6
      py-3
      font-semibold
      transition-all
      duration-300
      hover:-translate-y-1
      ${styles[variant]}
      ${className}
      `}
    >
      {children}

      {icon}
    </button>
  );
};

export default Button;