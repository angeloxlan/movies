<template>
    <AppSpinner v-if="isLoading" class="min-h-4/5" />
    <AppShowcase v-else :movies="movies" :title="title" />
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import AppShowcase from '@/components/movies/AppShowcase.vue';
import AppSpinner from '@/components/ui/AppSpinner.vue';
import { useRoute } from 'vue-router';
import { getSearch } from '@/api/movies.js';

const movies = ref([]);
const title = ref('Search');
const route = useRoute();
const isLoading = ref(true);

watchEffect(() => {
    if (route.name != 'search') return;

    isLoading.value = true;
    title.value = `"${route.query.query}"`;
    getSearch(route.query.query, route.query.page).then((res) => {
        movies.value = res;
        isLoading.value = false;
    });
});
</script>
