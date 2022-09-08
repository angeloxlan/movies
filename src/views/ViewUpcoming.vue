<template>
    <ViewShowcase :movies="movies" />
</template>

<script setup>
import { ref } from 'vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { getUpcoming } from '@/api/movies.js';

const movies = ref([]);

getUpcoming().then((res) => {
    movies.value = res;
});
</script>
