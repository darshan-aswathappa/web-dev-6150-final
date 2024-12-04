import { create } from "zustand";
import axios from "axios";

const API_URL = "http://165.22.15.114";

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