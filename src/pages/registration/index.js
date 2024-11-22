import MainLayout from 'layout/main';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from 'store/authStore';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
	username: z.string().min(1).max(10),
	email: z.string().email(),
	password: z.string().min(8),
});

export default function RegistrationPage() {
	const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(schema)});
	const navigate = useNavigate();
	const { signUp, error, isLoading } = useAuthStore();

	const onSubmit = async (data) => {
		try {
			await signUp(data.email, data.password, data.username);
			console.log("Sign up successful!");
			navigate("/verify-email");
		} catch (error) {
			console.log(error);
		}
	};

	return <MainLayout>
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
					<input className='mt-3 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' {...register("username")} type='text' placeholder='Username' />
					{errors.username && (<div className="flex items-start text-red-500 font-medium">{errors.username.message}</div>)}
					<input className='mt-3 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' {...register("password")} type='password' placeholder='Password' />
					{errors.password && (<div className="flex items-start text-red-500 font-medium">{errors.password.message}</div>)}
					<button className="w-full py-2 px-4 mt-4 bg-black text-white rounded font-bold">
						SIGN UP
					</button>
					<p className='text-center mt-6 text-sm'>
						By continuing, you agree to the myxoma <span className='font-bold'>Terms of Service</span> and the <span className='font-bold'>Privacy Policy</span>
					</p>
				</form>
				<button onClick={() => navigate("/login")} className="w-[400px] mt-4 text-black font-normal border rounded flex items-center justify-center hover:bg-gray-100 py-2">
					Already a member? <span className="font-bold ml-1">Sign in now</span>
				</button>
			</div>
		</div>
	</MainLayout>
}