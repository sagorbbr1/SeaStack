import { timeline } from "./aboutData";

const Timeline = () => {
  return (
    <div className="space-y-8">
      {timeline.map((item) => (
        <div key={item.year} className="flex gap-5">
          {/* Dot */}
          <div className="mt-2 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>

          {/* Content */}
          <div>
            <p className="font-bold text-blue-600 dark:text-blue-400">
              {item.year}
            </p>

            <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
              {item.title}
            </h3>

            <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;