import { useNotificationStore } from "../../store/useNotificationStore";

export default function Notifications() {
  const { notifications, remove } =
    useNotificationStore();

  return (
    <div className="fixed top-5 right-5 space-y-3 z-50">

      {notifications.map((n) => (
        <div
          key={n.id}
          className="bg-slate-900 border border-cyan-500/20 px-4 py-3 rounded-xl"
        >
          <p>{n.message}</p>

          <button
            onClick={() => remove(n.id)}
            className="text-xs text-cyan-400 mt-1"
          >
            dismiss
          </button>
        </div>
      ))}

    </div>
  );
}