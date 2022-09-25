<template>
    <ViewShowcase :movies="movies" :title="title" />
</template>

<script setup>
import { ref, watch } from 'vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { useRoute } from 'vue-router';
import { getUpcoming } from '@/api/movies.js';

const movies = ref([]);
const title = ref('Upcoming');
const route = useRoute();

getUpcoming().then((res) => {
    movies.value = res;
});

watch(
    () => route.query.page,
    (newValue) => {
        getUpcoming(newValue).then((res) => {
            movies.value = res;
        });
    }
);
</script>
