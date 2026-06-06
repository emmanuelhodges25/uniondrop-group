import Hero from "../components/sections/Hero";
import Capabilities from "../components/sections/Capabilities";
import TechnologyEcosystem from "../components/sections/TechnologyEcosystem";
import Solutions from "../components/sections/Solutions";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import ProjectRequest from "../components/sections/ProjectRequest";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      <main className="relative">

        {/* HERO */}
        <Hero />

        {/* CAPABILITIES */}
        <section id="capabilities">
          <Capabilities />
        </section>

        {/* TECHNOLOGY */}
        <section id="technology">
          <TechnologyEcosystem />
        </section>

        {/* SOLUTIONS */}
        <section id="solutions">
          <Solutions />
        </section>

        {/* PROCESS */}
        <section id="process">
          <ProcessTimeline />
        </section>

        {/* PRICING (FIXED ENTRY POINT) */}
       <div className="flex justify-center">
  <button
    onClick={() => navigate("/payments")}
    className="mt-6 px-6 py-3 bg-cyan-500 text-black rounded-xl font-bold"
  >
    Request Standard ($5)
  </button>
</div>
<div className="flex justify-center">
  <button
    onClick={() => navigate("/payments")}
    className="mt-6 px-6 py-3 bg-cyan-500 text-black rounded-xl font-bold"
  >
    Request Premium ($10)
  </button>
</div>
        {/* PROJECT REQUEST (ONLY ONCE - FIX DUPLICATE ISSUE ROOT CAUSE) */}
        <section id="contact">
          <ProjectRequest />
        </section>

        {/* SPACING */}
        <div className="h-20 bg-black" />

        {/* FOOTER */}
        <Footer />

      </main>
    </div>
  );
}