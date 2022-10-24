<template>
    <div
        v-if="isMoviesAvailable"
        class="container min-h-screen my-0 mx-auto mt-4 mb-6 flex flex-col"
    >
        <div class="grid grid-cols-1 lg:grid-cols-4 gra-y-16">
            <p class="text-center text-3xl font-bold mb-6">{{ title }}</p>
        </div>
        <div
            class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-16"
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
        <AppPagination
            :page="props.movies.page"
            :totalPages="props.movies.total_pages"
            :totalResults="props.movies.total_results"
        />
    </div>
    <AppNoResults v-else />
</template>

<script setup>
import { computed, defineProps, ref, watch } from 'vue';
import AppPoster from '@/components/movies/AppPoster.vue';
import AppPagination from '@/components/AppPagination.vue';
import AppNoResults from '@/components/ui/AppNoResults.vue';

const props = defineProps({
    movies: {
        page: Number,
        results: Array,
        total_pages: Number,
        total_results: Number,
    },
    title: String,
});

const isMoviesAvailable = computed(() => {
    return props.movies.results && props.movies.results.length;
});
</script>
