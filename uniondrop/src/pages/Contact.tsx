import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-6 py-24">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <div className="inline-flex px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
            Contact UnionDrop
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-black">
            Let's Build Something
            <span className="text-cyan-400"> Exceptional</span>
          </h1>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Reach out to discuss your project, partnership opportunities,
            or digital transformation goals.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div
            className="
            p-8
            rounded-3xl
            border border-cyan-500/10
            bg-slate-950/50
          "
          >
            <h2 className="text-2xl font-bold mb-8">
              Company Information
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-cyan-400 font-semibold">
                  Company
                </p>
                <p className="text-slate-300">
                  UnionDrop Innovation
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  Developer
                </p>
                <p className="text-slate-300">
                  Emmanuel Hodges
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  Location
                </p>
                <p className="text-slate-300">
                  Liberia
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  Support
                </p>
                <p className="text-slate-300">
                  support@uniondrop.com
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <form
            onSubmit={handleSubmit}
            className="
            p-8
            rounded-3xl
            border border-cyan-500/10
            bg-slate-950/50
            space-y-5
          "
          >

            <input
              placeholder="Full Name"
              className="w-full p-4 rounded-xl bg-black border border-cyan-500/10"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl bg-black border border-cyan-500/10"
              required
            />

            <textarea
              rows={6}
              placeholder="How can we help?"
              className="w-full p-4 rounded-xl bg-black border border-cyan-500/10"
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
            "
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-400 text-center">
                Message submitted successfully.
              </p>
            )}

          </form>

        </div>

      </div>

    </div>
  );
}