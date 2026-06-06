import { useState } from "react";

type Plan = "standard" | "premium" | null;

export default function Payments() {
  const [selected, setSelected] = useState<Plan>(null);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!selected) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/stripe/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: selected,
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // redirect to Stripe
      }
    } catch (err) {
      console.error(err);
      alert("Payment failed to initialize.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <section className="py-24 text-center px-4">
        <h1 className="text-5xl font-black text-cyan-400">
          Secure Checkout
        </h1>
        <p className="text-slate-400 mt-4">
          Complete your payment securely via Stripe
        </p>
      </section>

      {/* PLANS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-4">

        {/* STANDARD */}
        <div
          onClick={() => setSelected("standard")}
          className={`p-8 rounded-3xl border cursor-pointer transition ${
            selected === "standard"
              ? "border-cyan-400 bg-slate-950"
              : "border-cyan-500/10 bg-slate-950/60"
          }`}
        >
          <h2 className="text-xl font-bold text-cyan-400">Standard</h2>
          <p className="text-3xl font-black mt-4">$5</p>
          <p className="text-slate-400 mt-4">
            Basic digital service execution
          </p>
        </div>

        {/* PREMIUM */}
        <div
          onClick={() => setSelected("premium")}
          className={`p-8 rounded-3xl border cursor-pointer transition ${
            selected === "premium"
              ? "border-cyan-400 bg-slate-950"
              : "border-cyan-500/10 bg-slate-950/60"
          }`}
        >
          <h2 className="text-xl font-bold text-cyan-400">Premium</h2>
          <p className="text-3xl font-black mt-4">$10</p>
          <p className="text-slate-400 mt-4">
            Advanced systems & SaaS builds
          </p>
        </div>
      </div>

      {/* CHECKOUT BUTTON */}
      <div className="text-center mt-12">
        <button
          onClick={handleCheckout}
          disabled={!selected || loading}
          className={`px-8 py-4 rounded-xl font-bold transition ${
            selected
              ? "bg-cyan-500 text-black hover:scale-105"
              : "bg-slate-800 text-slate-500 cursor-not-allowed"
          }`}
        >
          {loading ? "Processing..." : "Proceed to Stripe Checkout"}
        </button>
      </div>
    </div>
  );
}