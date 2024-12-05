import { create } from "zustand";
import axios from 'axios';

const API_URL = import.meta.env.DEV
	? 'http://localhost:3000'
	: 'http://159.203.135.38';

axios.defaults.withCredentials = true;

const useUploadResumeStore = create(set => ({
    resume: null,
    isFetched: false,
    postResumeDetails: async (userId, resume) => {
        try {
            const formData = new FormData();
            formData.append('resume', resume);
            const response = await axios.post(
							`${API_URL}/upload-parse-resume/${userId}`,
							formData,
							{
								headers: {
									'Content-Type': 'multipart/form-data',
								},
							}
						);
            set({ resume: response.data , isFetched: true});
        } catch (error) {
            console.error(error);
            set({ resume: null, isFetched: false });
        }
    },
}));

export default useUploadResumeStore;