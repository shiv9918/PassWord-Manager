import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message || "Login successful!");
      } else {
        setMessage(data.error || "Invalid credentials");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="px-10 py-20 rounded-3xl border border-orange-400 max-w-md shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-center mb-2 text-orange-600">Welcome To PassWallet</h1>
        <p className="font-medium text-gray-800 text-center">Please Enter your details....!</p>

        {message && <p className={`text-center mt-4 ${message.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}

        <form onSubmit={handleSubmit} className="mt-8 w-full">
          {/* Email Input */}
          <div className="mb-4">
            <label className="text-lg block mb-1">Email</label>
            <input
              className="w-full border-2 border-blue-300 rounded-xl p-3"
              placeholder="Enter Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="text-lg block mb-1">Password</label>
            <input
              className="w-full border-2 border-blue-300 rounded-xl p-3"
              placeholder="Enter Your Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
