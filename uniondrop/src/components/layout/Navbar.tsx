import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition duration-300 ${
      isActive
        ? "text-cyan-400 font-semibold"
        : "text-slate-300 hover:text-cyan-400"
    }`;

  return (
    <header
      className="
      fixed top-0 left-0 w-full z-50
      backdrop-blur-xl
      bg-black/60
      border-b border-cyan-500/10
    "
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} className="w-8 h-8" />
            <span className="text-cyan-400 font-bold tracking-wide">
              UnionDrop
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>

            <NavLink to="/developer" className={linkClass}>
              Developer
            </NavLink>

            <NavLink to="/dashboard" className={linkClass}>
              Dashboard
            </NavLink>
          </nav>

          {/* RIGHT CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="
                px-4 py-2
                bg-cyan-500
                text-black
                font-semibold
                rounded-lg
                hover:scale-[1.03]
                transition
              "
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-cyan-400"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>

            <NavLink to="/developer" className={linkClass}>
              Developer
            </NavLink>

            <NavLink to="/dashboard" className={linkClass}>
              Dashboard
            </NavLink>

            <div className="pt-3 flex flex-col gap-2">
              <Link
                to="/login"
                className="text-slate-300 hover:text-cyan-400"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-cyan-500 text-black px-4 py-2 rounded-lg text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}