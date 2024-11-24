import MainLayout from '@/layout/main';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from '@/store/authStore';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const schema = z.object({
	email: z.string().email(),
	password: z.string(),
});

export default function RegistrationPage() {
	const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(schema)});
	const navigate = useNavigate();
	const { signIn, error, isLoading } = useAuthStore();

	const onSubmit = async (data) => {
		try {
			await signIn(data.email, data.password);
			console.log("Sign in successful!");
			navigate("/dashboard");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
	};

	return(
		<div className="flex flex-col lg:flex-row h-screen p-12 bg-[#f2f4f6]">
			<div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-100 to-teal-400 flex-col justify-between items-start p-8 text-center text-white rounded-l-lg">
				<h1 className="text-3xl font-bold mb-4 text-left text-black">
					NEU Course bot
				</h1>
				<p className="text-4xl mb-8 text-left font-extrabold leading-snug text-black">
					<span className="block">Ensure a Fast and</span>
					<span className="block">Successful Journey</span>
					<span className="block font-normal">To picking your Next Coursework</span>
				</p>

				<ul className="space-y-4 text-left text-black">
					<li className="flex items-center">
						<span className="material-icons mr-2">⏳</span>
						Know more about professors
					</li>
					<li className="flex items-center">
						<span className="material-icons mr-2">⏳</span>
						60% Time Savings in Syllabus Checks
					</li>
					<li className="flex items-center">
						<span className="material-icons mr-2">⏳</span>
						Personalized course picks based on resume
					</li>
				</ul>
			</div>
			<div className="w-full lg:w-1/2 flex flex-col  justify-around items-center bg-white p-10 rounded-r-lg">
				<h2 className="text-2xl font-bold mb-4">Welcome to NEU course bot</h2>
				<form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
					<input className='bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' {...register("email")} type='text' placeholder='Email' />
					{errors.email && (<div className="flex items-start text-red-500 font-medium">{errors.email.message}</div>)}
					<input className='mt-3 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' {...register("password")} type='password' placeholder='Password' />
					{errors.password && (<div className="flex items-start text-red-500 font-medium">{errors.password.message}</div>)}
					<button className="w-full py-2 px-4 mt-4 bg-black text-white rounded font-bold">
						SIGN IN
					</button>
					<p className='text-center mt-6 text-sm'>
						By continuing, you agree to the myxoma <span className='font-bold'>Terms of Service</span> and the <span className='font-bold'>Privacy Policy</span>
					</p>
				</form>
				<button onClick={() => navigate("/signup")} className="w-[400px] mt-4 text-black font-normal border rounded flex items-center justify-center hover:bg-gray-100 py-2">
					Don't have an account? <span className="font-bold ml-1">Sign up now</span>
				</button>
			</div>
		</div>
	);
}