import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-100 transition-colors duration-300 dark:bg-slate-950">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-3">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Sagor
              <span className="text-blue-600 dark:text-blue-500">.</span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-600 dark:text-slate-400">
              Full Stack MERN Developer passionate about building
              fast, modern, scalable and user-friendly web applications.
            </p>

            <div className="mt-8">
              <FooterSocial />
            </div>
          </div>

          {/* Middle */}
          <FooterLinks />

          {/* Right */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">
              Let's Build Something Great
            </h3>

            <p className="leading-8 text-slate-600 dark:text-slate-400">
              Have a project in mind?
              <br />
              Feel free to reach out anytime.
            </p>

            <a
              href="mailto:sagorbbr1@gmail.com"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Say Hello
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-300 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500 lg:flex-row">
          <p>
            © {new Date().getFullYear()} Sagor. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;