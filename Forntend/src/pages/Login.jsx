import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ Add validation here if needed
    navigate("/home");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#fdf6e3]">
      <div className="flex flex-col md:flex-row bg-[#5d2b1f] rounded-xl shadow-2xl overflow-hidden w-full max-w-6xl h-[90vh] mx-4 md:mx-10">

        {/* Left - Form Section */}
        <div className="flex-1 p-10 md:p-16 text-white flex flex-col justify-center">
          {/* Logo and Brand */}
          <div className="flex items-center mb-6">
            <img src="/assets/logo-icon.png" alt="Logo" className="w-8 h-8 mr-2" />
            <h1 className="text-3xl font-bold text-white">Sanskaraa</h1>
          </div>

          <h2 className="text-4xl font-semibold mb-6 text-white">Log In</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Phone number or email"
              className="w-full px-4 py-2 bg-transparent border border-yellow-400 rounded-md placeholder-white text-white focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-transparent border border-yellow-400 rounded-md placeholder-white text-white focus:outline-none"
              required
            />
            <div className="text-right text-sm text-white">Forgot password?</div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-white font-semibold py-2 rounded-md hover:bg-yellow-300 transition"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-white">
            Don’t have an account? <span className="underline cursor-pointer">Sign Up</span>
          </p>

          {/* Mobile Images (optional) */}
          <div className="md:hidden mt-6 flex justify-between items-end">
            <img src="" alt="Pandit" className="h-20" />
            <img src="/assets/agni.png" alt="Agni" className="h-20" />
            <img src="/assets/kalash.png" alt="Kalash" className="h-20" />
          </div>
        </div>

        {/* Right - Illustration Section */}
        <div className="hidden md:flex relative justify-center items-center p-10 w-1/2">
          {/* Language Selector - Top Right */}
          <div className="absolute top-4 right-4 text-white text-base">
            English |{" "}
            <span className="ml-1 font-semibold" style={{ fontFamily: "Noto Sans Devanagari" }}>
              हिंदी
            </span>
          </div>

          {/* Larger Cultural Illustration */}
          <img
            src="/assets/login-illustration.png"
            alt="login interface"
            className="w-full max-w-[420px] md:max-w-[480px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
