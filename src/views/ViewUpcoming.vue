<template>
    <ViewShowcase :movies="movies" :title="title" />
</template>

<script setup>
import { ref } from 'vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { getUpcoming } from '@/api/movies.js';

const movies = ref([]);
const title = ref('Upcoming');

getUpcoming().then((res) => {
    movies.value = res;
});
</script>
