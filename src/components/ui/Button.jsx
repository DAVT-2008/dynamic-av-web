import React from "react";
import { motion } from "framer-motion";

export default function Button({ children, onClick, variant = "primary", className = "" }) {
  const base = "rounded-xl px-6 py-3 font-bold transition-all duration-300 flex items-center justify-center";
  
  if (variant === "primary") {
    return (
      <motion.button
        whileHover={{ scale: 1.03, boxShadow: "0 10px 20px -10px rgba(185, 28, 28, 0.4)" }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        className={`${base} bg-gradient-to-r from-red-700 to-red-800 text-white shadow-lg ${className}`}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${base} bg-red-400 backdrop-blur-md text-black border border-red-600 hover:bg-red-500 ${className}`}
    >
      {children}
    </motion.button>
  );
}