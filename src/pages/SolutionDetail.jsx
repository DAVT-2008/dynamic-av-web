import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

// Centralized Data for Solutions with Project Arrays
const solutionsData = {
  "cinema-solutions": {
    title: "Cinema Solutions",
    desc: "From private home theaters to commercial multiplexes, we deliver the ultimate cinematic experience.",
    heroImage: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid6_zxah41.jpg",
    features: ["4K Projection Systems", "Dolby Atmos Integration", "Acoustic Calibration", "Custom Automation"],
    projects: [
      {
        name: "Indenpendance Archade",
        details: "Complete acoustic overhaul and 4K digital projection system integration for one of Colombo's most iconic screens.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid6_zxah41.jpg"
      },
      {
        name: "Nuwara Eliya Complex",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      },
      {
        name: "Gampaha Complex",
        details: "Multi-screen audio-visual synchronization and lobby digital signage networking for a modern multiplex feel.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid3_dnzliw.jpg"
      },
            {
        name: "Dematagoda Complex",
        details: "Multi-screen audio-visual synchronization and lobby digital signage networking for a modern multiplex feel.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid3_dnzliw.jpg"
      },

    ]
  },
  "hospitality-solutions": {
    title: "Hospitality",
    desc: "Mobile, high-fidelity audio solutions for events, performers, and temporary installations.",
    heroImage: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid5_abkljf.jpg",
    features: ["Battery Powered", "Wireless Sync", "Rugged Design"],
    projects: [
            {
        name: "cinnaman lakeside",
        details: "Complete acoustic overhaul and 4K digital projection system integration for one of Colombo's most iconic screens.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid6_zxah41.jpg"
      },
      {
        name: "The Grand Maitland",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      },
      {
        name: "Hambantota Golf Resort & SPA",
        details: "Multi-screen audio-visual synchronization and lobby digital signage networking for a modern multiplex feel.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid3_dnzliw.jpg"
      },
      {
        name: "Mandarina Colombo",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      },
      {
        name: "Hilton Colombo",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      },
      {
        name: "Grandbell Hotel",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      }
    ] // Add projects here similarly
  },
  "live-sound-solutions": {
    title: "Live Sound Solutions",
    desc: "Professional grade audio rigs for concerts, festivals, and live broadcasting.",
    heroImage: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid_qgwr1b.jpg",
    features: ["Line Arrays", "Digital Mixing", "Dante Networking"],
    projects: [
      {
        name: "cinnaman lakeside",
        details: "Complete acoustic overhaul and 4K digital projection system integration for one of Colombo's most iconic screens.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid6_zxah41.jpg"
      },
      {
        name: "The Grand Maitland",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      },
      {
        name: "Hambantota Golf Resort & SPA",
        details: "Multi-screen audio-visual synchronization and lobby digital signage networking for a modern multiplex feel.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid3_dnzliw.jpg"
      },
      {
        name: "Mandarina Colombo",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      },
      {
        name: "Hilton Colombo",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      },
      {
        name: "Grandbell Hotel",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      }
    ]
  },
  // ... other solutions (Add 'projects: []' to each)

  "installed-sound-solutions": {
    title: "Installed Sound Solutions",
    desc: "Professional grade audio rigs for concerts, festivals, and live broadcasting.",
    heroImage: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid_qgwr1b.jpg",
    features: ["Line Arrays", "Digital Mixing", "Dante Networking"],
    projects: [
      {
        name: "cinnaman lakeside",
        details: "Complete acoustic overhaul and 4K digital projection system integration for one of Colombo's most iconic screens.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid6_zxah41.jpg"
      },
      {
        name: "The Grand Maitland",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      },
      {
        name: "Hambantota Golf Resort & SPA",
        details: "Multi-screen audio-visual synchronization and lobby digital signage networking for a modern multiplex feel.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid3_dnzliw.jpg"
      },
      {
        name: "Mandarina Colombo",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      },
      {
        name: "Hilton Colombo",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      },
      {
        name: "Grandbell Hotel",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      }
    ]
  },
    "live-sound-solutions": {
    title: "Live Sound Solutions",
    desc: "Professional grade audio rigs for concerts, festivals, and live broadcasting.",
    heroImage: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid_qgwr1b.jpg",
    features: ["Line Arrays", "Digital Mixing", "Dante Networking"],
    projects: [
      {
        name: "cinnaman lakeside",
        details: "Complete acoustic overhaul and 4K digital projection system integration for one of Colombo's most iconic screens.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid6_zxah41.jpg"
      },
      {
        name: "The Grand Maitland",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      },
      {
        name: "Hambantota Golf Resort & SPA",
        details: "Multi-screen audio-visual synchronization and lobby digital signage networking for a modern multiplex feel.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid3_dnzliw.jpg"
      },
      {
        name: "Mandarina Colombo",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      },
      {
        name: "Hilton Colombo",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      },
      {
        name: "Grandbell Hotel",
        details: "Immersive 7.1 surround sound installation and high-brightness 3D projection systems for a premium viewing experience.",
        photo: "https://res.cloudinary.com/dtscqhcop/image/upload/v1764137791/grid8_adhsdd.jpg"
      }
    ]
  },
};

