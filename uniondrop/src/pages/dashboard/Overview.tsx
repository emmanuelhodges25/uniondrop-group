export default function Overview() {
  return (
    <div>

      <h1 className="text-3xl font-black mb-8">
        Dashboard Overview
      </h1>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">

        {[
          { label: "Active Projects", value: "0" },
          { label: "Pending Requests", value: "0" },
          { label: "Completed Tasks", value: "0" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="
              p-6
              rounded-2xl
              bg-slate-950/60
              border border-cyan-500/10
            "
          >
            <p className="text-slate-400 text-sm">
              {stat.label}
            </p>

            <p className="text-3xl font-black text-cyan-400 mt-2">
              {stat.value}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}