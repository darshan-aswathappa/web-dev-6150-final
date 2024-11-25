import React from 'react';
import Layout from '../../layout/main';
import { useParams } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import useIndividualRecommendationStore from '../../store/individualRecomendationStore';
import SpinnerComponent from '../../components/dashboard/loader';
import { Book, BookCopy } from 'lucide-react';

function IndividualPaths() {
	const params = useParams();
	const { subjectId: id } = params;
	const { user } = useAuthStore();
	const { fetchIndividualRecommendations, isFetching, error, recommendation } =
		useIndividualRecommendationStore();

	React.useEffect(() => {
		fetchIndividualRecommendations(id, user._id);
	}, [fetchIndividualRecommendations, id]);

	if (isFetching || recommendation === null) {
		return (
			<Layout>
				<SpinnerComponent spinnerLabel='Fetching individual recommendation data...'/>
			</Layout>
		);
	}

	return ( 
		<Layout>
			<div className='p-4'>
				<div className='flex space-x-2'>
					<BookCopy/>
					<p className="font-bold text-2xl">{recommendation.subjectName}</p>
				</div>
				<p className="font-bold text-md italic">Description:</p>
				<p className='text-justify text-lg'>{recommendation.description}</p>
				<p className='font-bold text-md italic'>Recommendation Reason:</p>
				<p className="text-justify text-lg">{recommendation.pickReason}</p>
			</div>
		</Layout>
	);
}

export default IndividualPaths;
