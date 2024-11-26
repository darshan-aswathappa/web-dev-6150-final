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

export default function Dashboard() {	
	const { fetchRecommendations, isFetching, error, recommendations, hasFetched } =
		useRecommendationStore();
	const { user } = UseAuthStore();	
	const { sortOrder, toggleSortOrder } = useSortStore();

	if (user.userResumeParsedDetails === null 
		|| user.resumeData === null 
		|| user.resumeData === undefined 
		|| user.resumeData.length === 0) {
		return <Navigate to="/upload-resume" replace />;
	}

	React.useEffect(() => {
		if (!hasFetched) {
			fetchRecommendations("", user._id);
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
			<div className='flex justify-end pr-1'>
				<Toggle className="font-semibold text-sm border p-3 bg-gray-50" onPressedChange={toggleSortOrder}>
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
