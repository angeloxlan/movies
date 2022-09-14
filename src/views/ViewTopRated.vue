<template>
    <ViewShowcase :movies="movies" :title="title" />
</template>

<script setup>
import { ref } from 'vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { getTopRated } from '@/api/movies.js';

const movies = ref([]);
const title = ref('Top Rated');

getTopRated().then((res) => {
    movies.value = res;
});
</script>
