const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Vercel",
];

export default function TechStack() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Technology Stack
        </h2>

        <div className="flex justify-center">

         <div className="
  relative
  w-70
  h-70
  sm:w-90
  sm:h-90
  md:w-112.5
  md:h-112.5
"> 

            {/* Outer Neon Ring */}
            <div
              className="
              absolute
              inset-0
              rounded-full
              border-2
              border-cyan-400
              animate-spin
              "
              style={{
                animationDuration: "15s",
              }}
            />

            {/* Inner Neon Ring */}
            <div
              className="
              absolute
              inset-8
              rounded-full
              border
              border-blue-500
              animate-spin
              "
              style={{
                animationDirection: "reverse",
                animationDuration: "10s",
              }}
            />

            {/* Card */}
            <div
className="
  absolute
  inset-16
  rounded-3xl
  bg-slate-900/70
  backdrop-blur-xl
  border
  border-cyan-500/20
  p-6
  flex
  flex-wrap
  gap-3
  justify-center
  content-center
  shadow-[0_0_80px_rgba(0,255,255,0.05)]
"
            >
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                  px-3
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-500/30
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}