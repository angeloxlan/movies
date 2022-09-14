import { defineStore } from 'pinia';

export const useGenre = defineStore('genre', {
    state: () => {
        return {
            selected: null,
        };
    },
    actions: {
        setSelected(genre) {
            this.selected = genre;
        },
    },
});
