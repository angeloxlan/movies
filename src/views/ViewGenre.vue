<template>
    <AppSpinner v-if="isLoading" class="min-h-4/5" />
    <ViewShowcase v-else :movies="movies" :title="useGenreStore.selected" />
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ViewShowcase from '@/views/ViewShowcase.vue';
import AppSpinner from '@/components/AppSpinner.vue';
import { getMoviesByGenre } from '@/api/movies.js';
import { useGenre } from '@/stores/genre.js';

const movies = ref([]);
const route = useRoute();
const useGenreStore = useGenre();
const isLoading = ref(true);

getMoviesByGenre(route.params.id).then((res) => {
    movies.value = res;
    isLoading.value = false;
});

watch(
    () => route.params.id,
    (newValue) => {
        movies.value = [];
        isLoading.value = true;
        getMoviesByGenre(newValue).then((res) => {
            movies.value = res;
            isLoading.value = false;
        });
    }
);

watch(
    () => route.query.page,
    (newValue) => {
        isLoading.value = true;
        getMoviesByGenre(route.params.id, newValue).then((res) => {
            movies.value = res;
            isLoading.value = false;
        });
    }
);
</script>
