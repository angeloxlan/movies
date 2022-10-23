import { defineStore } from 'pinia';

export const usePaginationStore = defineStore('pagination', {
    state: () => {
        return {
            currentPage: 1,
            prevPage: null,
            nextPage: null,
            totalPages: null,
            totalResults: null,
        };
    },
    actions: {
        updatePagination() {
            this.prevPage = parseInt(this.currentPage) - 1;
            this.nextPage = parseInt(this.currentPage) + 1;
        },
    },
    getters: {
        isPrevPageAvailable: (state) => {
            if (parseInt(state.currentPage) > 1) return true;

            return false;
        },
        isNextPageAvailable: (state) => {
            if (parseInt(state.currentPage) < parseInt(state.totalPages))
                return true;

            return false;
        },
    },
});
