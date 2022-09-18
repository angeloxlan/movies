<template>
    <div>
        <AppDetail :id="route.params.id" class="mb-10 lg:mb-28" />
        <ViewShowcase :movies="movies" :title="title" />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppDetail from '@/components/movies/AppDetail.vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { getRecommended } from '@/api/movies.js';

const movies = ref([]);
const route = useRoute();
const title = ref('Recommended');

getRecommended(route.params.id).then((res) => {
    movies.value = res;
});

watch(
    () => route.params.id,
    (newValue) => {
        movies.value = [];
        getRecommended(newValue).then((res) => {
            movies.value = res;
        });
    }
);
</script>
