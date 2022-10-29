<template>
    <p class="container my-4 mx-auto pl-20 flex flex-col text-3xl font-bold">
        {{ title }}
    </p>
    <div class="flex flex-col flex-auto justify-center items-center">
        <AppSpinner v-if="isLoading" />
        <AppShowcase v-else :movies="movies" />
    </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import AppShowcase from '@/components/movies/AppShowcase.vue';
import AppSpinner from '@/components/ui/AppSpinner.vue';
import { getMoviesByGenre } from '@/api/movies.js';
import { useGenreStore } from '@/stores/genre.js';

const genreStore = useGenreStore();
const route = useRoute();

const movies = ref([]);
const isLoading = ref(true);

const title = computed(() => {
    return genreStore.getGenreNameById(route.params.id);
});

watchEffect(() => {
    if (route.name != 'genre') return;

    window.scrollTo(0, 0);
    movies.value = [];
    isLoading.value = true;
    getMoviesByGenre(route.params.id, route.query.page).then((res) => {
        movies.value = res;
        isLoading.value = false;
    });
});
</script>
