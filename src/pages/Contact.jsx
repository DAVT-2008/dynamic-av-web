import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../config/config.js";

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

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus('');

    try {
      console.log('Submitting contact form:', form);

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        category: form.category,
        message: form.message,
        to_email: 'info.avstorelk@gmail.com'
      };

      console.log(templateParams);
      

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS response: Email sent successfully');

      setSubmitStatus('success');
      setForm({ name: '', email: '', phone: '', category: '', message: '' });

      alert(`Thanks for contacting us, ${form.name}! We'll get back to you soon.`);

    } catch (error) {
      console.error('Contact form error details:', error);
      console.error('Error message:', error.message);
      setSubmitStatus('error');
      alert(`Error: ${error.message || 'There was an error sending your message. Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };


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

              {/* UPDATED: Heading is now forced to a single line with whitespace-nowrap */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-950 uppercase leading-none whitespace-nowrap">
                Get in <span className="text-red-800">Touch.</span>
              </h2>

              {/* UPDATED: Paragraph is now justified */}
              <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed max-w-md text-justify [text-justify:inter-word]">
                Reach out to our engineering team for specialized audio-visual
                consultations and enterprise-grade solutions. We specialize in
                integrating complex systems for high-end corporate environments
                and private residences across Sri Lanka.
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

          {/* --- RIGHT SIDE: FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Full Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter name"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-800 transition-all text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+94"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-800 transition-all text-sm font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-800 transition-all text-sm font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-800 transition-all text-sm font-medium appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select an inquiry type</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Message</label>
                <textarea
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-800 transition-all text-sm font-medium resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
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
