import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-cyan-500/10
      bg-black
      text-slate-400
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-bold mb-4">
              Company
            </h3>

            <div className="space-y-3">
              <Link to="/about" className="block hover:text-cyan-400">
                About
              </Link>

              <Link to="/services" className="block hover:text-cyan-400">
                Services
              </Link>

              <Link to="/developer" className="block hover:text-cyan-400">
                Developer
              </Link>
            </div>
          </div>

          {/* PLATFORM */}
          <div>
            <h3 className="text-white font-bold mb-4">
              Platform
            </h3>

            <div className="space-y-3">
              <Link to="/dashboard" className="block hover:text-cyan-400">
                Dashboard
              </Link>

              <Link to="/login" className="block hover:text-cyan-400">
                Login
              </Link>

              <Link to="/signup" className="block hover:text-cyan-400">
                Sign Up
              </Link>
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-white font-bold mb-4">
              Legal
            </h3>

            <div className="space-y-3">
              <Link to="/privacy" className="block hover:text-cyan-400">
                Privacy Policy
              </Link>

              <Link to="/terms" className="block hover:text-cyan-400">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white font-bold mb-4">
              Support
            </h3>

            <div className="space-y-3">
              <Link to="/contact" className="block hover:text-cyan-400">
                Contact
              </Link>

              <Link to="/request" className="block hover:text-cyan-400">
                Request Project
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-cyan-500/10 text-center">
          <p>
            © {new Date().getFullYear()} UnionDrop Innovation.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}