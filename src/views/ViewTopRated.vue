<template>
    <ViewShowcase :movies="movies" :title="title" />
</template>

<script setup>
import { ref, watch } from 'vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { useRoute } from 'vue-router';
import { getTopRated } from '@/api/movies.js';

const movies = ref([]);
const title = ref('Top Rated');
const route = useRoute();

getTopRated().then((res) => {
    movies.value = res;
});

watch(
    () => route.query.page,
    (newValue) => {
        getTopRated(newValue).then((res) => {
            movies.value = res;
        });
    }
);
</script>
