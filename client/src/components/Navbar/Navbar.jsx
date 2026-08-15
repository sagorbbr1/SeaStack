import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

import ThemeToggle from "./ThemeToggle";
import Container from "../Common/Container";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [hasAnimated, setHasAnimated] = useState(() => {
    return sessionStorage.getItem("navbarAnimated") === "true";
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!hasAnimated) {
      sessionStorage.setItem("navbarAnimated", "true");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  return (
    <>
      <motion.header
        initial={hasAnimated ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <Container>
          <motion.nav
            animate={{
              width: scrolled ? "100%" : "96%",
              scale: scrolled ? 0.985 : 1,
              y: scrolled ? -2 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 24,
              mass: 0.8,
            }}
            className={`mx-auto mt-5 flex h-20 items-center justify-between rounded-[28px] border px-7 will-change-transform ${
              scrolled
                ? `
                  border-slate-200/70
                  bg-white/80
                  backdrop-blur-2xl
                  shadow-[0_18px_50px_rgba(15,23,42,0.08)]

                  dark:border-slate-700/70
                  dark:bg-slate-900/80
                  dark:shadow-[0_18px_50px_rgba(0,0,0,0.4)]
                `
                : `
                  border-white/30
                  bg-white/60
                  backdrop-blur-xl

                  dark:border-slate-700/60
                  dark:bg-slate-900/60
                `
            }`}
          >
            <motion.a
              href="#home"
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-3xl font-black tracking-tight text-slate-900 dark:text-white"
            >
              Sagor<span className="text-blue-600">.</span>
            </motion.a>

            <DesktopMenu />

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <motion.a
                href="#contact"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 md:flex"
              >
                Let's Talk
              </motion.a>

              <motion.button
                type="button"
                onClick={() => setOpen(true)}
                whileTap={{ scale: 0.92 }}
                className="rounded-xl p-2 text-2xl text-slate-700 transition-colors duration-200 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
                aria-label="Open menu"
              >
                <FiMenu />
              </motion.button>
            </div>
          </motion.nav>
        </Container>
      </motion.header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;