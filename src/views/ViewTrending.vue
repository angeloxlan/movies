<template>
    <ViewShowcase :movies="movies" :title="title" />
</template>

<script setup>
import { ref } from 'vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { getTrendingDay } from '@/api/movies.js';

const movies = ref([]);
const title = ref('Trending');

getTrendingDay().then((res) => {
    movies.value = res;
});
</script>
