<template>
    <ViewShowcase :movies="movies" />
</template>

<script setup>
import { ref } from 'vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { getTrendingDay } from '@/api/movies.js';

const movies = ref([]);

getTrendingDay().then((res) => {
    movies.value = res;
});
</script>
