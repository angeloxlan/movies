<template>
    <AppNavbar />
    <router-view></router-view>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue';
import { getMovieGenres } from '@/api/movies.js';
import { useGenre } from '@/stores/genre.js';

const useGenreStore = useGenre();

getMovieGenres().then((res) => {
    useGenreStore.setGenres(res.genres);
});
</script>

<style>
@media (min-width: 768px) {
    body {
        overflow-y: scroll !important;
    }
}
</style>
