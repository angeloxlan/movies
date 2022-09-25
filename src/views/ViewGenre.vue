<template>
    <ViewShowcase :movies="movies" :title="useGenreStore.selected" />
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { getMoviesByGenre } from '@/api/movies.js';
import { useGenre } from '@/stores/genre.js';

const movies = ref([]);
const route = useRoute();
const useGenreStore = useGenre();

getMoviesByGenre(route.params.id).then((res) => {
    movies.value = res;
});

watch(
    () => route.params.id,
    (newValue) => {
        movies.value = [];
        getMoviesByGenre(newValue).then((res) => {
            movies.value = res;
        });
    }
);

watch(
    () => route.query.page,
    (newValue) => {
        getMoviesByGenre(route.params.id, newValue).then((res) => {
            movies.value = res;
        });
    }
);
</script>
