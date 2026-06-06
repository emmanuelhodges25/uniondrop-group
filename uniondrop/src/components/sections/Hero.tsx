import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-slate-950 to-black" />

      <div className="absolute w-150 h-150 bg-cyan-500/10 blur-[160px] rounded-full -top-40 -left-40 animate-pulse" />
      <div className="absolute w-150 h-150 bg-blue-500/10 blur-[180px] rounded-full -bottom-50 -right-50 animate-pulse" />

      {/* CONTENT */}
      <div className="relative max-w-5xl text-center z-10">

        {/* BADGE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-cyan-400 tracking-[0.35em] text-xs mb-6"
        >
          ENTERPRISE DIGITAL INFRASTRUCTURE
        </motion.p>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-black leading-tight"
        >
          Build{" "}
          <span className="text-cyan-400">Scalable Systems</span>{" "}
          That Power Modern Business
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-slate-300 mt-6 text-base md:text-lg max-w-2xl mx-auto"
        >
          UnionDrop delivers enterprise SaaS platforms, automation systems,
          APIs, and digital infrastructure designed for scale and performance.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => navigate("/request")}
            className="px-7 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:scale-105 transition"
          >
            Start a Project
          </button>

          <button
            onClick={() => navigate("/services")}
            className="px-7 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:border-cyan-400 transition"
          >
            Explore Services
          </button>
        </motion.div>

      </div>
    </section>
  );
}