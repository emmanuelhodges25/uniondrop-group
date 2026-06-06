import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <aside className="w-64 border-r border-cyan-500/10 p-6">

        <h1 className="text-cyan-400 font-black text-xl mb-10">
          UnionDrop
        </h1>

        <nav className="space-y-4 text-slate-300">

          <Link to="/dashboard" className="block hover:text-cyan-400">
            Overview
          </Link>

          <Link to="/dashboard/projects" className="block hover:text-cyan-400">
            Projects
          </Link>

          <Link to="/dashboard/requests" className="block hover:text-cyan-400">
            Requests
          </Link>

          <Link to="/dashboard/projects" className="block hover:text-cyan-400">
  Projects
</Link>

        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">

        <Outlet />

      </main>

    </div>
  );
}