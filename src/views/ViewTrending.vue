<template>
    <ViewShowcase :movies="movies" :title="title" />
</template>

<script setup>
import { ref, watch } from 'vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { useRoute } from 'vue-router';
import { getTrendingDay } from '@/api/movies.js';

const movies = ref([]);
const title = ref('Trending');
const route = useRoute();

getTrendingDay().then((res) => {
    movies.value = res;
});

watch(
    () => route.query.page,
    (newValue) => {
        getTrendingDay(newValue).then((res) => {
            movies.value = res;
        });
    }
);
</script>
