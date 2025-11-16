import { Link, useNavigate } from "react-router-dom";

export default function NavbarPatient() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-[#7A0010] text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/patient-dashboard" className="text-3xl font-bold tracking-wide">
          Hemo<span className="text-[#FF4242]">Link</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            to="/add-request"
            className="px-5 py-2 bg-[#FF4242] rounded-lg font-semibold hover:bg-[#e33737] transition"
          >
            + Add Request
          </Link>
          <Link
            to="/add-post"
            className="px-5 py-2 border border-white/40 rounded-lg font-medium hover:bg-white/10 transition"
          >
            + Add Post
          </Link>
          <Link
            to="/profile"
            className="px-5 py-2 rounded-lg font-medium hover:bg-white/10 transition"
          >
            View Profile
          </Link>
          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg font-medium text-red-200 hover:bg-red-900/30 transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}