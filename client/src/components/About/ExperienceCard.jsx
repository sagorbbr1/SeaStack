import { FaCode } from "react-icons/fa6";

const ExperienceCard = () => {
  return (
    <div className="w-60 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
        <FaCode className="text-xl text-blue-600" />
      </div>

      <h3 className="text-3xl font-bold text-slate-900">
        2+
      </h3>

      <p className="mt-1 text-slate-600">
        Years of Learning
      </p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
      </div>
    </div>
  );
};

export default ExperienceCard;