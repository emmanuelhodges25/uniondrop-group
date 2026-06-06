import { useState } from "react";

export default function Request() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    details: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.service) {
      alert("Please fill required fields");
      return;
    }

    alert("Request submitted successfully (frontend only)");
    setForm({ name: "", email: "", service: "", details: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-24">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-black text-cyan-400 text-center">
          Request a Service
        </h1>

        <p className="text-slate-400 text-center mt-4">
          Submit your project request to UnionDrop
        </p>

        <div className="mt-12 space-y-4">

          <input
            className="w-full p-4 bg-slate-950 border border-cyan-500/10 rounded-xl"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="w-full p-4 bg-slate-950 border border-cyan-500/10 rounded-xl"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <select
            className="w-full p-4 bg-slate-950 border border-cyan-500/10 rounded-xl"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            <option value="">Select Service</option>
            <option value="standard">Standard ($5)</option>
            <option value="premium">Premium ($10)</option>
          </select>

          <textarea
            className="w-full p-4 bg-slate-950 border border-cyan-500/10 rounded-xl"
            placeholder="Project Details"
            rows={5}
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
          />

          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-cyan-500 text-black font-bold rounded-xl"
          >
            Submit Request
          </button>

        </div>

      </div>

    </div>
  );
}