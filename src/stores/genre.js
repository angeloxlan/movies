import { defineStore } from 'pinia';

export const useGenreStore = defineStore('genre', {
    state: () => {
        return {
            genres: [],
        };
    },
    getters: {
        getGenreNameById: (state) => {
            return (id) => {
                const genre = state.genres.find((genre) => {
                    return genre.id === parseInt(id);
                });

                return genre?.name;
            }
        }
    },
});
