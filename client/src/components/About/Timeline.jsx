import { timeline } from "./aboutData";

const Timeline = () => {
  return (
    <div className="space-y-8">
      {timeline.map((item) => (
        <div key={item.year} className="flex gap-5">
          <div className="mt-2 h-4 w-4 rounded-full bg-blue-600"></div>

          <div>
            <p className="font-bold text-blue-600">
              {item.year}
            </p>

            <h3 className="mt-1 text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-slate-600">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;