import { defineStore } from 'pinia';

export const usePagination = defineStore('pagination', {
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
        setCurrentPage(page) {
            this.currentPage = Number(page);
            this.updatePagination();
        },
        setTotalPages(totalPages) {
            this.totalPages = Number(totalPages);
        },
        setTotalResults(totalResults) {
            this.totalResults = Number(totalResults);
        },
        goPrev() {
            this.currentPage -= 1;
            this.updatePagination();
        },
        goNext() {
            this.currentPage += 1;
            this.updatePagination();
        },
        updatePagination() {
            this.prevPage = this.currentPage - 1;
            this.nextPage = this.currentPage + 1;
        },
    },
});
