import React from "react";
import { motion } from "framer-motion";


export default function TestimonialCard({ name = "Client Name", quote = "Great service!" }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/60 backdrop-blur-md rounded-xl p-4 shadow-soft border border-white/40">
      <div className="text-slate-800 font-semibold">{name}</div>
      <div className="text-slate-500 text-sm mt-2">“{quote}”</div>
    </motion.div>
  );
}
