import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServicesGrid from "../components/sections/ServicesGrid";

export default function Services() {
  return (
    <div className="bg-[#000000] min-h-screen selection:bg-red-600 selection:text-white">
      
      {/* --- PAGE HEADER --- */}
      <header className="relative pt-32 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-red-600" />
                <span className="text-red-600 font-mono text-[10px] tracking-[0.5em] uppercase font-bold">
                  System_Capabilities
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                OUR <br /> 
                <span className="text-red-700">SERVICES.</span>
              </h1>
            </div>

            <div className="max-w-md pb-1">
              <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed border-l border-red-900/50 pl-6">
                Precision-engineered AV solutions from initial design blueprint 
                to 24/7 technical support. Built for high-end reliability.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- SERVICES GRID SECTION --- */}
      <section className="relative">
        {/* Reusing your component - ensure italics are removed inside ServicesGrid as well */}
        <ServicesGrid />
      </section>

      {/* --- SIMPLE WORK PROCESS SECTION --- */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Consultation", desc: "Site survey and technical requirement analysis for custom system architecture." },
              { step: "02", title: "Integration", desc: "Expert deployment using enterprise-grade hardware and certified engineering protocols." },
              { step: "03", title: "Support", desc: "Comprehensive system monitoring, maintenance contracts, and 24/7 technical assistance." }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="flex items-center gap-4 mb-6">
                   <span className="text-2xl font-black text-white/10 group-hover:text-red-600 transition-colors duration-500">
                      {item.step}
                   </span>
                   <div className="h-px flex-1 bg-white/10" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm font-normal leading-relaxed max-w-xs transition-colors group-hover:text-slate-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 text-center bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6 relative z-10 space-y-12"
        >
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Ready to <span className="text-red-700">Integrate?</span>
          </h3>
          
          <Link to="/contact" className="block mt-10">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#000", border: "1px solid #dc2626" }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 bg-red-700 text-white font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl transition-all"
            >
              Consult Our Engineers
            </motion.button>
          </Link>

          <p className="text-slate-600 font-mono text-[9px] uppercase tracking-[0.5em] pt-6">
            Dynamic AV Technologies // established 2008 // colombo
          </p>
        </motion.div>
      </section>
    </div>
  );
}
