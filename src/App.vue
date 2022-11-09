<template>
    <AppNavbar />
    <router-view></router-view>
    <AppFooter />
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import { getMovieGenres } from '@/api/movies.js';
import { useGenreStore } from '@/stores/genre.js';

const genreStore = useGenreStore();

getMovieGenres().then((res) => {
    genreStore.genres = res.genres;
});
</script>

<style>
html,
body {
    @apply h-full;
}

#app {
    @apply h-full flex flex-col;
}

@media (min-width: 768px) {
    body {
        overflow-y: scroll !important;
    }
}
</style>
