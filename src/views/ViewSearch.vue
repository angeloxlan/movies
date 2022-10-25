<template>
    <div class="flex flex-col flex-auto justify-center items-center">
        <AppSpinner v-if="isLoading" />
        <AppShowcase v-else :movies="movies" :title="title" />
    </div>
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

    window.scrollTo(0, 0);
    isLoading.value = true;
    title.value = `"${route.query.query}"`;
    getSearch(route.query.query, route.query.page).then((res) => {
        movies.value = res;
        isLoading.value = false;
    });
});
</script>
