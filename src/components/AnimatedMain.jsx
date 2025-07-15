"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const AnimatedMain = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        className="layout-main"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">{children}</div>
      </motion.main>
    </AnimatePresence>
  );
};

export default AnimatedMain; 