import { useState } from "react";
import PageWrapper from "../components/ui/PageWrapper";
import CreateProjectModal from "../components/dashboard/CreateProjectModal";
import { showToast } from "../ui/toast";

export default function DashboardHome() {
  const [open, setOpen] = useState(false);

  return (
    <PageWrapper>
      <div className="space-y-8">

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">
              Dashboard Overview
            </h1>
            <p className="text-slate-400 mt-2">
              Welcome to UnionDrop control panel
            </p>
          </div>

          <button
  onClick={() => {
    setOpen(true);
    showToast("Creating new project...");
  }}
  className="px-4 py-2 bg-cyan-500 text-black font-bold rounded"
>
  + New Project
</button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-cyan-500/20 hover:scale-[1.02] transition">
            <h3>Projects</h3>
            <p className="text-3xl text-cyan-400 font-bold">12</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-cyan-500/20 hover:scale-[1.02] transition">
            <h3>Users</h3>
            <p className="text-3xl text-cyan-400 font-bold">1.2K</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-cyan-500/20 hover:scale-[1.02] transition">
            <h3>Revenue</h3>
            <p className="text-3xl text-cyan-400 font-bold">$3,450</p>
          </div>

        </div>

        <CreateProjectModal open={open} onClose={() => setOpen(false)} />

      </div>
    </PageWrapper>
  );
}