import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="px-10 py-20 rounded-3xl border border-orange-400 max-w-md shadow-lg bg-white">
        <h1 className="text-3xl font-normal font-bold text-center mb-2 text-orange-600 hover:font-serif">Welcome To PassWallet</h1>
        <p className="font-medium font-serif text-gray-800 text-center">Please Enter your details....!</p>

        <div className="mt-8 w-full">
          {/* Email Input */}
          <div className="mb-4">
            <label className="text-lg font-serif block mb-1">Email</label>
            <input  
              className="w-full border-2 border-blue-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Email"
              type="email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="text-lg font-serif block mb-1">Password</label>
            <input  
              className="w-full border-2 border-blue-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Password"
              type="password"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 text-gray-800 text-sm">Remember for 30 days</label>
            </div>
            <button className="text-blue-600 hover:underline text-sm">Forgot Password?</button>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
