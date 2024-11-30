import MainLayout from '@/layout/main';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from '@/store/authStore';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import loginImage from '@/assets/images/login_1.png';
import { GraduationCap } from 'lucide-react';

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
		<div className="flex flex-col lg:flex-row h-screen p-12 bg-[#f2f4f6] bg-[url('/src/assets/images/login_1.png')] bg-cover bg-center">
			<div className="hidden lg:flex lg:w-1/2 flex-col justify-between items-start p-8 border-5 border-white text-center
			text-white relative bg-white rounded-l-3xl relative">
				<img src={loginImage} alt="Course Bot Illustration" className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl  z-0 p-1" />
				<p className=" absolute bottom-8 text-3xl mb-4 text-left font-normal font-serif tracking-tight leading-snug text-white z-10">
					<span className="block">Smart Course Recommendations,</span>
					<span className="block">Tailored just for you</span>
				</p>	
			</div>


			<div className="w-full lg:w-1/2 flex flex-col  justify-around items-center bg-white p-10 lg:rounded-r-3xl space-y-20">
				<h2 className="text-2xl flex font-normal mb-4 ">
					<GraduationCap className = "mr-2 w-8 h-8 opacity-80"/>
					CourseCraft
				</h2>
				<h3 className = "text-3xl font-normal mb-0"> Welcome back!</h3>
				<h6 className = "text-sm font-normal mt-0 mb-4 text-center"> Enter your email and password to access your account</h6>
				<form className="w-full max-w-sm mt-2 " onSubmit={handleSubmit(onSubmit)}>
					<input className='bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5' {...register("email")} type='text' placeholder='Email' />
					{errors.email && (<div className="flex items-start text-red-500 font-medium">{errors.email.message}</div>)}
					<input className='mt-3 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5' {...register("password")} type='password' placeholder='Password' />
					{errors.password && (<div className="flex items-start text-red-500 font-medium">{errors.password.message}</div>)}
					<button className="w-full py-2 px-4 mt-4 bg-black text-white rounded font-bold">
						SIGN IN
					</button>
                    <button type="button" onClick={() => navigate("/forgot-password")} className="text-sm text-black-500 hover:underline">
                            Forgot Password?
                    </button>
					<p className='text-center mt-6 text-sm'>
						By continuing, you agree to the CourseCraft's <span className='font-bold'>Terms of Service</span> and the <span className='font-bold'>Privacy Policy</span>
					</p>
				</form>
				<button onClick={() => navigate("/signup")} className="w-[90%] max-w-[320px] min-w-[280px] mt-4 text-black font-normal flex items-center justify-center whitespace-nowrap hover:bg-gray-100 py-2 md:max-w-[400px]">
					Don't have an account? <span className="font-bold ml-1">Sign up</span>
				</button>
			</div>
		</div>
	);
}
