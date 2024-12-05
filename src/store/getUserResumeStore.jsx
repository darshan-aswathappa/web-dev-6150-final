import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.DEV
	? 'http://localhost:3000'
	: 'http://137.184.214.177';

axios.defaults.withCredentials = true;

const useFetchUserResumeStore = create((set) => ({
    userResume: null,
    fetchingUserResume: false,
    getUserResume: async userId => {
        set({ fetchingUserResume: true });
        try {
            const response = await axios.get(`${API_URL}/resume-view/${userId}`);
            set({ userResume: response.data });
        } catch (error) {
            console.error(error);
        } finally {
            set({ fetchingUserResume: false });
        }
    }
}));

export default useFetchUserResumeStore;