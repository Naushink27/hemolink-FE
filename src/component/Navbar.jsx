import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="px-10 py-4 bg-[#7A0010] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-3xl font-bold tracking-wide">
          Hemo<span className="text-[#FF4242]">Link</span>
        </Link>

        <div className="flex gap-4 items-center">
          <Link
            to="/login"
            className="px-5 py-2 rounded-md font-medium border border-white/40 hover:bg-white/10 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-md font-semibold bg-[#FF4242] hover:bg-[#e33737] transition shadow-sm"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
