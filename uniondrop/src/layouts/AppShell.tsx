import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import BottomNav from "../components/layout/BottomNav";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      <Navbar />

      <main className="pt-16 pb-24">
        <Outlet />
      </main>

      <BottomNav />

    </div>
  );
}