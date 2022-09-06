<template>
    <div
        class="container my-0 mx-auto mt-4 mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-16"
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
import { ref } from 'vue';
import AppPoster from '@/components/movies/AppPoster.vue';
import { getTrendingDay } from '@/api/movies.js';

const movies = ref([]);

getTrendingDay().then((res) => {
    movies.value = res;
});
</script>
