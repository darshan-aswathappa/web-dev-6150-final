import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

axios.defaults.withCredentials = true;

const useRecommendationStore = create(set => ({
	recommendations: null,
	error: null,
	isFetching: false,

	fetchRecommendations: async subjects => {
		set({ isFetching: true, error: null});
		try {
			const response = await axios.post(
				`${API_URL}/fetch-courses-recommendation`,
				{
					subjects,
				}
			);			
			set({
				recommendations: response.data,
				isFetching: false,
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