<template>
    <AppSpinner v-if="isLoading" class="min-h-4/5" />
    <ViewShowcase v-else :movies="movies" :title="title" />
</template>

<script setup>
import { ref, watch } from 'vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import AppSpinner from '@/components/ui/AppSpinner.vue';
import { useRoute } from 'vue-router';
import { getSearch } from '@/api/movies.js';

const movies = ref([]);
const title = ref('Search');
const route = useRoute();
const isLoading = ref(true);

getSearch(route.query.query, route.query.page).then((res) => {
    movies.value = res;
    isLoading.value = false;
});
title.value = `"${route.query.query}"`;

watch(
    [() => route.query.query, () => route.query.page],
    ([newQuery, newPage]) => {
        isLoading.value = true;
        title.value = `"${newQuery}"`;
        getSearch(newQuery, newPage).then((res) => {
            movies.value = res;
            isLoading.value = false;
        });
    }
);
</script>
