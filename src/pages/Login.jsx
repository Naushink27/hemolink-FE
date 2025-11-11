import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loginAnimation from "../assets/Login_and_Sign_up.json"
import Navbar from "../component/Navbar";

const Login = () => {
    console.log("Login page is running")
    console.log( loginAnimation.layers)
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-red-100">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-12">

        {/* Animation
        <div className="w-[300px] md:w-[420px]">
          <Lottie animationData={loginAnimation} loop />
        </div> */}

         <dotlottie-player
    src="https://lottie.host/b0084d5a-d69b-4e31-aafa-5ee8432d0995/eq1weKgnDx.lottie"
    background="transparent"
    speed="1"
    autoplay
    loop
    style={{ width: "50%", height: "50%" }}
  ></dotlottie-player>

        {/* Login Form */}
        <div className="bg-white/90 backdrop-blur-sm shadow-xl p-8 rounded-2xl w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center text-[#7A0010]">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Login to continue saving lives ❤️
          </p>

          <form className="mt-8 space-y-4">

            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full bg-white/70"
            />

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full bg-white/70"
            />

            <button
              type="submit"
              className="btn bg-[#FF4242] hover:bg-[#d93737] text-white w-full"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4 text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-[#7A0010] font-semibold hover:underline">
              Register Now
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
