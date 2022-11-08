<template>
    <p
        class="font-ubuntu container my-4 mx-auto pl-20 flex flex-col text-3xl font-bold"
    >
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
import { getSearch } from '@/api/movies.js';

const route = useRoute();

const movies = ref([]);
const title = ref('Search');
const isLoading = ref(true);

watchEffect(() => {
    if (route.name != 'search') return;

    window.scrollTo(0, 0);
    isLoading.value = true;
    title.value = `"${route.query.query}"`;
    getSearch(route.query.query, route.query.page).then((res) => {
        movies.value = res;
        isLoading.value = false;

        document.title = `Search ${title.value} - ${import.meta.env.VITE_APP_TITLE}`;
    });
});
</script>
