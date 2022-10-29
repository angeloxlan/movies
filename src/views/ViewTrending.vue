<template>
    <p class="container my-4 mx-auto pl-20 flex flex-col text-3xl font-bold">
        {{ title }}
    </p>
    <div class="flex flex-col flex-auto justify-center items-center">
        <AppSpinner v-if="isLoading" />
        <AppShowcase v-else :movies="movies" />
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import AppShowcase from '@/components/movies/AppShowcase.vue';
import AppSpinner from '@/components/ui/AppSpinner.vue';
import { useRoute } from 'vue-router';
import { getTrendingDay } from '@/api/movies.js';

const route = useRoute();

const movies = ref([]);
const title = ref('Trending');
const isLoading = ref(true);

watchEffect(() => {
    if (route.name != 'trending') return;

    window.scrollTo(0, 0);
    isLoading.value = true;
    getTrendingDay(route.query.page).then((res) => {
        movies.value = res;
        isLoading.value = false;
    });
});
</script>
