import {
  FolderKanban,
  CreditCard,
  MessageSquare,
  Activity,
} from "lucide-react";

export default function Overview() {
  const stats = [
    {
      title: "Active Projects",
      value: "3",
      icon: FolderKanban,
    },
    {
      title: "Payments",
      value: "2",
      icon: CreditCard,
    },
    {
      title: "Messages",
      value: "5",
      icon: MessageSquare,
    },
    {
      title: "Account Status",
      value: "Active",
      icon: Activity,
    },
  ];

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-black text-white">
          Welcome Back,
          <span className="text-cyan-400"> Emmanuel</span>
        </h1>

        <p className="text-slate-400 mt-3">
          Monitor projects, payments, communications,
          and account activity from your client portal.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-cyan-500/10
              bg-slate-950
              p-6
              "
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full" />

              <Icon
                size={24}
                className="text-cyan-400 mb-4"
              />

              <p className="text-slate-400 text-sm">
                {item.title}
              </p>

              <h3 className="text-3xl font-black mt-2">
                {item.value}
              </h3>
            </div>
          );
        })}
      </div>

      {/* PROJECT STATUS */}
      <div
        className="
        rounded-3xl
        border
        border-cyan-500/10
        bg-slate-950
        p-8
        "
      >
        <h2 className="text-xl font-bold mb-6">
          Project Pipeline
        </h2>

        <div className="space-y-5">

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Client Portal Upgrade</span>
              <span>90%</span>
            </div>

            <div className="w-full h-3 bg-slate-900 rounded-full">
              <div className="w-[90%] h-3 rounded-full bg-cyan-400" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Automation Platform</span>
              <span>65%</span>
            </div>

            <div className="w-full h-3 bg-slate-900 rounded-full">
              <div className="w-[65%] h-3 rounded-full bg-cyan-400" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Enterprise Dashboard</span>
              <span>40%</span>
            </div>

            <div className="w-full h-3 bg-slate-900 rounded-full">
              <div className="w-[40%] h-3 rounded-full bg-cyan-400" />
            </div>
          </div>

        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div
        className="
        rounded-3xl
        border
        border-cyan-500/10
        bg-slate-950
        p-8
        "
      >
        <h2 className="text-xl font-bold mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div className="border-b border-cyan-500/10 pb-4">
            Payment received for Standard Plan.
          </div>

          <div className="border-b border-cyan-500/10 pb-4">
            New project request submitted.
          </div>

          <div>
            Profile updated successfully.
          </div>

        </div>
      </div>
    </div>
  );
}