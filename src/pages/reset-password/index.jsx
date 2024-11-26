import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import useAuthStore from '../../store/authStore';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, error, isLoading, message } = useAuthStore();

  const { token } = useParams(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await resetPassword(token, password);


      toast.success("Password reset successfully! Redirecting to login page...");
      
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Error resetting password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-teal-100 to-teal-400 p-6">
      <div className="absolute top-4 left-4 text-black text-2xl font-bold">
        NEU Course BOT
      </div>
    
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-1">
          Reset Your Password
        </h2>
        <p className="text-gray-600 text-sm text-center mb-6">
          Enter a new password for your account.
        </p>
    
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your new password"
              className="w-full p-2 mt-2 border rounded-md focus:ring focus:ring-teal-300 border-gray-300"
            />
          </div>
    
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your new password"
              className="w-full p-2 mt-2 border rounded-md focus:ring focus:ring-teal-300 border-gray-300"
            />
          </div>
    
          <div>
            <button
              type="submit"
              className={`w-full py-2 px-4 text-white font-bold rounded-md ${
                isLoading ? "bg-gray-500" : "bg-teal-500 hover:bg-teal-600"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
    
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
    
        <p className="text-center text-sm mt-4">
          Remember your password?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-teal-500 font-bold hover:underline">
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}
