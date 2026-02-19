import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/partners", label: "Partners" },
    /* ADDED: External link for the Store */
    { path: "https://avstore.lk/", label: "Online Shop", isExternal: true },
    { path: "/contact", label: "Contact" },
  ];

  const solutions = [
    "Hospitality Solutions",
    "Cinema Solutions",
    "Live Sound Solutions",
    "Installed Sound Solutions",
    "Public Address System Solutions",
    "Microphone and Wireless System Solutions",
    "Audio Conferencing and Interpretation Solutions",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] px-3 md:px-10 py-3 md:py-4 transition-all">
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-3 rounded-full transition-all duration-500 border
        ${scrolled 
          ? "bg-white/95 backdrop-blur-xl border-slate-200 shadow-md" 
          : "bg-white border-white/20 shadow-sm"}`}
      >
        
        {/* 1. LOGO */}
        <Link to="/" className="relative z-[1001] flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dtscqhcop/image/upload/v1764127303/DAVT_NEW_LOGO_PNG_lhud6n.png"
            alt="Dynamic AV"
            className="h-9 md:h-14 w-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* 2. NAVIGATION */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((item, i) => (
            <React.Fragment key={i}>
              {item.isExternal ? (
                /* EXTERNAL RETAIL LINK */
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-bold text-slate-800 hover:text-red-700 transition-all"
                >
                  {item.label}
                </a>
              ) : (
                /* INTERNAL PAGE LINKS */
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-bold transition-all
                    ${isActive ? "text-red-700" : "text-slate-800 hover:text-red-700"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="thinUnderline"
                          className="absolute bottom-0 left-4 right-4 h-[2px] bg-red-700 rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )}

              {/* Solutions Dropdown Trigger */}
              {i === 0 && (
                <div 
                  className="relative group"
                  onMouseEnter={() => setShowSolutions(true)}
                  onMouseLeave={() => setShowSolutions(false)}
                >
                  <button className={`flex items-center gap-1.5 px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-bold transition-all ${showSolutions ? "text-red-700" : "text-slate-800"}`}>
                    Solutions
                    <motion.span animate={{ rotate: showSolutions ? 180 : 0 }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M6 9l6 6 6-6"/></svg>
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {showSolutions && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-100 rounded-2xl shadow-xl p-4 overflow-hidden"
                      >
                        <div className="flex flex-col gap-1">
                          {solutions.map((item, idx) => (
                            <Link 
                              key={idx} 
                              to={`/solutions/${item.toLowerCase().replace(/ /g, "-")}`}
                              className="p-2 text-[10px] uppercase tracking-wider text-slate-500 hover:text-red-700 hover:bg-slate-50 rounded-lg transition-all flex items-center gap-3"
                            >
                              <div className="w-1 h-1 bg-red-600 rounded-full" />
                              {item}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 3. MOBILE TOGGLE */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link to="/contact" className="hidden sm:block">
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "#000" }}
              className="px-5 md:px-6 py-2 bg-red-800 text-white text-[9px] font-black tracking-widest uppercase rounded-full transition-all"
            >
              Inquiry
            </motion.button>
          </Link>

          <button 
            onClick={() => setOpen(!open)} 
            className="z-[1001] w-9 h-9 flex flex-col items-center justify-center gap-1.5 bg-slate-50 rounded-full transition-colors lg:hidden"
            aria-label="Toggle Menu"
          >
            <motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="w-4 h-[1.5px] bg-slate-900 block" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="w-4 h-[1.5px] bg-slate-900 block" />
            <motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="w-4 h-[1.5px] bg-slate-900 block" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[1000] flex flex-col p-10 lg:hidden overflow-y-auto"
          >
            <div className="mt-20 flex flex-col justify-between h-full relative z-10">
              <div className="flex flex-col gap-6">
                {navLinks.map((item, i) => (
                  <React.Fragment key={i}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      {item.isExternal ? (
                         <a 
                         href={item.path}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-xl md:text-5xl font-serif italic text-red-700 hover:text-slate-900 transition-colors flex items-center justify-between group"
                       >
                         {item.label}
                         <span className="text-red-700 opacity-100 transition-all text-2xl">↗</span>
                       </a>
                      ) : (
                        <Link 
                        to={item.path} 
                        onClick={() => setOpen(false)} 
                        className="text-xl md:text-5xl font-serif italic text-slate-900 hover:text-red-700 transition-colors flex items-center justify-between group"
                      >
                        {item.label}
                        <span className="text-red-700 opacity-0 group-hover:opacity-100 transition-all text-2xl">→</span>
                      </Link>
                      )}
                    </motion.div>

                    {i === 0 && (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                        className="border-l-2 border-slate-100 pl-4"
                      >
                        <button 
                          onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                          className="text-2xl font-serif text-slate-500 flex items-center gap-4 py-2"
                        >
                          Solutions
                          <motion.span animate={{ rotate: mobileSolutionsOpen ? 180 : 0 }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                          </motion.span>
                        </button>
                        
                        <AnimatePresence>
                          {mobileSolutionsOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col gap-4 mt-4"
                            >
                              {solutions.map((sol, sIdx) => (
                                <Link
                                  key={sIdx}
                                  to={`/solutions/${sol.toLowerCase().replace(/ /g, "-")}`}
                                  onClick={() => setOpen(false)}
                                  className="text-xs uppercase tracking-widest text-slate-400 hover:text-red-700 flex items-center gap-3"
                                >
                                  <div className="w-1 h-1 bg-red-600 rounded-full" />
                                  {sol}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-8 pb-4 mt-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-red-800 font-bold mb-4">Get in Touch</p>
                <p className="text-slate-900 font-serif text-xl">+94 11 258 7677</p>
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <button className="mt-8 w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl">
                    Book a Consultation
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
