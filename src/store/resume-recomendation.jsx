import { create } from 'zustand';
import axios from 'axios';

const API_URL = import.meta.env.DEV
	? 'http://localhost:3000'
	: 'http://159.203.135.38';

axios.defaults.withCredentials = true;

const useRecommendationStore = create(set => ({
	recommendations: null,
	error: null,
	isFetching: false,
	hasFetched: false,

	fetchRecommendations: async (subjects, userId) => {
		set({ isFetching: true, error: null });
		try {
			const response = await axios.post(
				`${API_URL}/fetch-courses-recommendation`,
				{
					message: subjects,
					userId,
				}
			);			
			set({
				recommendations: response.data,
				isFetching: false,
				hasFetched: true,
			});
		} catch (error) {
			set({
				error: error.response?.data?.message || 'Error fetching details',
				isFetching: false,
			});
			throw error;
		}
	},
}));

export default useRecommendationStore;