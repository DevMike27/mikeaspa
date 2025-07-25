import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaRegUser,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );

      if (response.data.token) {
        localStorage.setItem("adminToken", response.data.token);
        toast.success("Login successful!");
        // Pass the userId to the dashboard
        navigate("/admin/dashboard", {
          state: { userId: response.data.userId },
        });
      }
      console.log("login sucess");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-300 flex items-center justify-center p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-md shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-xl font-bold text-center text-gray-800">
          Login as Admin
        </h2>

        <div className="relative space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaRegUser className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="relative space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaLock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <FaEyeSlash className="h-5 w-5 text-gray-400" />
              ) : (
                <FaEye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className=" w-24 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 disabled:bg-blue-400"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
