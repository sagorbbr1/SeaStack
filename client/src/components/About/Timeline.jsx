import { timeline } from "./aboutData";

const Timeline = () => {
  return (
    <div className="space-y-8">
      {timeline.map((item, index) => (
        <div
          key={index}
          className="relative pl-10"
        >
          {/* Line */}
          {index !== timeline.length - 1 && (
            <span className="absolute left-[9px] top-8 h-full w-[2px] bg-slate-200" />
          )}

          {/* Dot */}
          <span className="absolute left-0 top-1 h-5 w-5 rounded-full border-4 border-blue-600 bg-white" />

          <span className="text-sm font-semibold text-blue-600">
            {item.year}
          </span>

          <h3 className="mt-1 text-xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-2 leading-7 text-slate-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;