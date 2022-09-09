<template>
    <div
        class="container min-h-screen my-0 mx-auto mt-4 mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-16"
    >
        <AppPoster
            v-for="movie in movies.results"
            :id="movie.id"
            :title="movie.title"
            :posterPath="movie.poster_path"
            :voteAverage="movie.vote_average"
            :key="movie.id"
            :voteCount="movie.vote_count"
        />
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import AppPoster from '@/components/movies/AppPoster.vue';

const props = defineProps({
    movies: {
        page: Number,
        movies: Array,
        total_pages: Number,
        total_results: Number,
    },
});
</script>
