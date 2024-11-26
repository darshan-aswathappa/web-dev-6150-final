import { create } from 'zustand';

const useMultiSelectStore = create(set => ({
	selectedOptions: [],
	addOption: option =>
		set(state => {
			if (state.selectedOptions.length < 3) {
				return { selectedOptions: [...state.selectedOptions, option] };
			}
			return state;
		}),
	removeOption: option =>
		set(state => ({
			selectedOptions: state.selectedOptions.filter(item => item !== option),
		})),
}));

export default useMultiSelectStore;
