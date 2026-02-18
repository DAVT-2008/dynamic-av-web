import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Hero from "../components/sections/Hero";
import ServicesGrid from "../components/sections/ServicesGrid";
import TestimonialCard from "../components/sections/TestimonialCard";
import Button from "../components/ui/Button";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
      {
      title: "BARBEQUE NATION ",
      image: "https://res.cloudinary.com/dtscqhcop/image/upload/v1771126951/WhatsApp_Image_2026-02-15_at_09.09.49_1_zw6clj.jpg",
      description: "Our latest project showcase features a full audio overhaul for Barbeque Nation. We combined the warmth of the Behringer X1202SFX mixer with the raw power of Lab Gruppen amplification and the sleek design of Tannoy DVS 401 speakers.",
      category: "Resturant"
    },
    {
      title: "HCL TECH",
      image: "https://res.cloudinary.com/dtscqhcop/image/upload/v1771126952/WhatsApp_Image_2026-02-15_at_09.09.49_2_kcodrx.jpg",
      description: "Featuring the Turbosound iP1000 system, X1204USB mixing console, and Sennheiser XSW 2-835 wireless microphones, this setup offers crystal-clear audio wrapped in a sleek, professional design.",
      category: "coparate"
    },
    {
      title: "MANDARINA HOTEL",
      image: "https://res.cloudinary.com/dtscqhcop/image/upload/v1771126951/WhatsApp_Image_2026-02-15_at_09.09.49_z0udde.jpg",
      description: "A look inside our AV journey at Mandarina Hotel. By integrating the Turbosound iP1000 system with the QX2442USB mixing console, we’ve created an audio environment that is as aesthetically pleasing as it is sonically superior.",
      category: "Hotels"
    },
    {
      title: "COMMERCIAL CREDIT ACADEMY",
      image: "https://res.cloudinary.com/dtscqhcop/image/upload/v1771126952/WhatsApp_Image_2026-02-15_at_09.09.50_yvzqlj.jpg",
      description: "Empowering future leaders with the right tools.  We are proud to showcase our latest AV installation at the Commercial Credit. From high definition projection to seamless audio integration, we’ve created an environment where excellence can thrive.",
      category: "Coparate"
    },
    {
      title: "VALIBLE FINANCE",
      image: "https://res.cloudinary.com/dtscqhcop/image/upload/v1771126952/WhatsApp_Image_2026-02-15_at_09.09.50_1_yxec3f.jpg",
      description: "We are proud to showcase our final project for Vallibel Finance. Our team has integrated a complete AV solution, featuring high quality projection and seamless audio distribution, perfectly tailored for this corporate space.",
      category: "Coparate"
    },
    {
      title: "HAVELOCKCITY MALL CARGILLS ",
      image: "https://res.cloudinary.com/dtscqhcop/image/upload/v1771126952/WhatsApp_Image_2026-02-15_at_09.09.51_1_axhkwr.jpg",
      description: "We are pleased to announce the completion of our latest installation at Cargills Food City, Havelock City Mall. Our team has delivered a clean, integrated audio solution designed to enhance the atmosphere of this modern retail space.",
      category: "PA System"
    },
    {
      title: "KANDOORI RESTURANT",
      image: "https://res.cloudinary.com/dtscqhcop/image/upload/v1771126953/WhatsApp_Image_2026-02-15_at_09.09.51_toenn6.jpg",
      description: "Enhancing the dining experience at Kandoori Restaurant. Our team has integrated a seamless audio solution designed to provide balanced sound distribution and a perfect atmosphere for guests.",
      category: "Resturant"
    },
      {
      title: "PEOPLE'S BANK",
      image: "https://res.cloudinary.com/dtscqhcop/image/upload/v1771304126/WhatsApp_Image_2026-02-17_at_10.20.57_xxilws.jpg",
      description: "Background music and paging systems for premium hotels and resorts.",
      category: "Coparate "
    },
 
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. EXPLORE SECTION (Brand Story) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Circular Image Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative group">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-red-900/40"
              />
              <img
                src="https://res.cloudinary.com/dtscqhcop/image/upload/v1764134972/image_explore_hzjrpg.jpg"
                alt="Dynamic AV Team"
                className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full object-cover z-10 relative p-4"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="absolute bottom-10 right-10 bg-white p-4 rounded-2xl shadow-2xl z-20 border border-slate-100"
              >
                <img
                  src="https://res.cloudinary.com/dtscqhcop/image/upload/v1764127303/DAVT_NEW_LOGO_PNG_lhud6n.png"
                  alt="Logo"
                  className="h-8"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black"
          >
            <h4 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Our Heritage</h4>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              The World of <br /> Dynamic AV
            </h2>
            <p className="text-black text-lg mb-8 leading-relaxed">
              As Sri Lanka's leading AV integrator, we don't just sell equipment. 
              We engineer experiences. From acoustic treatment to complex automation 
              logic, our team ensures your space works for you perfectly, every time.
            </p>
            <Link to="/about">
              <Button variant="secondary" className="px-10">Learn Our Story</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. BEST PROJECTS SECTION */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase text-sm tracking-widest">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Where Technology Meets Design.</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative h-85 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[8px] md:text-xs font-black text-red-600 uppercase mb-1 tracking-widest">{project.category}</p>
                  <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30">
                    <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <ServicesGrid />



      {/* 6. PROJECT MODAL POPUP */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center p-6 z-[100] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedProject.image} className="w-full h-72 object-cover" />
              <div className="p-8">
                <span className="text-red-600 font-bold text-sm uppercase">{selectedProject.category}</span>
                <h3 className="text-3xl font-bold mt-2 mb-4 text-slate-900">{selectedProject.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{selectedProject.description}</p>
                <div className="flex gap-4">
                   <Button onClick={() => setSelectedProject(null)} className="w-full">Back to Projects</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
