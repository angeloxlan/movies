<template>
    <AppSpinner v-if="isLoading" class="min-h-4/5" />
    <ViewShowcase v-else :movies="movies" :title="title" />
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import AppSpinner from '@/components/ui/AppSpinner.vue';
import { useRoute } from 'vue-router';
import { getTrendingDay } from '@/api/movies.js';

const route = useRoute();

const movies = ref([]);
const title = ref('Trending');
const isLoading = ref(true);

watchEffect(() => {
    isLoading.value = true;
    getTrendingDay(route.query.page).then((res) => {
        movies.value = res;
        isLoading.value = false;
    });
});
</script>
