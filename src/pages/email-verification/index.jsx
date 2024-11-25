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
            margin: '4px',
            MozAppearance: 'textfield',
            width: '30px',
            borderRadius: '3px',
            fontSize: '14px',
            height: '30px',
            paddingLeft: '7px',
            border: '1px solid lightskyblue'
        },  
    };

    return <>
        <div className='max-w-md w-full overflow-hidden'>
            <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
                Verify Your Email
            </h2>
            <p className='text-center text-gray-800 mb-6'>Enter the 6-digit code sent to your email address.</p>
            <ReactCodeInput type='number' fields={6} {...props} onChange={handlePinChange}
                value={pinCode} />
            <button onClick={onSubmitButton}>Submit</button>
        </div>
    </>
}