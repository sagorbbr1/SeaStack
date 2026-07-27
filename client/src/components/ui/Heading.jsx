const Heading = ({
  title,
  subtitle,
}) => {
  return (
    <>
      <h2
        className="
        text-4xl
        md:text-5xl
        lg:text-6xl
        font-black
        leading-tight
        text-slate-900
        "
      >
        {title}
      </h2>

      <p
        className="
        mt-6
        max-w-xl
        text-lg
        leading-8
        text-slate-600
        "
      >
        {subtitle}
      </p>
    </>
  );
};

export default Heading;