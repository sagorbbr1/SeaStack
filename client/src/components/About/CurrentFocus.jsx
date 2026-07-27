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
      <h3 className="mb-6 text-2xl font-bold text-slate-900">
        Current Focus
      </h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
          >
            <FaCheckCircle className="text-blue-600" />
            <span className="text-slate-700">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentFocus;