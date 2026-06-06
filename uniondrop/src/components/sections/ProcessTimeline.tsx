import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Requirement Analysis",
    description:
      "We analyze business needs, technical requirements, and define system objectives.",
  },
  {
    title: "System Architecture Planning",
    description:
      "We design scalable architecture, database structure, and API workflows.",
  },
  {
    title: "UI/UX Engineering",
    description:
      "We craft user-centric interfaces focused on performance, clarity, and usability.",
  },
  {
    title: "Development & Integration",
    description:
      "We build scalable frontend and backend systems with clean modular code.",
  },
  {
    title: "Testing & Optimization",
    description:
      "We test performance, security, responsiveness, and system stability.",
  },
  {
    title: "Deployment & Scaling",
    description:
      "We deploy to production environments and prepare systems for real-world scale.",
  },
];

export default function ProcessTimeline() {
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
          Our Process
        </motion.h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-16">
          A structured engineering workflow designed to ensure clarity, scalability,
          and predictable delivery for every project.
        </p>

        {/* TIMELINE */}
        <div className="space-y-6 relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-cyan-500/10 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`
                relative md:w-1/2 p-6 rounded-2xl
                bg-slate-900/40 border border-cyan-500/10
                ${index % 2 === 0 ? "md:ml-0" : "md:ml-auto"}
              `}
            >

              {/* DOT */}
              <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full" />

              <h3 className="text-lg font-bold text-cyan-400 mb-2">
                {step.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}