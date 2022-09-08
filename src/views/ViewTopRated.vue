<template>
    <ViewShowcase :movies="movies" />
</template>

<script setup>
import { ref } from 'vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { getTopRated } from '@/api/movies.js';

const movies = ref([]);

getTopRated().then((res) => {
    movies.value = res;
});
</script>
