import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    signup(email, password);
    navigate("/dashboard");
  };

  const handleGoogle = () => {
    alert("Google OAuth will be connected in backend phase");
  };

  const handleApple = () => {
    alert("Apple Sign-In will be connected in backend phase");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute w-150 h-150 bg-cyan-500/10 blur-[160px] rounded-full top-10 left-10" />
        <div className="absolute w-150 h-150 bg-blue-500/10 blur-[160px] rounded-full bottom-10 right-10" />
      </div>

      {/* CARD */}
      <div className="relative w-full max-w-md">

        <div className="backdrop-blur-xl bg-slate-950/70 border border-cyan-500/10 rounded-3xl p-8">

          {/* TITLE */}
          <h1 className="text-3xl font-black text-cyan-400 text-center">
            Create Account
          </h1>

          <p className="text-slate-400 text-center mt-2 text-sm">
            Join UnionDrop Ecosystem
          </p>

          {/* INPUTS */}
          <div className="mt-8 space-y-4">

            <input
              className="w-full p-3 bg-black border border-cyan-500/10 rounded-xl focus:border-cyan-400 outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="w-full p-3 bg-black border border-cyan-500/10 rounded-xl focus:border-cyan-400 outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>

          {/* SIGNUP BUTTON */}
          <button
            onClick={handleSignup}
            className="w-full mt-6 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:scale-[1.02] transition"
          >
            Create Account
          </button>

          {/* DIVIDER */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px bg-cyan-500/10 flex-1" />
            <span className="text-xs text-slate-500">OR</span>
            <div className="h-px bg-cyan-500/10 flex-1" />
          </div>

          {/* SOCIAL LOGIN */}
          <div className="space-y-3">

            <button
              onClick={handleGoogle}
              className="w-full py-3 border border-cyan-500/20 rounded-xl hover:border-cyan-400 transition"
            >
              Continue with Google
            </button>

            <button
              onClick={handleApple}
              className="w-full py-3 border border-cyan-500/20 rounded-xl hover:border-cyan-400 transition"
            >
              Continue with Apple
            </button>

          </div>

          {/* LOGIN LINK */}
          <p className="text-center text-sm text-slate-400 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400">
              Login
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}