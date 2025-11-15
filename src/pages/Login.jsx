import { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { Eye, EyeOff } from "lucide-react";
import loginAnimation from "../assets/login.json";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage,setErrorMessage]=useState("")
  const [email,setEmail]=useState("")
  const[pass,setPass]=useState("");
  const dispatch=useDispatch()
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
try{
     const res=await axios.post(`${BASE_URL}/api/users/login`,{
      email,
      password:pass
     })
     console.log("Login succesfull");
      // Simulate login delay
    setTimeout(() => {
      setLoading(false);
      alert("Logged in successfully!");
    }, 1500);
      dispatch(setUser(res.data.user))

}catch (err) {
    console.log(err);

    if (err.response && err.response.data && err.response.data.message) {
      setErrorMessage(err.response.data.message); 
    } else {
      setErrorMessage("Something went wrong. Try again.");
    }

    setLoading(false);
  }
};
   

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-rose-50 to-red-100">
      <Navbar />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center flex-grow px-6 md:px-10 py-10 md:py-16 gap-10 md:gap-20">
        
        {/* Login Form */}
        <div className="bg-white/95 shadow-2xl p-8 md:p-10 rounded-3xl w-full max-w-sm sm:max-w-md md:max-w-lg transition-all duration-300">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#7A0010]">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-600 mt-2 md:mt-3 text-sm md:text-base">
            Login to continue saving lives ❤️
          </p>

          <form onSubmit={handleSubmit} className="mt-8 md:mt-10 space-y-5 md:space-y-6">
            
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)} 
                required
                className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 focus:border-[#FF4242] focus:ring-2 focus:ring-[#FF4242]/30 outline-none bg-white shadow-sm transition duration-200 text-sm md:text-base"
              />
            </div>

            {/* Password Field with Eye Icon */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                  onChange={(e) => setPass(e.target.value)} 
                required
                className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 focus:border-[#FF4242] focus:ring-2 focus:ring-[#FF4242]/30 outline-none bg-white shadow-sm transition duration-200 text-sm md:text-base pr-10"
              />
              <div
                className="absolute right-3 top-3.5 md:top-3.5 text-gray-500 cursor-pointer hover:text-[#FF4242] transition"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>

            {/* Login Button with Loading Animation */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 md:py-3.5 rounded-xl font-semibold text-base md:text-lg text-white shadow-lg transition-transform duration-200 ${
                loading
                  ? "bg-[#d93737]/70 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#FF4242] to-[#d93737] hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </button>
            {errorMessage && (
  <p className="text-red-600 text-center font-medium mt-2">
    {errorMessage}
  </p>
)}

          </form>

          <p className="text-center text-gray-600 mt-5 text-sm md:text-base">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#7A0010] font-semibold hover:underline"
            >
              Register Now
            </Link>
          </p>
        </div>

        {/* Lottie Animation */}
        <div className="w-64 sm:w-80 md:w-96 lg:w-[420px]">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
