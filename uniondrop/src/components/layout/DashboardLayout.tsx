import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-black text-white">

      {/* SIDEBAR (DESKTOP) */}
      <aside className="hidden md:flex w-64 flex-col border-r border-cyan-500/20 p-6 gap-6">
        <h1 className="text-cyan-400 text-2xl font-bold">
          UnionDrop
        </h1>

        <nav className="flex flex-col gap-4 text-slate-300">
          <Link to="/dashboard">Overview</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </nav>
      </aside>

      {/* MOBILE TOPBAR */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 border-b border-cyan-500/20 bg-black/60 backdrop-blur z-50">
        <h1 className="text-cyan-400 font-bold">UnionDrop</h1>

        <button onClick={() => setOpen(!open)}>
          <FiMenu size={24} />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed inset-0 bg-black/80 z-40">
          <div className="absolute left-0 top-0 w-64 h-full bg-slate-950 border-r border-cyan-500/20 p-6 flex flex-col gap-6">

            <h1 className="text-cyan-400 text-2xl font-bold">
              Menu
            </h1>

            <Link onClick={() => setOpen(false)} to="/dashboard">
              Overview
            </Link>
            <Link onClick={() => setOpen(false)} to="/projects">
              Projects
            </Link>
            <Link onClick={() => setOpen(false)} to="/services">
              Services
            </Link>
            <Link onClick={() => setOpen(false)} to="/about">
              About
            </Link>

          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-10 pt-20 md:pt-10">
        {children}
      </main>

    </div>
  );
}