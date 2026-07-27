import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import navLinks from "../../constants/navLinks";

const backdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const drawer = {
  hidden: {
    x: "110%",
    rotateY: -10,
    scale: 0.96,
  },
  visible: {
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
      mass: 0.7,
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  exit: {
    x: "110%",
    scale: 0.98,
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: 30,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
    },
  },
};

const MobileMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-slate-900/35 backdrop-blur-md"
          />

          {/* Drawer */}
          <motion.aside
            variants={drawer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 z-50 h-screen w-[320px]
                       border-l border-white/20
                       bg-white/85
                       backdrop-blur-2xl
                       shadow-[0_20px_80px_rgba(0,0,0,0.18)]"
            style={{
              transformPerspective: 1200,
            }}
          >
            {/* Glow */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Header */}
            <div className="relative flex items-center justify-between border-b border-slate-200/70 px-6 py-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Navigation
                </h3>
                <p className="text-sm text-slate-500">
                  Explore my portfolio
                </p>
              </div>

              <motion.button
                whileHover={{
                  rotate: 90,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm"
              >
                <FiX size={22} />
              </motion.button>
            </div>

            {/* Links */}
            <div className="relative mt-8 px-5">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  variants={item}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  whileHover={{
                    x: 8,
                  }}
                  className="group mb-2 flex items-center justify-between rounded-2xl px-5 py-4 text-[17px] font-medium text-slate-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
                >
                  <span>{link.name}</span>

                  <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-6 right-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white"
            >
              <p className="text-sm opacity-90">
                Let's build something amazing together.
              </p>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;