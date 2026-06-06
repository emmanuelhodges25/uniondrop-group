const services = [
  {
    title: "Web Development",
    description:
      "Modern responsive websites and web applications.",
  },
  {
    title: "Automation",
    description:
      "Business process automation and workflows.",
  },
  {
    title: "Digital Solutions",
    description:
      "Custom systems designed for growth.",
  },
  {
    title: "UI/UX Design",
    description:
      "Modern interfaces built for engagement.",
  },
  {
    title: "System Architecture",
    description:
      "Scalable digital infrastructure planning.",
  },
  {
    title: "Technical Consulting",
    description:
      "Professional technology guidance.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="
              p-8
              rounded-3xl
              bg-slate-900/50
              border
              border-cyan-500/20
              hover:border-cyan-500
              transition-all
              "
            >
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-300">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}