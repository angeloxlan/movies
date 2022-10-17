import { defineStore } from 'pinia';

export const useGenre = defineStore('genre', {
    state: () => {
        return {
            // selected: null,
            id: null,
            genres: [],
        };
    },
    actions: {
        // setSelected(genre) {
        //     this.selected = genre;
        // },
        setSelection(id) {
            this.id = Number(id);
        },
        setGenres(genres) {
            this.genres = genres;
        },
    },
    getters: {
        getSelectionName() {
            const genre = this.genres.find((genre) => {
                return genre.id === this.id;
            });

            return genre?.name;
        }
    },
});
