export default function Messages() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-2">
        Messages
      </h1>

      <p className="text-slate-400 mb-8">
        Communication center between you and UnionDrop.
      </p>

      <div
        className="
        bg-slate-950
        border
        border-cyan-500/10
        rounded-2xl
        p-8
        "
      >
        <p className="text-slate-400">
          No messages available.
        </p>
      </div>

    </div>
  );
}