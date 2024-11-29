import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useUploadResumeStore from '../../store/uploadResumeStore';
import useAuthStore from '../../store/authStore';
import toast from 'react-hot-toast';
import MultiSelect from '../../components/upload-resume/multiSelect';
import useRecommendationStore from '../../store/resume-recomendation';
import useMultiSelectStore from '../../store/useMultiSelectStore';
import { Navigate, useNavigate } from 'react-router-dom';
import loaderGif from '../../assets/images/loader.gif';

function UploadResume() {
	const { user, getUser } = useAuthStore();
	const { postResumeDetails } = useUploadResumeStore();
	const { fetchRecommendations } = useRecommendationStore();
	const { selectedOptions } = useMultiSelectStore();
	const [fetchResumeRecommendations, setFetchResumeRecommendations] = useState(false);
	const [pdfPreview, setPdfPreview] = useState(null);
	const [isDialogOpen, setIsDialogOpen] = useState(true); 
	const navigate = useNavigate();

	if (user.resumeData && user.resumeData.length > 0) {
		return <Navigate to="/dashboard" replace />;
	}

	const formSchema = z.object({
		resume: z.any().refine((file) => file && file.length > 0, {
			message: 'Please upload a resume file',
		}),
	});

	const form = useForm({
		resolver: zodResolver(formSchema),
	});


	const handleFileChange = (files) => {
		form.setValue('resume', files);
		if (files && files.length > 0) {
			const file = files[0];
			const fileReader = new FileReader();
			fileReader.onload = (e) => {
				setPdfPreview(e.target.result);
			};
			fileReader.readAsDataURL(file);
		} else {
			setPdfPreview(null);
		}
	};

	async function onSubmit(values) {
		if (selectedOptions.length === 0) {
			toast.error('Please select at least one subject');
			return;
		}
		setFetchResumeRecommendations(true);
		try {
			await postResumeDetails(user._id, values.resume[0]);
			await fetchRecommendations(selectedOptions.join(','), user._id);
		} catch (error) {
			toast.error('Failed to upload resume');
		} finally {
			setFetchResumeRecommendations(false);
			await getUser(user._id);
		}
		setIsDialogOpen(false);
		window.location.reload();
	}

	return (
		<div>
			{fetchResumeRecommendations && (
				<div className="fixed top-0 left-0 z-50 w-full h-full flex flex-col items-center justify-center">
					<img src={loaderGif} alt="Loading..." width="150" height="150" />
					<p className="mt-2 text-md font-medium">
						Fetching custom recommendation, this might take a upto 10 minutes...
					</p>
				</div>
			)}
			{isDialogOpen && (
				<div className={fetchResumeRecommendations ? 'hidden' : 'block'}>
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 bg-gradient-to-br from-teal-100 to-teal-400">
						<div
							className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6"
							style={{
								backgroundColor: '#f5f7fa',
								color: '#1a202c',
								border: '1px solid #e2e8f0',
							}}
						>
							<div className="flex flex-col items-center mb-0	">
								<h1 className="text-2xl font-semibold mb-0">Upload a resume</h1>
								<h4 className="text-sm mt-0 mb-4">
									For best results, resume uploads should be in PDF format
								</h4>
								<button
									onClick={() => setIsDialogOpen(false)}
									className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
								>
									&times;
								</button>
							</div>
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)}>
									<FormField
										control={form.control}
										name="resume"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-md font-medium">
													Upload Resume
												</FormLabel>
												<FormControl>
													<Input
														type="file"
														accept="application/pdf"
														onChange={e => handleFileChange(e.target.files)}
														className="mt-2"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									{pdfPreview && (
										<div className="my-4">
											<embed
												src={pdfPreview}
												type="application/pdf"
												width="100%"
												height="200px"
											/>
										</div>
									)}
									<div className="mt-4">
										<MultiSelect />
									</div>
									<div className="flex justify-end mt-6">
										<Button
											type="submit"
											className="bg-blue-600 text-white rounded-lg px-4 py-2"
										>
											Submit
										</Button>
									</div>
								</form>
							</Form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default UploadResume;
