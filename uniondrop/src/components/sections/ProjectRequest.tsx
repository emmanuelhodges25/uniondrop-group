import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectRequest() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Backend-ready payload (future API integration point)
    console.log("PROJECT REQUEST:", form);

    alert("Request submitted successfully. We will contact you soon.");
  };

  return (
    <section className="py-28 px-6 bg-black">

      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black">
            Request a Project
          </h2>

          <p className="text-slate-400 mt-4">
            Submit your project details and our team will analyze your requirements.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="
            space-y-5
            p-8 rounded-2xl
            bg-slate-900/40
            border border-cyan-500/10
          "
        >

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black border border-cyan-500/10 text-white"
            required
          />

          <input
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black border border-cyan-500/10 text-white"
            required
          />

          <input
            name="company"
            placeholder="Company (optional)"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black border border-cyan-500/10 text-white"
          />

          <select
            name="projectType"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black border border-cyan-500/10 text-white"
            required
          >
            <option value="">Select Project Type</option>
            <option value="web-app">Web Application</option>
            <option value="automation">Automation System</option>
            <option value="saas">SaaS Product</option>
            <option value="dashboard">Dashboard System</option>
            <option value="api">API / Backend System</option>
          </select>

          <select
            name="budget"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black border border-cyan-500/10 text-white"
            required
          >
            <option value="">Select Budget</option>
            <option value="5">$5 - Standard Request</option>
            <option value="10">$10 - Premium Build</option>
          </select>

          <textarea
            name="details"
            placeholder="Describe your project requirements..."
            rows={5}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black border border-cyan-500/10 text-white"
            required
          />

          <button
            type="submit"
            className="
              w-full py-3
              bg-cyan-500
              text-black
              font-bold
              rounded-xl
              hover:scale-[1.02]
              transition
            "
          >
            Submit Request
          </button>

        </motion.form>

      </div>
    </section>
  );
}