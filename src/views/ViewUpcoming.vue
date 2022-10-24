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
import { getUpcoming } from '@/api/movies.js';

const route = useRoute();

const movies = ref([]);
const title = ref('Upcoming');
const isLoading = ref(true);

watchEffect(() => {
    if (route.name != 'upcoming') return;

    isLoading.value = true;
    getUpcoming(route.query.page).then((res) => {
        movies.value = res;
        isLoading.value = false;
    });
});
</script>
