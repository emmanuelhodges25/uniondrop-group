export default function Profile() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Profile
      </h1>

      <div
        className="
        bg-slate-950
        border
        border-cyan-500/10
        rounded-3xl
        p-8
        "
      >
        <div className="flex items-center gap-6">

          <div
            className="
            w-20
            h-20
            rounded-full
            bg-cyan-500/20
            "
          />

          <div>
            <h2 className="text-xl font-bold">
              Emmanuel Hodges
            </h2>

            <p className="text-slate-400">
              Client Account
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}