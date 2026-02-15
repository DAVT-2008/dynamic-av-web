import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const categories = [
    "Experience Center",
    "Retail",
    "Projects",
    "Tenders",
    "Services",
    "Installation",
    "Distributions"
  ];

  return (
    <section className="relative min-h-screen bg-white text-slate-900 pt-40 pb-24">
      
      {/* Simple Clean Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* --- LEFT SIDE: INFO --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div className="space-y-6">
              <span className="text-red-700 font-bold text-[10px] uppercase tracking-[0.4em] block">
                Connect With Us
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-950 uppercase leading-none">
                Get in <br /> 
                <span className="text-red-800">Touch.</span>
              </h2>
              <p className="text-slate-500 text-lg font-normal leading-relaxed max-w-md">
                Reach out to our engineering team for specialized audio-visual 
                consultations and enterprise-grade solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-slate-100 pt-12">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Email</p>
                <p className="text-slate-900 font-medium">sales@davtechnologies.com</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Phone</p>
                <p className="text-slate-900 font-medium">+94 11 258 7677</p>
              </div>
              <div className="md:col-span-2 space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Location</p>
                <p className="text-slate-900 font-medium leading-relaxed">
                  No 17, Lauries Place, Colombo 04, Sri Lanka.
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: SIMPLE FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-8 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter name"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-800 transition-all text-sm font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+94"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-800 transition-all text-sm font-medium" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-800 transition-all text-sm font-medium" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Category</label>
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-800 transition-all text-sm font-medium appearance-none cursor-pointer">
                  <option value="" disabled selected>Select an inquiry type</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?" 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-800 transition-all text-sm font-medium resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01, backgroundColor: "#000" }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-red-800 text-white font-black uppercase tracking-[0.3em] text-[11px] rounded-xl shadow-lg transition-all"
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}