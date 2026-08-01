import { FaCheckCircle } from "react-icons/fa";

const items = [
  "Building production-ready MERN applications",
  "Learning Next.js & TypeScript",
  "Improving UI/UX design skills",
  "Open to freelance opportunities",
];

const CurrentFocus = () => {
  return (
    <section className="mt-12">
      <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Current Focus
      </h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="
              group
              relative
              overflow-hidden
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-500
              hover:shadow-lg
              hover:shadow-blue-500/10

              dark:border-slate-700
              dark:bg-slate-900
              dark:hover:border-blue-500
              dark:hover:bg-slate-800
            "
          >
            {/* Hover Glow */}
            <div
              className="
                absolute inset-0
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
                bg-gradient-to-r
                from-blue-500/5
                via-cyan-500/10
                to-blue-500/5

                dark:from-blue-500/10
                dark:via-cyan-500/15
                dark:to-blue-500/10
              "
            />

            <FaCheckCircle className="relative z-10 text-blue-600 dark:text-blue-400" />

            <span className="relative z-10 text-slate-700 dark:text-slate-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentFocus;