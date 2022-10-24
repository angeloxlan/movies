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
import { getTopRated } from '@/api/movies.js';

const route = useRoute();

const movies = ref([]);
const title = ref('Top Rated');
const isLoading = ref(true);

watchEffect(() => {
    if (route.name != 'topRated') return;

    isLoading.value = true;
    getTopRated(route.query.page).then((res) => {
        movies.value = res;
        isLoading.value = false;
    });
});
</script>
