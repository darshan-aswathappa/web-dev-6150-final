import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
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
    const { fetchRecommendations, hasFetched } = useRecommendationStore();
    const { selectedOptions } = useMultiSelectStore();
	const [fetchResumeRecommendations, setFetchResumeRecommendations] = React.useState(false);
	const [pdfPreview, setPdfPreview] = useState(null);

	const navigate = useNavigate();

	// React.useEffect(() => {
	// 	if (user.resumeData && user.resumeData.length > 0) {
	// 		navigate('/dashboard', { replace: true });
	// 	}
	// }, [user._id]);

	const formSchema = z.object({
		resume: z.any().refine(file => file && file.length > 0, {
			message: 'Please upload a resume file',
		}),
	});

	const form = useForm({
		resolver: zodResolver(formSchema),
	});

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
	}

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
			<div className="max-w-lg mx-auto p-10 bg-white rounded-lg">
				<div className={fetchResumeRecommendations ? 'hidden' : 'block'}>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name="resume"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-lg font-medium">
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
										<FormDescription className="text-sm text-gray-500">
											Please upload your resume in PDF format.
										</FormDescription>
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
							<MultiSelect />
							<div className="flex space-x-4">
								<Button
									type="submit"
									className="w-full bg-blue-600 text-white rounded-lg mt-2"
								>
									Submit
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default UploadResume;
