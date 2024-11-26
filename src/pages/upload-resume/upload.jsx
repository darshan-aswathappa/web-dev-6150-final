import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
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
import SpinnerComponent from '../../components/dashboard/loader';
import { Navigate } from 'react-router-dom';

function UploadResume() {
	const { user } = useAuthStore();
	const { postResumeDetails } = useUploadResumeStore();
    const { fetchRecommendations, hasFetched } = useRecommendationStore();
    const { selectedOptions } = useMultiSelectStore();
	const [fetchResumeRecommendations, setFetchResumeRecommendations] = React.useState(false);

	if(user.resumeData && user.resumeData.length > 0) {
		return <Navigate to="/dashboard"  replace/>
	}

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
			setFetchResumeRecommendations(false);
			toast.success('Recommendations generated!', {
				position: 'bottom-right',
			});
	    } catch (error) {
	    	toast.error('Failed to upload resume');
	    }
	}

	return (
		<div className="mx-auto p-10 bg-white rounded-lg">
			{fetchResumeRecommendations && <div><SpinnerComponent spinnerLabel='Fetching custom recommendation, this might take a upto 10 minutes...'/></div>}
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
										onChange={e => field.onChange(e.target.files)}
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
	);
}

export default UploadResume;
