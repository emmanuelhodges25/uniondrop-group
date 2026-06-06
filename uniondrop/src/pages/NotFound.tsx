import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">

      <h1 className="text-7xl font-black text-cyan-400">
        404
      </h1>

      <h2 className="text-2xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-slate-400 mt-4 text-center max-w-md">
        The page you are looking for does not exist or may have been moved.
      </p>

      <Link
        to="/"
        className="
          mt-8
          px-6
          py-3
          bg-cyan-500
          text-black
          font-bold
          rounded-xl
        "
      >
        Return Home
      </Link>

    </div>
  );
}