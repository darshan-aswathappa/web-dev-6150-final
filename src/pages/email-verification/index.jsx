import React from "react";
import MainLayout from "@/layout/main";
import { useState } from "react";
import ReactCodeInput from "react-code-input";
import useAuthStore from "@/store/authStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function VerifyEmail(){
    const [pinCode, setPinCode] = useState("");
    const navigate = useNavigate();
    const { error, isLoading, verifyEmail } = useAuthStore();

    const handlePinChange = pinCode => {
        setPinCode(pinCode);
    };

    const onSubmitButton = async (e) => {
        e.preventDefault();
        try {
            await verifyEmail(pinCode);
            navigate("/dashboard");
            toast.success("Verification successful");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };
    const props = {
        inputStyle: {
            fontFamily: 'monospace',
            margin: '8px',
            MozAppearance: 'textfield',
            width: '60px',
            borderRadius: '5px',
            fontSize: '18px',
            height: '60px',
            paddingLeft: '10px',
            border: '2px solid lightskyblue',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            color: '#333',
            WebkitAppearance: 'none',
        },  
    };

    return (
			<>
				<div className="flex justify-center items-center min-h-screen">
					<div className="w-full overflow-hidden">
						<h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
							Verify Your Email
						</h2>
						<p className="text-center text-gray-800 mb-6">
							Enter the 6-digit code sent to your email address.
						</p>
						<div className="flex flex-col items-center">
							<ReactCodeInput
								type="number"
								fields={6}
								{...props}
								onChange={handlePinChange}
								value={pinCode}
							/>
								<button
									className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
									onClick={onSubmitButton}
								>
									Submit
								</button>
						</div>
					</div>
				</div>
			</>
		);
}