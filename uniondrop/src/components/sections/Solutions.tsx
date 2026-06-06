import { motion } from "framer-motion";

const solutions = [
  {
    title: "Business Process Automation",
    description:
      "Replace manual workflows with intelligent systems that improve speed, accuracy, and operational efficiency.",
  },
  {
    title: "Enterprise Web Applications",
    description:
      "Custom-built platforms designed for internal operations, customer management, and business scaling.",
  },
  {
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS systems built for monetization, user growth, and scalable digital business models.",
  },
  {
    title: "Data & Analytics Systems",
    description:
      "Transform raw business data into actionable insights through dashboards and reporting systems.",
  },
  {
    title: "API & System Integration",
    description:
      "Connect fragmented systems into unified digital ecosystems through secure APIs and integrations.",
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize legacy business systems into scalable, cloud-ready digital infrastructure.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-28 px-6 bg-black">

      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-6"
        >
          Solutions We Deliver
        </motion.h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-16">
          We solve real business problems with scalable digital systems designed
          to improve performance, efficiency, and growth.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="
                p-6 rounded-2xl
                bg-slate-900/40
                border border-cyan-500/10
                hover:border-cyan-400
                transition duration-300
              "
            >

              <h3 className="text-lg font-bold text-cyan-400 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}