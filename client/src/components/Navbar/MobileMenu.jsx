import { motion, AnimatePresence } from "framer-motion";
import navLinks from "../../constants/navLinks";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-screen w-72 bg-white z-50 p-8 shadow-2xl"
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6 mt-16">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg text-slate-700 hover:text-blue-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;