import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import bloodAnimation from "../assets/blood.json";
import Navbar from '../component/Navbar';
import Footer from "../component/Footer";


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-rose-50 to-red-100">

      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-12 md:px-20 py-16">

        {/* Text */}
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-red-700 leading-tight">
            Donate Blood, Save Lives.
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Your small act of kindness can bring life to someone in need.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/register"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
            >
              I Need Blood
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 border border-red-700 text-red-700 font-semibold rounded-lg hover:bg-red-700 hover:text-white transition"
            >
              I Want to Donate
            </Link>
          </div>
        </div>

        {/* Animation */}
        <Lottie animationData={bloodAnimation} loop className="w-[350px] md:w-[450px]" />
      </section>

      <Footer/>

    </div>
  );
};

export default Home;
