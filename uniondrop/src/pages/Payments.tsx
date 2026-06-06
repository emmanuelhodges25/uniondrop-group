import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Plan = "standard" | "premium" | null;

export default function Payments() {
  const [searchParams] = useSearchParams();

  // ✅ SAFE: derive value from URL once per render
  const urlPlan = useMemo(() => {
    const plan = searchParams.get("plan");
    if (plan === "standard") return "standard";
    if (plan === "premium") return "premium";
    return null;
  }, [searchParams]);

  // ✅ initialize state safely (NO effect needed)
  const [selected, setSelected] = useState<Plan>(urlPlan);

  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!selected) return;

    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5000/api/stripe/create-checkout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan: selected }),
        }
      );

      const data = await res.json();

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error(err);
      alert("Payment failed.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-24">

      <h1 className="text-5xl font-black text-cyan-400 text-center">
        Secure Checkout
      </h1>

      <p className="text-slate-400 text-center mt-4">
        Choose your plan and continue to Stripe
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-12">

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
        </div>

      </div>

      <div className="text-center mt-12">
        <button
          onClick={handleCheckout}
          disabled={!selected || loading}
          className="px-10 py-4 bg-cyan-500 text-black font-bold rounded-xl"
        >
          {loading ? "Redirecting..." : "Proceed to Checkout"}
        </button>
      </div>

    </div>
  );
}