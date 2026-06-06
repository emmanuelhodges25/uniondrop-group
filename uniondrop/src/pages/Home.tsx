import Hero from "../components/sections/Hero";
import Capabilities from "../components/sections/Capabilities";
import TechnologyEcosystem from "../components/sections/TechnologyEcosystem";
import Solutions from "../components/sections/Solutions";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import ProjectRequest from "../components/sections/ProjectRequest";
import Footer from "../components/layout/Footer";
import TopBar from "../components/layout/TopBar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">

      {/* ================= PREMIUM BACKGROUND SYSTEM ================= */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-slate-950 to-black" />

        {/* Glow orbs */}
        <div className="absolute w-150 h-150 bg-cyan-500/10 blur-[160px] rounded-full -top-40 -left-40" />
        <div className="absolute w-150 h-150 bg-blue-500/10 blur-[180px] rounded-full -bottom-60 -right-60" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#0ff1,transparent_1px),linear-gradient(to_bottom,#0ff1,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      {/* ================= MAIN ================= */}
      <main className="relative z-10">

        {/* TOP BAR */}
        <TopBar />

        {/* HERO */}
        <section className="scroll-mt-24">
          <Hero />
        </section>

        {/* TRUST STRIP */}
        <section className="py-8 text-center border-y border-cyan-500/10 bg-black/40 backdrop-blur">
          <p className="text-slate-400 text-xs md:text-sm tracking-widest">
            ENTERPRISE SYSTEMS • SAAS ARCHITECTURE • AUTOMATION ENGINEERING • SCALABLE INFRASTRUCTURE
          </p>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="py-16">
          <Capabilities />
        </section>

        {/* TECHNOLOGY */}
        <section id="technology" className="py-16">
          <TechnologyEcosystem />
        </section>

        {/* SOLUTIONS */}
        <section id="solutions" className="py-16">
          <Solutions />
        </section>

        {/* PROCESS */}
        <section id="process" className="py-16">
          <ProcessTimeline />
        </section>

        {/* ================= PRICING CTA (ENTERPRISE STANDARD) ================= */}
        <section className="py-24 px-6 text-center">

          <h2 className="text-3xl md:text-5xl font-black bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Build Your System With Us
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Choose a plan designed for scalable digital transformation and enterprise-grade execution.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* STANDARD */}
            <div className="p-8 rounded-3xl border border-cyan-500/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400 transition">

              <h3 className="text-cyan-400 font-bold text-xl">Standard Plan</h3>
              <p className="text-4xl font-black mt-4">$5</p>

              <p className="text-slate-400 mt-4 text-sm">
                Ideal for MVPs and small business systems.
              </p>

              <button
                onClick={() => navigate("/payments?plan=standard")}
                className="mt-6 w-full py-3 bg-cyan-500 text-black font-bold rounded-xl hover:scale-[1.02] transition"
              >
                Request Standard
              </button>

            </div>

            {/* PREMIUM */}
            <div className="p-8 rounded-3xl border border-cyan-500/20 bg-linear-to-b from-cyan-500/10 to-black backdrop-blur-xl relative overflow-hidden hover:border-cyan-400 transition">

              {/* glow overlay */}
              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl opacity-30" />

              <div className="relative z-10">

                <h3 className="text-cyan-300 font-bold text-xl">Premium Plan</h3>
                <p className="text-4xl font-black mt-4">$10</p>

                <p className="text-slate-300 mt-4 text-sm">
                  Enterprise systems, automation, dashboards & APIs.
                </p>

                <button
                  onClick={() => navigate("/payments?plan=premium")}
                  className="mt-6 w-full py-3 bg-cyan-500 text-black font-bold rounded-xl hover:scale-[1.02] transition"
                >
                  Request Premium
                </button>

              </div>
            </div>

          </div>
        </section>

        {/* PROJECT REQUEST */}
        <section id="contact" className="py-16">
          <ProjectRequest />
        </section>

        {/* SPACING */}
        <div className="h-16" />

        {/* FOOTER */}
        <Footer />

      </main>
    </div>
  );
}