export default function SolutionDetail() {
  const { id } = useParams();
  const data = solutionsData[id];

  if (!data) return <div className="py-40 text-center text-white">Solution not found.</div>;

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[65vh] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#050505]" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.h4 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-red-600 font-mono tracking-[0.4em] uppercase text-xs mb-4">Architecture_Report</motion.h4>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">{data.title}</motion.h1>
        </div>
      </section>

      {/* 2. CORE TECHNOLOGY DESCRIPTION */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
             <h2 className="text-3xl font-bold mb-6 text-red-700">The Technology Base</h2>
             <p className="text-slate-400 text-lg leading-relaxed">{data.desc}</p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 gap-3">
             {data.features.map((f, i) => (
               <div key={i} className="flex items-center gap-3 bg-white/5 p-3 border border-white/10 rounded-lg">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-wider">{f}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECT SHOWCASE (Horizontal Layout) */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-black uppercase tracking-tight">Recent <span className="text-red-700">Deployments</span></h2>
            <p className="text-slate-500 font-mono text-xs mt-2 uppercase tracking-widest">Case Study Portfolio</p>
          </div>

          <div className="space-y-32">
            {data.projects && data.projects.length > 0 ? (
              data.projects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  {/* LEFT SIDE: Project Details */}
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-4 mb-4">
                       <span className="text-red-600 font-mono text-xl">0{index + 1}</span>
                       <div className="h-px w-12 bg-red-600/30"></div>
                    </div>
                    <h3 className="text-4xl font-black uppercase mb-6 text-white">{project.name}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-red-700/50 pl-6">
                      {project.details}
                    </p>
                    <Link to="/contact">
                      <button className="text-red-600 font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-3 hover:text-white transition-colors">
                        View System Specs <span>→</span>
                      </button>
                    </Link>
                  </div>

                  {/* RIGHT SIDE: Project Photo */}
                  <div className="order-1 lg:order-2 group relative">
                    <div className="absolute -inset-4 bg-red-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-video">
                      <img 
                        src={project.photo} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-slate-600 italic">No case studies currently logged for this system node.</p>
            )}
          </div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="py-32 border-t border-white/5 text-center bg-[#050505] relative overflow-hidden">
         <div className="absolute inset-0 bg-red-900/5 blur-[120px] pointer-events-none" />
         <div className="relative z-10 max-w-2xl mx-auto px-6 flex flex-col items-center text-center">
            <h3 className="text-3xl font-black uppercase mb-8 tracking-tighter">Ready to Build Your <span className="text-red-700">Ideal Space?</span></h3>
            <Link to="/contact">
              <Button className="px-12 py-5 bg-red-700 hover:bg-red-600 border-none shadow-[0_10px_30px_rgba(185,28,28,0.2)]">
                Initialize Project Consultation
              </Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
