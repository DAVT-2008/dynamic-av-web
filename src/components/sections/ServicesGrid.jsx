import React from "react";
import { Link } from "react-router-dom";
import services from "../../data/servicesData";
import { motion } from "framer-motion";

export default function ServicesGrid() {
  return (
    <section id="services" className="py-32 bg-[#7a0d0d] text-white relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- SIMPLE HEADER --- */}
        <div className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-white/40 font-medium text-[10px] uppercase tracking-[0.5em] block mb-6">
              Our Expertise
            </span>
            <h3 className="text-5xl md:text-7xl font-serif leading-tight">
              Simple. Precise. <br />
              <span className="italic font-light opacity-80 text-red-100">Excellence.</span>
            </h3>
          </motion.div>
        </div>

        {/* --- MINIMALIST ROW LIST --- */}
        <div className="space-y-0">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group border-t border-white/10 py-10 flex flex-col md:flex-row items-baseline justify-between transition-colors hover:bg-white/[0.02]"
            >
              {/* Left Side: Number & Title */}
              <div className="flex items-baseline gap-8 md:w-1/2">
                <span className="text-white/20 font-serif italic text-xl group-hover:text-white/50 transition-colors">
                  0{i + 1}
                </span>
                <h4 className="text-3xl md:text-4xl font-serif tracking-tight text-white/90 group-hover:text-white transition-all">
                  {s.title}
                </h4>
              </div>

              {/* Right Side: Description */}
              <div className="mt-4 md:mt-0 md:w-1/3">
                <p className="text-white/50 text-sm md:text-base font-light leading-relaxed group-hover:text-white/80 transition-colors">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Bottom Border for the last item */}
          <div className="border-t border-white/10" />
        </div>

        {/* --- SIMPLE ACTION --- */}
        <div className="mt-24 text-center">
          <Link to="/contact">
            <motion.button 
              whileHover={{ letterSpacing: "0.5em" }}
              transition={{ duration: 0.4 }}
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-white border-b border-white/20 pb-2 hover:border-white transition-all"
            >
              Begin a Consultation
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}