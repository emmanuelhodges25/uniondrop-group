import { NavLink } from "react-router-dom";

export default function ActiveLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `transition ${
          isActive
            ? "text-cyan-400 font-bold"
            : "text-slate-300 hover:text-cyan-400"
        }`
      }
    >
      {children}
    </NavLink>
  );
}