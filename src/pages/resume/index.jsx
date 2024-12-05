import React, { useState } from 'react';
import Layout from '../../layout/main';
import useFetchUserResumeStore from "../../store/getUserResumeStore";
import useAuthStore from '../../store/authStore';
import SpinnerComponent from '../../components/dashboard/loader';
import { Separator } from "@/components/ui/separator"
import { Navigate, useNavigate } from 'react-router-dom';
import {Button} from "@/components/ui/button";
import { RefreshCwIcon, TimerReset } from 'lucide-react';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import axios from 'axios';
import toast from 'react-hot-toast';


export default function ResumeOptions() {
	const {user, getUser} = useAuthStore();
	const { userResume, fetchingUserResume, getUserResume } = useFetchUserResumeStore();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (user.resumeData === null || user.userResumeParsedDetails === null) {
			navigate("/upload-resume", { replace: true });
		} else {
			getUserResume(user._id);
		}
	}, [user._id]);

	const handleRefresh = async () => {
		const res = await axios.put(
			`http://137.184.214.177/reupload-resume/${user._id}`
		);
		toast.success('Resume deleted successfully', {
			position: 'top-right',
		});
		if(res.status === 200) {
			await getUser(user._id);
			navigate('/upload-resume');
		}
	};

	if (fetchingUserResume) {
		return (
			<Layout>
				<SpinnerComponent spinnerLabel="Fetching user resume details..." />
			</Layout>
		);
	}

	if(user.resumeData === null || user.userResumeParsedDetails === null) {
		return <Navigate to="/upload-resume" replace />;
	}
	
	return (
		<Layout>
			<div className="flex justify-between p-2">
				<h1 className="text-4xl font-semibold mb-6">🔖 Resume</h1>
				<AlertDialog>
					<AlertDialogTrigger>
						<Button variant="outline" className="shadow-none">
							<RefreshCwIcon />
						</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone. This will permanently delete your
								resume and will redirect you to upload resume screen.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<AlertDialogAction onClick={() => handleRefresh()}>
								Continue
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
			<Separator />
			{userResume && userResume.resume ? (
				<div className="space-y-2 mt-3">
					<div className="p-2">
						<label className="font-semibold mb-2 text-2xl flex items-center">
							📍 Location:
						</label>
						{userResume && userResume.resume.location}
					</div>
					<div className="p-2">
						<label className="font-semibold mb-2 text-2xl flex items-center">
							📨 Email:
						</label>
						{userResume && userResume.resume.email}
					</div>
					<div>
						<label className="font-semibold p-2 text-2xl flex items-center">
							 ⚡️ Skills:
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
							 🏫 Education:
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
							 🏢 Experience:
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
							 💫 Projects:
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
