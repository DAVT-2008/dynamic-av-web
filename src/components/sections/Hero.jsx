import React from "react";
  import { motion } from "framer-motion";
  import { Link } from "react-router-dom";
  import Button from "../ui/Button"; 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  export default function Hero() {
    return (
      /* Changed items-center to items-start and added pt-40 md:pt-52 to push content down */
      <section className="relative min-h-[120vh] flex items-start justify-center overflow-hidden bg-black pt-40 md:pt-52">
        
        {/* --- PREMIUM RED & BLACK BACKGROUND --- */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/20 rounded-full blur-[120px]" />
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
              style={{ backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase">
            DESIGNED FOR VISION TEST <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-800">
              BUILT FOR IMPACT
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-10 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Engineering world-class audio-visual environments for Sri Lanka's 
            most prestigious corporate and private residences.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 flex justify-center">
            <Link to="/contact">
              <Button className="px-12 py-5 text-sm font-black uppercase tracking-[0.2em] bg-red-700 hover:bg-red-600 border-none shadow-[0_0_40px_rgba(185,28,28,0.4)] transition-all">
                Start Your Project
              </Button>
            </Link>
          </motion.div>

          {/* Stats Strip */}
          <motion.div 
            variants={itemVariants} 
            className="mt-32 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { label: "Installations", value: "500+" },
              { label: "Expert Years", value: "18+" },
              { label: "Satisfaction", value: "98%" },
              { label: "Active Support", value: "24/7" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-3xl font-black text-white group-hover:text-red-600 transition-colors duration-300">{stat.value}</div>
                <div className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mt-2 font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* --- SCROLL INDICATOR --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-slate-500 font-bold">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-red-600 to-transparent" />
        </motion.div>
      </section>
    );
  }