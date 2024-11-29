import { create } from "zustand";

const useSortStore = create(set => ({
	sortOrder: 'high-to-low',
	toggleSortOrder: () =>
		set(state => ({
			sortOrder:
				state.sortOrder === 'high-to-low' ? 'low-to-high' : 'high-to-low',
		})),
}));

export default useSortStore;
