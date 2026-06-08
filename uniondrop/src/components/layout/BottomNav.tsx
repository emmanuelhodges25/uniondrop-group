import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Briefcase,
  Plus,
  LayoutDashboard,
  User,
} from "lucide-react";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + 10) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      label: "Home",
      path: "/",
      icon: Home,
    },
    {
      label: "Services",
      path: "/services",
      icon: Briefcase,
    },
    {
      label: "Request",
      path: "/request",
      icon: Plus,
    },
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Account",
      path: "/login",
      icon: User,
    },
  ];

  return (
    <div
      className={`
        md:hidden
        fixed
        bottom-0
        left-0
        right-0
        z-999
        transition-transform
        duration-300
        ${visible ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <div
        className="
          bg-black/90
          backdrop-blur-2xl
          border-t
          border-cyan-500/10
          shadow-[0_-10px_40px_rgba(0,255,255,0.08)]
        "
      >
        <div className="grid grid-cols-5 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-1
                  py-1
                "
              >
                {active && (
                  <div
                    className="
                      absolute
                      top-0
                      h-1
                      w-10
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_12px_rgba(34,211,238,0.9)]
                    "
                  />
                )}

                <Icon
                  size={22}
                  className={
                    active
                      ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                      : "text-slate-500"
                  }
                />

                <span
                  className={`text-[11px] ${
                    active
                      ? "text-cyan-400"
                      : "text-slate-500"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}