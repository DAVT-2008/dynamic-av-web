import React from "react";
import { motion } from "framer-motion";

/**
 * Wrapper that applies a fade-in animation to its children.
 * Props:
 * - className: Tailwind classes
 * - custom: number for stagger delay
 */
export default function MotionWrapper({ children, className = "", custom = 0 }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { delay: custom * 0.08, duration: 0.6 } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
