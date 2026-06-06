import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl border-b border-cyan-500/10" />

      {/* CONTENT */}
      <div className="relative flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={logo} className="w-9 h-9" />
          <span className="text-cyan-400 font-bold text-lg tracking-wide">
            UnionDrop
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">

          <button
            onClick={() => navigate("/")}
            className={`hover:text-cyan-400 transition ${
              isActive("/") ? "text-cyan-400" : ""
            }`}
          >
            Home
          </button>

          <button
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-cyan-400 transition"
          >
            Services
          </button>

          <button
            onClick={() =>
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-cyan-400 transition"
          >
            Pricing
          </button>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-cyan-400 transition"
          >
            Contact
          </button>

        </nav>

        {/* ACTION BUTTONS */}
        <div className="hidden md:flex gap-3">

          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 text-sm border border-cyan-500/20 rounded-xl hover:border-cyan-400 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 text-sm bg-cyan-500 text-black rounded-xl font-bold hover:scale-105 transition"
          >
            Get Started
          </button>

        </div>

        {/* MOBILE MENU */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cyan-400 text-2xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-2xl border-t border-cyan-500/10 px-6 py-6 space-y-4">

          <button onClick={() => { navigate("/"); setOpen(false); }}>
            Home
          </button>

          <button onClick={() => { document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); }}>
            Services
          </button>

          <button onClick={() => { document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); }}>
            Pricing
          </button>

          <button onClick={() => { navigate("/login"); setOpen(false); }}>
            Login
          </button>

          <button
            onClick={() => { navigate("/signup"); setOpen(false); }}
            className="text-cyan-400 font-bold"
          >
            Get Started
          </button>

        </div>
      )}

    </header>
  );
}