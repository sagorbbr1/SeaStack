const Button = ({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}) => {
  const styles = {
    primary: `
      bg-blue-600
      text-white
      shadow-lg
      hover:-translate-y-1
      hover:bg-blue-700
      hover:shadow-blue-500/30
    `,

    secondary: `
      border
      border-slate-300
      bg-white
      text-slate-700
      hover:border-blue-600
      hover:text-blue-600

      dark:border-slate-700
      dark:bg-slate-900
      dark:text-slate-200
      dark:hover:border-blue-500
      dark:hover:text-blue-400
      dark:hover:bg-slate-800
    `,

    ghost: `
      bg-transparent
      text-slate-700
      hover:bg-slate-100

      dark:text-slate-300
      dark:hover:bg-slate-800
    `,
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        gap-2
        rounded-xl
        px-6
        py-3
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500/30
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