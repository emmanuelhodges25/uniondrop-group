import { Outlet, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  CreditCard,
  MessageSquare,
  User,
  Settings,
} from "lucide-react";

export default function DashboardLayout() {
  const navItems = [
    {
      label: "Overview",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Projects",
      path: "/dashboard/projects",
      icon: FolderKanban,
    },
    {
      label: "Payments",
      path: "/dashboard/payments",
      icon: CreditCard,
    },
    {
      label: "Messages",
      path: "/dashboard/messages",
      icon: MessageSquare,
    },
    {
      label: "Profile",
      path: "/dashboard/profile",
      icon: User,
    },
    {
      label: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <aside
        className="
        hidden
        md:flex
        flex-col
        w-72
        border-r
        border-cyan-500/10
        bg-slate-950
        "
      >
        {/* USER CARD */}
        <div className="p-6 border-b border-cyan-500/10">

          <div className="flex items-center gap-4">

            <div
              className="
              w-14
              h-14
              rounded-full
              bg-cyan-500/20
              border
              border-cyan-500/20
              "
            />

            <div>
              <h2 className="font-bold">
                Emmanuel Hodges
              </h2>

              <p className="text-xs text-slate-400">
                UnionDrop Client
              </p>
            </div>

          </div>

        </div>

        {/* NAVIGATION */}
        <div className="p-4 flex-1">

          <div className="space-y-2">

            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    ${
                      isActive
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                    }
                  `
                  }
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}

          </div>

        </div>

        {/* FOOTER */}
        <div className="p-6 border-t border-cyan-500/10">

          <div
            className="
            p-4
            rounded-xl
            bg-cyan-500/5
            border
            border-cyan-500/10
            "
          >
            <p className="text-sm text-slate-400">
              UnionDrop Innovation
            </p>

            <p className="text-xs text-cyan-400 mt-1">
              Enterprise Client Portal
            </p>
          </div>

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-10 overflow-x-hidden">
        <Outlet />
      </main>

    </div>
  );
}