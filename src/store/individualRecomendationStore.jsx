import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

axios.defaults.withCredentials = true;

const useIndividualRecommendationStore = create(set => ({
    recommendation: null,
    error: null,
    isFetching: false,
    hasFetched: false,

    fetchIndividualRecommendations: async (userId, resumeDataId) => {
        set({ isFetching: true, error: null });
        try {
            const response = await axios.get(
                `${API_URL}/fetch-courses-recommendation/${resumeDataId}/${userId}`,
            );			
            set({
                recommendation: response.data,
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

export default useIndividualRecommendationStore;