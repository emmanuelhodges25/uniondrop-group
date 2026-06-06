import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-8xl font-black text-cyan-400">
        404
      </h1>

      <p className="text-slate-400 mt-4">
        Page not found
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-cyan-500 text-black rounded-xl"
      >
        Return Home
      </Link>

    </div>
  );
}