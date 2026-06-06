import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="pt-16">
        <Outlet />
      </main>

    </div>
  );
}