const notifications = [
  {
    id: 1,
    title: "Project Created",
    time: "2 minutes ago",
  },
  {
    id: 2,
    title: "New User Registered",
    time: "15 minutes ago",
  },
];

export default function NotificationPanel() {
  return (
    <div
      className="
      p-6
      rounded-2xl
      bg-slate-900/40
      border
      border-cyan-500/20
      "
    >
      <h2 className="text-xl font-bold mb-6">
        Notifications
      </h2>

      <div className="space-y-4">

        {notifications.map((item) => (
          <div
            key={item.id}
            className="
            p-4
            rounded-xl
            bg-slate-800/50
            "
          >
            <p>{item.title}</p>

            <span className="text-xs text-slate-400">
              {item.time}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}