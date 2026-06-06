import { motion } from "framer-motion";

const plans = [
  {
    name: "Standard Service",
    price: "$5",
    description:
      "Basic digital solution request including small web features, fixes, or simple integrations.",
    features: [
      "Single feature/task delivery",
      "Basic support",
      "Standard turnaround",
    ],
    cta: "Request Standard",
  },
  {
    name: "Premium Service",
    price: "$10",
    description:
      "Advanced digital solutions including systems, dashboards, automation, and integrations.",
    features: [
      "Full system or feature build",
      "Priority support",
      "Faster delivery",
      "Advanced implementation",
    ],
    cta: "Request Premium",
  },
];

export default function Pricing() {
  return (
    <section className="py-28 px-6 bg-black">

      <div className="max-w-5xl mx-auto text-center">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-6"
        >
          Pricing Plans
        </motion.h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-16">
          Simple, transparent pricing for digital solutions and custom development requests.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="
                p-8 rounded-2xl
                bg-slate-900/40
                border border-cyan-500/10
                hover:border-cyan-400
                transition duration-300
              "
            >

              <h3 className="text-2xl font-bold text-cyan-400">
                {plan.name}
              </h3>

              <p className="text-4xl font-black mt-4">
                {plan.price}
              </p>

              <p className="text-slate-400 mt-4 text-sm leading-relaxed">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-2 text-slate-300 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className="
                  mt-8 w-full
                  px-6 py-3
                  bg-cyan-500
                  text-black
                  font-bold
                  rounded-xl
                  hover:scale-[1.02]
                  transition
                "
              >
                {plan.cta}
              </button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}