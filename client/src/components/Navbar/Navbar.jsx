import { useEffect, useState } from "react";
import { FiDownload, FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

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

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <Container>
          <motion.nav
            animate={{
              width: scrolled ? "100%" : "96%",
            }}
            transition={{
              duration: 0.35,
            }}
            className={`mx-auto mt-5 flex h-20 items-center justify-between rounded-[28px] border px-7 transition-all duration-300 ${
              scrolled
                ? "border-white/50 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,.08)] backdrop-blur-2xl"
                : "border-white/30 bg-white/60 backdrop-blur-xl"
            }`}
          >
            {/* Logo */}

            <motion.a
              href="#home"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="text-3xl font-black tracking-tight text-slate-900"
            >
              Sagor
              <span className="text-blue-600">.</span>
            </motion.a>

            {/* Desktop Menu */}

            <DesktopMenu />

            {/* Right Side */}

            <div className="flex items-center gap-3">
              {/* Resume */}

              <motion.a
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="/resume.pdf"
                download
                className="hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 md:flex"
              >
                <FiDownload />

                Resume
              </motion.a>

              {/* CTA */}

              <motion.a
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="#contact"
                className="hidden rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/40 md:flex"
              >
                Let's Talk
              </motion.a>

              {/* Mobile */}

              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() => setOpen(true)}
                className="rounded-xl p-2 text-2xl transition hover:bg-slate-100 lg:hidden"
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