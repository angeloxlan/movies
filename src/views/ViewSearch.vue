<template>
    <ViewShowcase :movies="movies" :title="title" />
</template>

<script setup>
import { ref, watch } from 'vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { useRoute } from 'vue-router';
import { getSearch } from '@/api/movies.js';

const movies = ref([]);
const title = ref('Search');
const route = useRoute();

getSearch(route.query.query).then((res) => (movies.value = res));

watch(
    () => route.query.query,
    (newValue) => {
        getSearch(newValue).then((res) => (movies.value = res));
    }
);
</script>
