<template>
    <AppSpinner v-if="isLoading" class="min-h-4/5" />
    <ViewShowcase v-else :movies="movies" :title="genreStore.getGenreNameById(route.params.id)" />
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ViewShowcase from '@/views/ViewShowcase.vue';
import AppSpinner from '@/components/ui/AppSpinner.vue';
import { getMoviesByGenre } from '@/api/movies.js';
import { useGenreStore } from '@/stores/genre.js';

const genreStore = useGenreStore();

const movies = ref([]);
const route = useRoute();
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
