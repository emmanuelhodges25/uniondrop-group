import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/10 bg-black">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-black" />

      <div
        className="
          absolute
          left-1/2
          bottom-0
          -translate-x-1/2
          w-250
          h-100
          bg-cyan-500/5
          blur-[180px]
          rounded-full
        "
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-20">

        {/* Top Section */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-5
            gap-10
          "
        >

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="UnionDrop"
                className="w-10 h-10"
              />

              <div>
                <h3 className="font-black text-xl text-cyan-400">
                  UnionDrop
                </h3>

                <p className="text-xs text-slate-500">
                  Innovation
                </p>
              </div>

            </div>

            <p className="mt-6 text-slate-400 leading-relaxed max-w-md">
              Building scalable software systems, SaaS platforms,
              automation solutions, and enterprise-grade digital
              infrastructure for modern businesses.
            </p>

            {/* Socials */}
              <div className="flex flex-col gap-3 text-slate-400">
              <a
                href="#"
                className="
                  px-4 py-2
                  rounded-xl
                  border border-cyan-500/10
                  hover:border-cyan-400
                  transition
                "
              >
                Facebook
              </a>

              <a
                href="#"
                className="
                  px-4 py-2
                  rounded-xl
                  border border-cyan-500/10
                  hover:border-cyan-400
                  transition
                "
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="
                  px-4 py-2
                  rounded-xl
                  border border-cyan-500/10
                  hover:border-cyan-400
                  transition
                "
              >
                GitHub
              </a>

              <a
                href="#"
                className="
                  px-4 py-2
                  rounded-xl
                  border border-cyan-500/10
                  hover:border-cyan-400
                  transition
                "
              >
                X
              </a>

            </div>

          </div>

          {/* Services */}
          <div>

            <h4 className="font-bold text-cyan-400 mb-5">
              Services
            </h4>

            <div className="flex flex-col gap-3 text-slate-400">
              <a href="#capabilities">Web Applications</a>
              <a href="#capabilities">Automation Systems</a>
              <a href="#capabilities">SaaS Platforms</a>
              <a href="#capabilities">API Development</a>
              <a href="#capabilities">Cloud Solutions</a>

            </div>

          </div>

          {/* Company */}
          <div>

            <h4 className="font-bold text-cyan-400 mb-5">
              Company
            </h4>

              <div className="flex flex-col gap-3 text-slate-400">
              <Link to="/about">About</Link>
              <Link to="/developer">Meet The Developer</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Get Started</Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h4 className="font-bold text-cyan-400 mb-5">
              Contact
            </h4>

            <div className="space-y-3 text-slate-400">

              <p>Digital Services</p>
              <p>Project Requests</p>
              <p>Business Solutions</p>
              <p>Enterprise Support</p>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="my-12 border-t border-cyan-500/10" />

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >

          <p className="text-slate-500 text-sm">
            © {year} UnionDrop Innovation. All rights reserved.
          </p>

            <div className="flex flex-col gap-3 text-slate-400">

           
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="#">Support</a>

          </div>

        </div>

      </div>

    </footer>
  );
}