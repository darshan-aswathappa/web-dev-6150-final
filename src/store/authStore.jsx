import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.DEV ? 'http://localhost:3000/api/auth' : 'http://159.203.135.38:80/api/auth';

axios.defaults.withCredentials = true;

const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    isCheckingAuth: true,
    message: null,

    signUp: async (email, password, name) => {
        set({isLoading: true, error: null});
        try {
            const response = await axios.post(`${API_URL}/signup`, {email, password, name},{withCredentials:true});
            set({user: response.data.user, isAuthenticated: true, isLoading: false});
        } catch (error) {
            set({ error: error.response.data.message || "Error signing up", isLoading: false });
            throw error;
        }
    },

    signIn: async (email, password) => {
        set({isLoading: true, error: null});
        try {
            const response = await axios.post(`${API_URL}/login`, {email, password});
            set({user: response.data.user, isAuthenticated: true, isLoading: false});
        } catch (error) {
            set({ error: error.response.data.message || "Error signing in", isLoading: false });
            throw error;
        }
    },

    checkAuth: async () => {
        set({ isCheckingAuth: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/check-auth`, {withCredentials:true});
            set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
        } catch (error) {
            set({ error: null, isCheckingAuth: false, isAuthenticated: false });
        }
    },

    verifyEmail: async (code) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/verify-email`, { code });
            set({ user: response.data.user, isAuthenticated: true, isLoading: false });
            return response.data;
        } catch (error) {
            set({ error: error.response.data.message || "Error verifying email", isLoading: false });
            throw error;
        }
    },

    logOut: async () => {
        set({ isLoading: true, error: null });
        try {
            await axios.post(`${API_URL}/logout`);
            set({ user: null, isAuthenticated: false, error: null, isLoading: false });
        } catch (error) {
            set({ error: "Error logging out", isLoading: false });
            throw error;
        }
    },

    forgotPassword: async (email) => {
        set({ isLoading: true, error: null, message:null});
        try {
            const response = await axios.post(`${API_URL}/forgot-password`, {email});
            set({ message: response.data.message, isLoading: false });
        } catch (error) {
            set({error: error.response.data.message || "Error verifying email", isLoading: false });
            throw error;
        }
    },

    resetPassword: async (token, password) => { 
        set({isLoading: true, error:null});
        try {
            const response = await axios.post(`${API_URL}/reset-password/${token}`, {password})
            set({message:response.data.message, isLoading:false})            
        } catch (error) {
            set({
                isLoading:false,
                error: error.response.data.message || "Error resetting password",
            });
            throw error;
        }
    },

    getUser: async (userId) => {
        set({isLoading: true, error:null});
        try {
            const response = await axios.get(`${API_URL}/get-user/${userId}`);
            set({user: response.data.user, isLoading:false});
        } catch (error) {
            set({error: error.response.data.message || "Error getting user", isLoading:false});
            throw error;
        }
    }
}));

export default useAuthStore;