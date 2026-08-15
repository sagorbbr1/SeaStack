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

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <Container>
          <motion.nav
            animate={{
              width: scrolled ? "100%" : "96%",
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`mx-auto mt-5 flex h-20 items-center justify-between rounded-[28px] border px-7
            ${
              scrolled
                ? `
                border-slate-200/70
                bg-white/80
                backdrop-blur-2xl
                shadow-[0_20px_60px_rgba(15,23,42,.08)]

                dark:border-slate-700/70
                dark:bg-slate-900/80
                dark:shadow-[0_20px_60px_rgba(0,0,0,.45)]
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
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="text-3xl font-black tracking-tight text-slate-900 dark:text-white"
            >
              Sagor
              <span className="text-blue-600">.</span>
            </motion.a>

            {/* Desktop Menu */}
            <DesktopMenu />

            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* CTA */}
              <motion.a
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                href="#contact"
                className="
                  hidden md:flex
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-6 py-3
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-500/20

                  hover:shadow-blue-500/40
                  dark:shadow-blue-900/40
                "
              >
                Let's Talk
              </motion.a>

              {/* Mobile Menu */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.15 }}
                onClick={() => setOpen(true)}
                className="
                  rounded-xl
                  p-2
                  text-2xl
                  text-slate-700
                  transition-colors
                  duration-200

                  hover:bg-slate-100

                  dark:text-slate-200
                  dark:hover:bg-slate-800

                  lg:hidden
                "
              >
                <FiMenu />
              </motion.button>
            </div>
          </motion.nav>
        </Container>
      </motion.header>

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default Navbar;