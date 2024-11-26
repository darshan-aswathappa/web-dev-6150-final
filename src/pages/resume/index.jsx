import React, { useState } from 'react';
import Layout from '../../layout/main';
import useFetchUserResumeStore from "../../store/getUserResumeStore";
import useAuthStore from '../../store/authStore';
import SpinnerComponent from '../../components/dashboard/loader';
import { Book, FileSpreadsheetIcon, MapPin, Mail, Award, Briefcase, MedalIcon } from 'lucide-react';
import { Separator } from "@/components/ui/separator"

export default function ResumeOptions() {
	const {user} = useAuthStore();
	const { userResume, fetchingUserResume, getUserResume } = useFetchUserResumeStore();
	const [email, setEmail] = useState('');
	const [location, setLocation] = useState('');
		
	React.useEffect(() => {
		const fetchResume = async () => {
			await getUserResume(user._id);
			if (userResume && userResume.resume) {
				setEmail(userResume.resume.email);
				setLocation(userResume.resume.location);
			}
		};
		fetchResume();
	}, [user._id]);

	if (fetchingUserResume) {
		return <SpinnerComponent spinnerLabel='Fetching user resume details...' />;
	}
	
	return (
		<Layout>
			<div className="flex">
				<FileSpreadsheetIcon className="w-10 h-10" />
				<h1 className="text-4xl font-semibold mb-6 pl-2">Resume</h1>
			</div>
			<Separator />
			{userResume && userResume.resume ? (
				<div className="space-y-2 mt-3">
					<div className="p-2">
						<label className="font-semibold mb-2 text-2xl flex items-center">
							<MapPin className="mr-2" /> Location:
						</label>
						<input
							type="text"
							value={location}
							onChange={e => setLocation(e.target.value)}
							className="border p-2 w-full"
							disabled
						/>
					</div>
					<div className="p-2">
						<label className="font-semibold mb-2 text-2xl flex items-center">
							<Mail className="mr-2" /> Email:
						</label>
						<input
							type="text"
							value={email}
							onChange={e => setLocation(e.target.value)}
							className="border p-2 w-full"
							disabled
						/>
					</div>
					<div>
						<label className="font-semibold p-2 text-2xl flex items-center">
							<Book className="mr-2" /> Skills:
						</label>
						<Separator />
						<div className="flex flex-wrap">
							<div className="rounded-lg m-2 text-justify text-md">
								{userResume.resume.skills}
							</div>
						</div>
					</div>
					<div>
						<label className="font-semibold p-2 text-2xl flex items-center">
							<Award className="mr-2" /> Education:
						</label>
						<Separator />
						<div className="flex flex-wrap">
							<div className="rounded-lg m-2">
								{userResume.resume.education.map((edu, index) => (
									<div key={index} className="mb-4">
										<p className="font-medium italic">{edu.degree}</p>
										<p>{edu.college}</p>
										<p>{edu.location}</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<div>
						<label className="font-semibold p-2 text-2xl flex items-center">
							<Briefcase className="mr-2" /> Experience:
						</label>
						<Separator />
						<div className="flex flex-wrap">
							<div className="rounded-lg m-2">
								{userResume.resume.experience.map((exp, index) => (
									<div key={index} className="mb-4">
										<p className="font-semibold italic">{exp.company}</p>
										<p>{exp.position}</p>
										<p>{exp.location}</p>
										<p className="text-justify text-md">
											{exp.workDescription}
										</p>
										<p>{exp.duration}</p>
										<p>
											<span className="font-medium">Start Date: </span>
											{exp.startDate}
										</p>
										<p>
											<span className="font-medium">End Date: </span>
											{exp.endDate}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<div>
						<label className="font-semibold p-2 text-2xl flex items-center">
							<MedalIcon className="mr-2" /> Projects:
						</label>
						<Separator />
						<div className="flex flex-wrap">
							<div className="rounded-lg m-2">
								{userResume.resume.projects.map((project, index) => (
									<div key={index} className="mb-4">
										<p className="font-semibold italic">
											{project.projectName}
										</p>
										<p className="text-justify text-md">
											{project.projectDescription}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			) : (
				<p>No resume uploaded</p>
			)}
		</Layout>
	);
}
