import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Inquiries() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    salesRep: "",
    notes: "",
  });

  const categories = [
    "Experience Center",
    "Retail",
    "Projects",
    "Tenders",
    "Services",
    "Installation",
    "Distribution",
  ];

  const salesReps = [
    "Manil Fernando",
    "Mohan Abeysinghe",
    "Malik Fernando",
    "Sales Team A",
    "Sales Team B",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", formData);
    alert("Inquiry submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      salesRep: "",
      notes: "",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-bold text-slate-900">
            Inquiry Form
          </h1>
          <p className="text-slate-600 mt-3">
            Tell us about your requirements and our team will contact you.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40 p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Inquiry Category */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Inquiry Category
              </label>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Category</option>
                {categories.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sales Representative */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Sales Representative
              </label>
              <select
                name="salesRep"
                value={formData.salesRep}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Sales Representative</option>
                {salesReps.map((rep, i) => (
                  <option key={i} value={rep}>
                    {rep}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Special Notes
              </label>
              <textarea
                name="notes"
                rows="4"
                value={formData.notes}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10 text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-md"
            >
              Submit Inquiry
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
