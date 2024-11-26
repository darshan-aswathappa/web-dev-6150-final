import React, { useRef, useState } from "react";
import useAuthStore from "../../store/authStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
  const emailRef = useRef();
  const navigate = useNavigate();
  const { forgotPassword, error, message, isLoading } = useAuthStore();
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const validateForm = () => {
    const email = emailRef.current.value;
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await forgotPassword(emailRef.current.value);
      toast.success(message || "Password reset link sent to your email!");
      setIsEmailSent(true); 
    } catch (err) {
      toast.error(error || "Error sending password reset link");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-teal-100 to-teal-400 p-6">
      <div className="absolute top-4 left-4 text-black text-2xl font-bold">
        NEU Course BOT
      </div>

      {isEmailSent ? (
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-teal-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m8 0a4 4 0 100-8 4 4 0 000 8zm-4 8a8 8 0 110-16 8 8 0 010 16z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Email Sent Successfully!</h2>
            <p className="text-gray-600 text-sm mb-6">
              A password reset link has been sent to your email. Please check your inbox.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="w-full py-2 px-4 text-white font-bold rounded-md bg-teal-500 hover:bg-teal-600"
            >
              Back to Login
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            Reset Your Password
          </h2>
          <p className="text-gray-600 text-sm text-center mb-6">
            Forgot your password? Enter your email to receive a reset link.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                ref={emailRef}
                placeholder="Enter your email"
                className={`w-full p-3 border rounded-md focus:ring focus:ring-teal-300 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                onChange={validateForm}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className={`w-full py-2 px-4 text-white font-bold rounded-md ${
                  isLoading
                    ? "bg-gray-500"
                    : "bg-teal-500 hover:bg-teal-600"
                }`}
                disabled={isLoading || !isFormValid}
              >
                {isLoading ? "Sending..." : "Submit"}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          </form>

          <p className="text-center text-sm mt-4">
            Remember your password?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-teal-500 font-bold hover:underline"
            >
              Login here
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
