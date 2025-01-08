import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(100px)", // Mantiene la dirección
        transition: "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)", // Transición más suave
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
