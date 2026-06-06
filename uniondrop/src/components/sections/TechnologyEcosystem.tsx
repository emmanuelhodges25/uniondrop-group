import { motion } from "framer-motion";

const stacks = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud",
    items: ["AWS", "Vercel", "Cloudflare"],
  },
  {
    title: "DevOps",
    items: ["Docker", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Security",
    items: ["JWT", "Rate Limiting", "API Protection"],
  },
];

export default function TechnologyEcosystem() {
  return (
    <section
      id="technology"
      className="relative py-32 px-4 md:px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-black" />

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-225
          h-225
          bg-cyan-500/5
          blur-[180px]
          rounded-full
        "
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <span
              className="
                px-4 py-2
                rounded-full
                border border-cyan-500/20
                text-cyan-400
                text-sm
              "
            >
              Technology Ecosystem
            </span>
          </motion.div>

          <h2
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-black
            "
          >
            Built With Modern
            <span className="text-cyan-400">
              {" "}Technology
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-slate-400
            "
          >
            Enterprise-grade technologies powering scalable
            digital products, SaaS platforms and automation systems.
          </p>

        </div>

        {/* Tech Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {stacks.map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="relative group"
            >

              {/* Rotating Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-1
                  rounded-3xl
                  border
                  border-cyan-500/20
                "
              />

              {/* Card */}
              <div
                className="
                  relative
                  h-full
                  p-8
                  rounded-3xl
                  bg-slate-950/90
                  border
                  border-cyan-500/10
                  backdrop-blur-xl
                  overflow-hidden
                "
              >

                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    bg-cyan-500/5
                  "
                />

                <div className="relative">

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-cyan-400
                      mb-6
                    "
                  >
                    {stack.title}
                  </h3>

                  <div className="space-y-3">

                    {stack.items.map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-3
                          text-slate-300
                        "
                      >
                        <div
                          className="
                            w-2
                            h-2
                            rounded-full
                            bg-cyan-400
                          "
                        />

                        {item}
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}