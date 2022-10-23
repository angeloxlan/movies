<template>
    <AppSpinner v-if="isLoading" class="min-h-4/5" />
    <AppShowcase
        v-else
        :movies="movies"
        :title="genreStore.getGenreNameById(route.params.id)"
    />
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import AppShowcase from '@/components/movies/AppShowcase.vue';
import AppSpinner from '@/components/ui/AppSpinner.vue';
import { getMoviesByGenre } from '@/api/movies.js';
import { useGenreStore } from '@/stores/genre.js';

const genreStore = useGenreStore();

const movies = ref([]);
const route = useRoute();
const isLoading = ref(true);

watchEffect(() => {
    if (route.name != 'genre') return;

    movies.value = [];
    isLoading.value = true;
    getMoviesByGenre(route.params.id, route.query.page).then((res) => {
        movies.value = res;
        isLoading.value = false;
    });
});
</script>
