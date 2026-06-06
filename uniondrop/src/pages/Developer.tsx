import { motion } from "framer-motion";

export default function Developer() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative py-32 px-4 md:px-6 overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-black" />

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-225
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
            className="text-5xl md:text-7xl font-black"
          >
            Meet The{" "}
            <span className="text-cyan-400">Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-slate-300 max-w-3xl mx-auto"
          >
            The mind behind UnionDrop Innovation — building scalable
            digital systems, automation tools, and modern SaaS
            platforms.
          </motion.p>

        </div>

      </section>

      {/* PROFILE SECTION */}
      <section className="py-24 px-4 md:px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-6">

            <h2 className="text-4xl font-black">
              Emmanuel Hodges
            </h2>

            <p className="text-slate-400 leading-relaxed">
              Student at Starz University with a focus on System Administration,
              Full Stack Development, Digital Creation, and Entrepreneurship.
              Passionate about building scalable and practical software systems
              that solve real-world business problems.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 pt-4">

              {[
                "System Admin",
                "Full Stack Developer",
                "Digital Creator",
                "Entrepreneur",
              ].map((tag) => (
                <span
                  key={tag}
                  className="
                    px-4 py-2
                    rounded-xl
                    border border-cyan-500/20
                    text-cyan-400
                    text-sm
                  "
                >
                  {tag}
                </span>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div
            className="
              p-8
              rounded-3xl
              bg-slate-950/80
              border border-cyan-500/10
            "
          >

            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Core Tools & Stack
            </h3>

            <div className="space-y-4 text-slate-300">

              {[
                "MySQL",
                "Vercel",
                "Visual Studio Code",
                "GitHub",
                "Postman",
                "Render / Railway",
              ].map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  {tool}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER MESSAGE */}
      <section className="py-20 px-4 md:px-6 text-center border-t border-cyan-500/10">

        <h2 className="text-3xl md:text-4xl font-black">
          Building the Future of Digital Systems
        </h2>

        <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
          Focused on delivering scalable software, automation systems,
          and enterprise-grade solutions for modern businesses.
        </p>

      </section>

    </div>
  );
}