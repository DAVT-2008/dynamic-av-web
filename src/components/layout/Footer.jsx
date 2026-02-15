import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
      ),
      url: "#",
    },
    {
      name: "Instagram",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" /></svg>
      ),
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" /></svg>
      ),
      url: "#",
    },
    {
      name: "YouTube",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.08C5.12 19.54 12 19.54 12 19.54s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33zM9.75 15.02V8.48L15.45 11.75l-5.7 3.27z" /></svg>
      ),
      url: "#",
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pb-20">
          
          {/* 1. BRAND SECTION */}
          <div className="md:col-span-5 space-y-10">
            <Link to="/" className="inline-block group">
              <div className="bg-white px-4 py-3 rounded-lg shadow-lg transition-transform group-hover:scale-105 duration-300">
                <img
                  src="https://res.cloudinary.com/dtscqhcop/image/upload/v1770263450/DAVT_Logo_HD_h36xcy.png"
                  alt="Dynamic AV"
                  className="h-8 w-auto object-contain" 
                />
              </div>
            </Link>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight text-white uppercase leading-snug">
                Engineering <br />
                <span className="text-white/40 font-medium tracking-widest text-sm block mt-2">Audio-Visual Perfection.</span>
              </h3>
              
              <div className="flex gap-4 pt-2">
                {socialMedia.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ y: -3, color: "#ffffff", backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/30 transition-all duration-300"
                  >
                    <div className="w-5 h-5">{social.icon}</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* 2. NAVIGATION LINKS */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em]">Explore</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="text-white/50 hover:text-white transition-colors font-semibold text-xs uppercase tracking-widest block group"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT SECTION */}
          <div className="md:col-span-4 space-y-8">
            <h4 className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em]">Contact Details</h4>
            <div className="space-y-8">
              
              <div className="flex items-start gap-4">
                <div className="mt-1 text-white/20">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <p className="text-white/60 font-medium text-xs leading-relaxed tracking-wider uppercase">
                  Dynamic AV Technologies (Pvt) Ltd.<br />
                  No 18, Lauries Place, Colombo 04,<br />
                  Western Province, Sri Lanka.
                </p>
              </div>
              
              <div className="space-y-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="text-white/20">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <p className="text-white font-bold text-xl tracking-tighter uppercase">+94 11 258 7677</p>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="text-white/20">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <a href="mailto:sales@davtechnologies.com" className="text-red-600 text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-colors">
                    sales@davtechnologies.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[8px] font-bold text-white/20 tracking-[0.4em] uppercase">
            &copy; {currentYear} DYNAMIC AV TECHNOLOGIES // ACCESS_POINT_01
          </div>
          
          <div className="flex gap-10 text-[8px] font-bold text-white/20 tracking-[0.4em] uppercase">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}