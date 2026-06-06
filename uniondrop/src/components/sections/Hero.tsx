import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* BASE BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* 3D GRID SYSTEM */}
      <div
        className="
          absolute inset-0
          opacity-[0.08]
          bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)]
          bg-size-[60px_60px]
        "
      />

      {/* FLOATING STRUCTURE LAYERS */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute w-175 h-175 bg-cyan-500/10 blur-[160px] rounded-full -top-40 -left-40"
      />

      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute w-175 h-175 bg-blue-500/10 blur-[180px] rounded-full bottom-0 right-0"
      />

      {/* “3D STRUCTURE LINES” */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-1/2 left-0 w-full h-px bg-cyan-400" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-cyan-400" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-6xl px-4">

        {/* LOGO BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-10"
        >
          <img src={logo} className="w-6 h-6" />
          <span className="text-cyan-400 text-sm">
            UnionDrop Systems
          </span>
        </motion.div>

        {/* MAIN TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
        >
          Build Digital Systems That{" "}
          <span className="text-cyan-400">Scale Beyond Limits</span>
        </motion.h1>

        {/* DESCRIPTION */}
        <p className="mt-8 text-slate-300 max-w-3xl mx-auto">
          A modern digital engineering platform building SaaS systems,
          automation layers, and enterprise software architecture for
          the future of business.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/signup"
            className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:scale-105 transition"
          >
            Start Building
          </Link>

          <a
            href="#services"
            className="px-8 py-4 border border-cyan-500/20 text-cyan-400 rounded-xl"
          >
            Explore Services
          </a>
        </div>

      </div>
    </section>
  );
}