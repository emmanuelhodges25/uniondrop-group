import { useState } from "react";

export default function RequestProject() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(
      "Project request submitted successfully. Backend integration coming next."
    );

    console.log(form);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-6 py-24">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm">
            Project Consultation
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-black">
            Start Your Next
            <span className="text-cyan-400"> Digital Project</span>
          </h1>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Tell us about your goals and we'll help design the right
            solution for your business.
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="
          bg-slate-950/70
          border border-cyan-500/10
          rounded-3xl
          p-8
          backdrop-blur-xl
          space-y-6
        "
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="bg-black border border-cyan-500/10 rounded-xl p-4"
              required
            />

            <input
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="bg-black border border-cyan-500/10 rounded-xl p-4"
              required
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="bg-black border border-cyan-500/10 rounded-xl p-4"
            />

            <input
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="bg-black border border-cyan-500/10 rounded-xl p-4"
            />

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="bg-black border border-cyan-500/10 rounded-xl p-4"
            >
              <option value="">Select Service</option>
              <option>Web Application</option>
              <option>SaaS Platform</option>
              <option>Automation System</option>
              <option>API Integration</option>
              <option>Cloud Infrastructure</option>
            </select>

            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="bg-black border border-cyan-500/10 rounded-xl p-4"
            >
              <option value="">Project Budget</option>
              <option>$500 - $1,000</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000 - $10,000</option>
              <option>$10,000+</option>
            </select>

          </div>

          <textarea
            rows={6}
            name="description"
            placeholder="Describe your project..."
            value={form.description}
            onChange={handleChange}
            className="
            w-full
            bg-black
            border border-cyan-500/10
            rounded-xl
            p-4
          "
          />

          <button
            type="submit"
            className="
            w-full
            py-4
            rounded-xl
            bg-cyan-500
            text-black
            font-bold
            hover:scale-[1.01]
            transition
          "
          >
            Request Consultation
          </button>

        </form>

      </div>

    </div>
  );
}