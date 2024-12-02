import React from 'react';
import { GraduationCap } from 'lucide-react';
import aboutImage from '@/assets/images/about_new.jpg';

export default function About() {
	return (
		<div className=" min-h-screen flex flex-col items-center relative">
			<nav className="w-full bg-white py-4">
				<div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
					<a href="/dashboard" className="text-2xl flex font-normal mb-0 text-black no-underline">
						<GraduationCap className="mr-2 w-8 h-8 opacity-80" />
						CourseCraft
					</a>
				</div>
			</nav>
			<main className="w-full max-w-7xl px-4 py-8 flex flex-col lg:flex-row items-start">
				<div className="lg:w-2/5 space-y-6 relative">
					<h1 className="text-2xl lg:text-7xl font-bold leading-tight lg:absolute top-2 left-8 text-black z-10  p-4">
						ABOUT COURSECRAFT AND ITS SIGNIFICANCE
					</h1>
				</div>
				<div className="lg:w-3/5 flex flex-col items-start mt-8 lg:mt-0 relative pl-4">

					<div className="relative w-full mb-6">
						<img
							src={aboutImage}
							alt="About CourseCraft"
							className="w-full lg:w-[95%] h-auto object-contain hidden lg:block "
						/>
					</div>
					<div className="w-full flex flex-col lg:flex-row gap-10">
						<div className="w-full lg:w-1/2 space-y-6">
							<p className="text-lg leading-relaxed text-gray-700 text-justify leading-snug tracking-tight">
								<span className="text-extrabold text-4xl">C</span>ourseCraft is
								designed to help Northeastern students make informed decisions
								about their academic path. By simply uploading your resume and
								selecting specific course topics, our platform analyzes your
								background and interests to recommend the most relevant courses.
								Whether you're seeking to enhance your skills or explore new
								areas, CourseCraft ensures you receive personalized course
								suggestions that align with your career goals and aspirations.
							</p>
						</div>

						<div className="w-full lg:w-1/2 space-y-6 flex-1 mt-3">
							<p className="text-lg leading-relaxed text-gray-700 text-justify leading-snug tracking-tight">
								Additionally, each course recommendation comes with detailed
								information, including the syllabus, the professors offering the
								course, and why the course is a valuable choice for your
								academic and professional growth. With CourseCraft,you can
								confidently choose courses that complement your expertise,
								bridge knowledge gaps, and provide opportunities for career
								advancement.
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
