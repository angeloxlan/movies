<template>
    <AppNavbar />
    <router-view></router-view>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue';
import { getMovieGenres } from '@/api/movies.js';
import { useGenreStore } from '@/stores/genre.js';

const genreStore = useGenreStore();

getMovieGenres().then((res) => {
    genreStore.genres = res.genres;
});
</script>

<style>
@media (min-width: 768px) {
    body {
        overflow-y: scroll !important;
    }
}
</style>
