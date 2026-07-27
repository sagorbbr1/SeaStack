const GlassCard = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
      rounded-3xl
      border
      border-white/40
      bg-white/70
      backdrop-blur-xl
      shadow-[0_20px_60px_rgba(15,23,42,.08)]
      ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;