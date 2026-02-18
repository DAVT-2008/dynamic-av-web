import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const directors = [
    {
      name: "V. Manilal Fernando",
      role: "Chairman",
      image: "https://res.cloudinary.com/dtscqhcop/image/upload/v1771133935/WhatsApp_Image_2026-02-15_at_11.08.09_sxcisf.jpg",
    },
    {
      name: "Mohan Abeysinghe",
      role: "Deputy Chairman",
      image: "https://res.cloudinary.com/dtscqhcop/image/upload/v1763975687/Picture-1.jpg-1-12_lakvqy.webp",
    },
    {
      name: "Malik Fernando",
      role: "Managing Director/CEO",
      image: "https://res.cloudinary.com/dtscqhcop/image/upload/v1763975810/malik_bksvcz.jpg",
    },
    {
      name: "Dr. Manil Fernando",
      role: "Director",
      image: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764567201/manil_fernando_s1ptoe.jpg",
    },
    {
      name: "Thomas Daetwyler",
      role: "Director",
      image: "https://res.cloudinary.com/dtscqhcop/image/upload/v1771384453/WhatsApp_Image_2026-02-18_at_08.42.39_rvmdtz.jpg", // Replace with actual image link
    },
  ];

  return (
    <section className="bg-[#050505] text-white overflow-hidden">
      
      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dtscqhcop/image/upload/v1764654806/istockphoto-1144188586-612x612_m2eaxw.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#050505]" />
        
        <div className="relative z-10 text-center px-6">
          <motion.h4 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-red-600 font-black tracking-[0.4em] uppercase text-sm mb-4"
          >
            ESTABLISHED 2008
          </motion.h4>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none"
          >
            OUR <span className="text-red-700">LEGACY.</span>
          </motion.h1>
        </div>
      </div>

      {/* ================= 2. MISSION & VISION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative p-10 bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-0 bg-red-600 group-hover:h-full transition-all duration-500" />
            <h3 className="text-red-600 font-black text-xs uppercase tracking-[0.3em] mb-4">Our Mission</h3>
            <h2 className="text-3xl font-bold mb-6">Redefining Presence through Clarity.</h2>
            <p className="text-slate-400 text-lg leading-relaxed font-normal">
              To empower organizations by bridging the gap between human connection and digital precision. 
              We deliver bespoke AV environments that act as the silent backbone of every successful presentation.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative p-10 bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-0 bg-red-600 group-hover:h-full transition-all duration-500" />
            <h3 className="text-red-600 font-black text-xs uppercase tracking-[0.3em] mb-4">Our Vision</h3>
            <h2 className="text-3xl font-bold mb-6">The Global Benchmark for AV Innovation.</h2>
            <p className="text-slate-400 text-lg leading-relaxed font-normal">
              Setting the standard for design-led engineering and technical dependability. 
              Our vision is a future where complex audio-visual ecosystems become invisible.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= 3. LEADERSHIP BOARD (5 IN ONE LINE) ================= */}
      <div className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                LEADERSHIP <br /><span className="text-red-700">ARCHITECTS</span>
              </h2>
              <p className="text-slate-500 mt-6 font-mono text-[10px] uppercase tracking-[0.5em]">Board of Directors // Governance</p>
            </div>
            <div className="hidden md:block h-px flex-grow bg-gradient-to-r from-red-600/30 to-transparent mx-10 mb-4" />
          </div>

          {/* lg:grid-cols-5 ensures 5 items in one row on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {directors.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 group-hover:border-red-600/30 transition-all duration-700 shadow-2xl bg-[#0f0f0f]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full border border-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="py-6 text-center">
                  <h4 className="text-base font-black text-white group-hover:text-red-600 transition-colors uppercase tracking-tight leading-tight">
                    {person.name}
                  </h4>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="h-1 w-1 bg-red-600 rounded-full animate-pulse" />
                    <p className="text-[8px] uppercase tracking-[0.2em] text-slate-500 font-mono font-bold">
                      {person.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer Quote */}
      <div className="py-24 border-t border-white/5 text-center px-6">
         <p className="text-slate-500 font-normal text-lg max-w-2xl mx-auto uppercase tracking-widest">
            "Engineering the technical legacy that carries your message forward."
         </p>
      </div>
    </section>
  );
}
