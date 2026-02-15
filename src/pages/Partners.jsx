import React from "react";
import { motion } from "framer-motion";

export default function PartnerLogos() {
  const brandPartners = [
    { name: "BEHRINGER", logo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1770270482/images_ur2gtz.png" },
    { name: "TURBOSOUND", logo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1770270840/images_azs4tm.jpg" },
    { name: "KLARK TEKNIK", logo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1770270497/images_2_m35yqp.png" },
    { name: "TOA", logo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1770270471/ogp_logo_y5xrib.jpg" },
    { name: "MIDAS", logo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1770270490/images_3_bknvnn.png" },
    { name: "ASTON", logo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1770270522/aston_36bd4de9-0708-48ef-aebb-7bb554054753_1200x1200_uvynyv.avif" },
    { name: "SENNHEISER", logo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1770270460/Sennheiser-Logo.wine_sgcqhs.png" },
    { name: "TANNOY", logo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1770270448/tannoy-vector-logo_epmmnh.webp" },
  ];

  // Double the array for seamless infinite loop
  const marqueeLogos = [...brandPartners, ...brandPartners];

  const headingText = "OUR BRANDS";
  const letterVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-[#020202] py-20 md:py-32 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[800px] h-[300px] bg-red-950/20 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* HEADER SECTION */}
        <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4 md:mb-6 justify-center md:justify-start"
          >
            <div className="h-[1px] w-8 md:w-12 bg-red-600" />
            <span className="text-red-500 font-mono text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase font-black">
              System_Inventory
            </span>
          </motion.div>

          {/* RESPONSIVE HEADING */}
          <div className="flex flex-wrap overflow-hidden justify-center md:justify-start">
            {headingText.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter ${char === " " ? "mr-4 md:mr-6" : ""}`}
              >
                {char}
              </motion.span>
            ))}
            <motion.span 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-red-700 text-4xl sm:text-6xl md:text-8xl font-black"
            >
              .
            </motion.span>
          </div>
        </div>

        {/* MARQUEE CONTAINER */}
        <div className="flex overflow-hidden group py-6 md:py-10 relative">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none" />

          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, // Slightly faster for mobile engagement
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex flex-nowrap gap-6 md:gap-10 pr-6 md:pr-10"
          >
            {marqueeLogos.map((brand, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10, scale: 1.02 }}
                // Responsive Sizing: 280px on mobile, 450px on desktop
                className="w-[260px] h-[160px] md:w-[450px] md:h-[250px] flex-shrink-0 bg-white rounded-[1.5rem] md:rounded-[3rem] p-8 md:p-12 flex items-center justify-center relative shadow-2xl border border-white/5 transition-all duration-500"
              >
                {/* Micro-Technical Decor (Hidden on very small screens) */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8 flex gap-1.5 md:gap-2">
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 border border-slate-200 rounded-full" />
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 border border-slate-200 rounded-full" />
                </div>
                
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain grayscale-[0.2] hover:grayscale-0 transition-all duration-700 p-2"
                />

                {/* Bottom Spec Tag */}
                <div className="absolute bottom-4 right-6 md:bottom-8 md:right-10">
                  <p className="text-[7px] md:text-[9px] font-mono text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">
                    [ MOD_0{i % 8 + 1} ]
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FOOTER TEXT */}
      <div className="mt-12 md:mt-24 max-w-7xl mx-auto px-6 text-center opacity-30">
        <p className="text-slate-500 font-mono text-[7px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.5em] leading-relaxed">
          Dynamic AV Technologies // Worldwide Brand Alliance <br className="md:hidden" /> // Secure Link Est.
        </p>
      </div>
    </div>
  );
}