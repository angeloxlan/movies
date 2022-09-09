<template>
    <ViewShowcase :movies="movies" />
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { getMoviesByGenre } from '@/api/movies.js';

const movies = ref([]);
const route = useRoute();

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
</script>
