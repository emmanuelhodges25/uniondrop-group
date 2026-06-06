import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Enterprise Web Platforms",
    description:
      "Scalable web systems designed for business operations, automation, and long-term growth.",
  },
  {
    title: "Custom Software Engineering",
    description:
      "Tailored software solutions built to solve complex business and operational challenges.",
  },
  {
    title: "Business Automation Systems",
    description:
      "Automated workflows and systems that reduce manual work and improve efficiency.",
  },
  {
    title: "Digital Infrastructure Design",
    description:
      "Architecting backend-ready systems for scalable digital ecosystems.",
  },
  {
    title: "Cloud & API Architecture",
    description:
      "Robust API systems and cloud-native infrastructure built for performance and scale.",
  },
  {
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS systems designed for monetization, users, and enterprise adoption.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-28 px-6 bg-black">

      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-6"
        >
          Core Capabilities
        </motion.h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-16">
          We design and build scalable digital systems that power modern businesses,
          automation workflows, and enterprise platforms.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {capabilities.map((item, index) => (
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
              <h3 className="text-xl font-bold text-cyan-400 mb-3">
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