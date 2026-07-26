import { useEffect, useState } from "react";
import { FiMenu, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

import Container from "../Common/Container";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <Container>
          <nav
            className={`
              mt-4 h-20 px-6
              flex items-center justify-between
              rounded-3xl
              border border-white/30
              transition-all duration-300
              ${
                scrolled
                  ? "bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                  : "bg-white/60 backdrop-blur-md"
              }
            `}
          >
            {/* Logo */}
            <a
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              Sagor<span className="text-blue-600">.</span>
            </a>

            {/* Desktop Menu */}
            <DesktopMenu />

            {/* Right Side */}
            <div className="flex items-center gap-4">
              
              {/* Resume */}
              <a
                href="/resume.pdf"
                className="hidden md:flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 hover:border-blue-500 transition"
              >
                <FiDownload />
                Resume
              </a>

              {/* Hire Me */}
              <a
                href="#contact"
                className="hidden md:flex px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Hire Me
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden text-2xl"
              >
                <FiMenu />
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;