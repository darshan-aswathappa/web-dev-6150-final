import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.DEV
	? 'http://localhost:3000'
	: 'http://137.184.214.177';

axios.defaults.withCredentials = true;

const useFetchUsersAdminStore = create((set) => ({
    users: [],
    fetchingUsers: false,
    getUsers: async () => {
        set({ fetchingUsers: true });
        try {
            const response = await axios.get(`${API_URL}/api/auth/getAllUsers`);
            set({ users: response.data.users });
        } catch (error) {
            console.error(error);
        } finally {
            set({ fetchingUsers: false });
        }
    }
}));

export default useFetchUsersAdminStore;
