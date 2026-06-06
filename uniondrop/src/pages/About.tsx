import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative py-32 px-4 md:px-6 overflow-hidden">

        <div className="absolute inset-0 bg-black" />

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            h-225
            bg-cyan-500/10
            blur-[180px]
            rounded-full
          "
        />

        <div className="relative max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-5xl
              md:text-7xl
              font-black
              leading-tight
            "
          >
            About{" "}
            <span className="text-cyan-400">
              UnionDrop
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="
              mt-8
              max-w-3xl
              mx-auto
              text-lg
              text-slate-300
            "
          >
            UnionDrop Innovation is a digital solutions and smart
            services company focused on building scalable software,
            automation systems, SaaS products, and enterprise-grade
            digital infrastructure for businesses operating in a
            connected world.
          </motion.p>

        </div>

      </section>

      {/* MISSION + VISION */}
      <section className="py-24 px-4 md:px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          <div
            className="
              p-8
              rounded-3xl
              bg-slate-950/80
              border
              border-cyan-500/10
            "
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Our Mission
            </h2>

            <p className="text-slate-300 leading-relaxed">
              To empower organizations with innovative digital
              solutions that improve efficiency, scalability,
              automation, and long-term business growth.
            </p>
          </div>

          <div
            className="
              p-8
              rounded-3xl
              bg-slate-950/80
              border
              border-cyan-500/10
            "
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Our Vision
            </h2>

            <p className="text-slate-300 leading-relaxed">
              To become a trusted global technology partner helping
              businesses leverage software, cloud infrastructure,
              automation, and intelligent systems to succeed in the
              digital era.
            </p>
          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="py-24 px-4 md:px-6">

        <div className="max-w-7xl mx-auto">

          <h2
            className="
              text-center
              text-4xl
              md:text-5xl
              font-black
              mb-16
            "
          >
            Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Innovation",
                text: "Building future-ready solutions using modern technologies.",
              },
              {
                title: "Scalability",
                text: "Creating systems that grow with our clients.",
              },
              {
                title: "Reliability",
                text: "Delivering secure, maintainable, enterprise-grade software.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="
                  p-8
                  rounded-3xl
                  bg-slate-950/80
                  border
                  border-cyan-500/10
                "
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {value.title}
                </h3>

                <p className="text-slate-300">
                  {value.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-4 md:px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Why Choose UnionDrop
          </h2>

          <p className="max-w-3xl mx-auto text-slate-300 leading-relaxed">
            We combine modern software engineering practices,
            automation expertise, cloud technologies, and scalable
            architecture to help businesses launch, improve, and grow
            their digital products efficiently.
          </p>

        </div>

      </section>

    </div>
  );
}