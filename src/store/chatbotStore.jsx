import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.DEV
	? 'http://localhost:3000/course-information'
	: 'http://137.184.214.177/course-information';

axios.defaults.withCredentials = true;

const useChatBotStore = create((set) => ({
    messages: [],
    conversations: [],
    addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    sendMessage: async (message) => {
        set((state) => ({ messages: [...state.messages, { author: "user", message }] }));
        try {
            const response = await axios.post(API_URL, { message });
            set((state) => ({
                messages: [...state.messages, { author: "bot", message: response.data }],
                conversations: [...state.conversations, { user: message, bot: response.data }]
            }));
        } catch (error) {
            console.error(error);
        }
    }
}));

export default useChatBotStore;