import { FiArrowRight, FiDownload } from "react-icons/fi";

const CTAButtons = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <a
        href="#contact"
        className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
      >
        Hire Me

        <FiArrowRight
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>

      <a
        href="/resume.pdf"
        download
        className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
      >
        <FiDownload />

        Resume
      </a>

    </div>
  );
};

export default CTAButtons;