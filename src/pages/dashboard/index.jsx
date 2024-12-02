import React from 'react';
import Layout from '../../layout/main';
import useRecommendationStore from '../../store/resume-recomendation';
import SpinnerComponent from "../../components/dashboard/loader";
import UseAuthStore from "../../store/authStore";
import PaginatedRecommendations from '../../components/dashboard/paginatedResponse';
import useSortStore from '../../store/sortStore';
import { Toggle } from '@/components/ui/toggle';
import { ArrowUpNarrowWide, ArrowDownNarrowWide } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import useMultiSelectStore from '../../store/useMultiSelectStore';

export default function Dashboard() {	
	const { fetchRecommendations, isFetching, error, recommendations, hasFetched } =
		useRecommendationStore();
	const { user } = UseAuthStore();	
	const { sortOrder, toggleSortOrder } = useSortStore();
	const {SelectedOptions} = useMultiSelectStore();

	console.log(SelectedOptions);
	
	if (user.userResumeParsedDetails === null 
		|| user.resumeData === null 
		|| user.resumeData === undefined 
		|| user.resumeData.length === 0) {
		return <Navigate to="/upload-resume" replace />;
	}

	React.useEffect(() => {
		if (!hasFetched) {
			fetchRecommendations("", user._id).then(() => {
				useRecommendationStore.setState({ hasFetched: true });
			});
		}
	}, [hasFetched, fetchRecommendations]);
	
	if(isFetching || recommendations === null) {
		return (
			<Layout>
				<SpinnerComponent />
			</Layout>
		);
	}
	
	const sortedRecommendations = [...recommendations].sort((a, b) =>
		sortOrder === 'high-to-low' ? b.rank - a.rank : a.rank - b.rank
	);

	return (
		<Layout>
			<div className="hidden md:block text-lg text-black font-bold justify-start pl-2">
					👋 Hello <span className='capitalize pl-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>{user.name}</span>, here are your courses recommendations 🔥
			</div>
			<div className="flex justify-between px-2 pt-2">
				<div className="text-xs text-gray-500 font-medium flex justify-center items-center">
					Showing {recommendations.length} recommendations based on your resume
				</div>
				<Toggle
					className="font-semibold text-sm border p-3 bg-gray-50 rounded-lg"
					onPressedChange={toggleSortOrder}
				>
					{sortOrder === 'high-to-low' ? (
						<span className="flex items-center space-x-2">
							<ArrowDownNarrowWide className="w-3" />
							<span>High to Low</span>
						</span>
					) : (
						<span className="flex items-center space-x-2">
							<ArrowUpNarrowWide className="w-3" />
							<span>Low to High</span>
						</span>
					)}
				</Toggle>
			</div>
			<PaginatedRecommendations
				recommendations={recommendations}
				sortedRecommendations={sortedRecommendations}
			/>
		</Layout>
	);
}
