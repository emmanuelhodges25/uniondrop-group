import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative py-32 px-4 md:px-6 overflow-hidden">

        <div className="absolute inset-0 bg-black" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-225 bg-cyan-500/10 blur-[180px] rounded-full" />

        <div className="relative max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black"
          >
            Our{" "}
            <span className="text-cyan-400">Services</span>
          </motion.h1>

          <p className="mt-8 text-slate-300 max-w-3xl mx-auto">
            We deliver scalable digital systems, SaaS platforms,
            automation tools, and enterprise-grade software solutions.
          </p>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-4 md:px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            "Web Application Development",
            "SaaS Product Engineering",
            "Automation Systems",
            "API & Backend Architecture",
            "Dashboard Systems",
            "Cloud Deployment Solutions",
          ].map((service) => (
            <div
              key={service}
              className="
                p-8
                rounded-3xl
                bg-slate-950/80
                border border-cyan-500/10
                hover:border-cyan-400
                transition
              "
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {service}
              </h3>

              <p className="text-slate-400 mt-4 text-sm">
                Enterprise-grade implementation designed for scalability and performance.
              </p>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}