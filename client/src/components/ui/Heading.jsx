const Heading = ({ title, subtitle }) => {
  return (
    <div className="max-w-3xl">
      <h2
        className="
          text-4xl
          font-black
          leading-tight
          tracking-tight
          text-slate-900

          md:text-5xl
          lg:text-6xl

          dark:text-white
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-slate-600

          dark:text-slate-400
        "
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;