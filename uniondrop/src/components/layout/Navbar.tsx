import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative transition duration-300 ${
      isActive
        ? "text-cyan-400 font-semibold"
        : "text-slate-300 hover:text-cyan-400"
    }`;

  return (
    <header
      className="
      fixed top-0 left-0 w-full z-50
      backdrop-blur-2xl
      bg-black/70
      border-b border-cyan-500/10
    "
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="UnionDrop"
              className="w-9 h-9 object-contain"
            />

            <span
              className="
              text-cyan-400
              font-black
              tracking-wide
              text-lg
            "
            >
              UnionDrop
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="
            hidden md:flex
            items-center
            gap-8
          "
          >
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

          {/* DESKTOP ACTIONS */}
          <div
            className="
            hidden md:flex
            items-center
            gap-3
          "
          >
            <Link
              to="/login"
              className="
                text-slate-300
                hover:text-cyan-400
                transition
              "
            >
              Login
            </Link>

            <Link
              to="/signup"
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
            </Link>
          </div>

          {/* MOBILE STATUS */}
          <div className="md:hidden">
            <span
              className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-cyan-400/80
            "
            >
              Enterprise Platform
            </span>
          </div>

        </div>

      </div>
    </header>
  );
}