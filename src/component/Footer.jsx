import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-700 to-red-500 text-white py-10 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand + Tagline */}
        <div>
          <h2 className="text-3xl font-bold">
            Hemo<span className="text-yellow-300">Link</span>
          </h2>
          <p className="mt-3 text-sm text-red-100 leading-relaxed">
            Connecting donors with patients.  
            A drop of blood, a world of hope.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-red-100">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/register" className="hover:text-yellow-300">Become a Donor</Link></li>
            <li><Link to="/request-blood" className="hover:text-yellow-300">Need Blood?</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300">About Us</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-red-100">
            <li><Link className="hover:text-yellow-300">Help Center</Link></li>
            <li><Link className="hover:text-yellow-300">Privacy Policy</Link></li>
            <li><Link className="hover:text-yellow-300">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-red-100 text-sm">Email: support@hemolink.org</p>
          <p className="text-red-100 text-sm mt-1">Phone: +91 98765 43210</p>

          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <a aria-label="Instagram" className="hover:text-yellow-300 cursor-pointer">📸</a>
            <a aria-label="Twitter" className="hover:text-yellow-300 cursor-pointer">🐦</a>
            <a aria-label="YouTube" className="hover:text-yellow-300 cursor-pointer">▶️</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-red-100 text-sm mt-10 border-t border-red-300 pt-4">
        © {new Date().getFullYear()} HemoLink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
