import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl border-b border-cyan-500/10" />

      {/* CONTENT */}
      <div className="relative flex items-center justify-between px-4 md:px-8 py-4">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="UnionDrop"
            className="w-10 h-10 object-contain"
          />

          <span className="text-cyan-400 font-black text-xl">
            UnionDrop
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">

          <button
            onClick={() => navigate("/")}
            className={`transition hover:text-cyan-400 ${
              isActive("/") ? "text-cyan-400" : ""
            }`}
          >
            Home
          </button>

          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="transition hover:text-cyan-400"
          >
            Services
          </button>

          <button
            onClick={() =>
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="transition hover:text-cyan-400"
          >
            Pricing
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="transition hover:text-cyan-400"
          >
            Contact
          </button>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex gap-3">

          <button
            onClick={() => navigate("/login")}
            className="
              px-4 py-2
              rounded-xl
              border border-cyan-500/20
              hover:border-cyan-400
              transition
            "
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="
              px-5 py-2
              rounded-xl
              bg-cyan-500
              text-black
              font-bold
              hover:scale-105
              transition
            "
          >
            Get Started
          </button>

        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <span className="text-xs text-cyan-400 uppercase tracking-widest">
            Enterprise Platform
          </span>
        </div>

      </div>
    </header>
  );
}