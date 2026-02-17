import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Partners", path: "/partners" },
    { label: "Contact", path: "/contact" },
  ];

  const socialMedia = [
    { 
      name: "Facebook", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>, 
      url: "https://www.facebook.com/share/1Sm9BmG6FE/" 
    },
    { 
      name: "Instagram", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" /></svg>, 
      url: "https://www.instagram.com/dynamic_av_official?igsh=MW5sZ3VlOGV0ODZvZA==" 
    },
    { 
      name: "LinkedIn", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" /></svg>, 
      url: "https://www.linkedin.com/company/dynamic-av-technologies-pvt-ltd/" 
    },
    
  ];

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Micro-Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 pb-20">
          
          {/* 1. BRAND IDENTITY */}
          <div className="md:col-span-5 space-y-10">
            <Link to="/" className="inline-block">
              <div className="bg-white p-4 rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-500">
                <img
                  src="https://res.cloudinary.com/dtscqhcop/image/upload/v1770263450/DAVT_Logo_HD_h36xcy.png"
                  alt="Dynamic AV"
                  className="h-10 w-auto object-contain" 
                />
              </div>
            </Link>
            
            <div className="space-y-6 max-w-sm">
           
              <p className="text-white/70 text-sm font-medium leading-relaxed tracking-wide uppercase">
                Sri Lanka's leading system integrator for high-stakes corporate and hospitality environments.
              </p>
              
              <div className="flex gap-3 pt-4">
                {socialMedia.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ y: -4, backgroundColor: "#b91c1c", borderColor: "#b91c1c" }}
                    className="w-11 h-11 border border-white/10 rounded-xl flex items-center justify-center text-white/50 transition-all duration-300 bg-white/5"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* 2. NAVIGATION LINKS */}
          <div className="md:col-span-3 md:pl-12 space-y-10">
            <div className="space-y-2">
              <div className="h-px w-8 bg-red-700" />
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em]">Explore</h4>
            </div>
            <ul className="space-y-5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="text-white/60 hover:text-white transition-all font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-3 group"
                  >
                    <span className="w-0 h-px bg-red-700 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT & LOGISTICS */}
          <div className="md:col-span-4 space-y-10">
            <div className="space-y-2">
              <div className="h-px w-8 bg-red-700" />
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em]">Logistics</h4>
            </div>
            <div className="space-y-10">
              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-red-700/50 transition-colors">
                  <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30"></p>
                  <p className="text-white font-bold text-xs leading-relaxed uppercase tracking-widest">
                    No 17, Lauries Place, Colombo 04,<br />
                    Western Province, Sri Lanka.
                  </p>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 space-y-6">
                <div className="flex items-center gap-5 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-red-700/50 transition-colors">
                    <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <p className="text-white font-black text-2xl tracking-tighter uppercase">+94 11 258 7677</p>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-red-700/50 transition-colors">
                    <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <a href="mailto:sales@davtechnologies.com" className="text-white text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-700 transition-colors">
                    sales@davtechnologies.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="text-[9px] font-black text-white/20 tracking-[0.4em] uppercase">
              &copy; {currentYear} DYNAMIC AV TECHNOLOGIES
            </div>
            <div className="hidden md:block w-px h-3 bg-white/10" />
            <div className="text-[9px] font-black text-white/20 tracking-[0.4em] uppercase">
              System Code: DAVT-INST-2008
            </div>
          </div>
          
          <div className="flex gap-10 text-[9px] font-black text-white/20 tracking-[0.4em] uppercase">
            <Link to="#" className="hover:text-red-700 transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-red-700 transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}