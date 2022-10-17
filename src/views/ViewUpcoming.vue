<template>
    <AppSpinner v-if="isLoading" class="min-h-4/5" />
    <ViewShowcase v-else :movies="movies" :title="title" />
</template>

<script setup>
import { ref, watch } from 'vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import AppSpinner from '@/components/ui/AppSpinner.vue';
import { useRoute } from 'vue-router';
import { getUpcoming } from '@/api/movies.js';

const movies = ref([]);
const title = ref('Upcoming');
const route = useRoute();
const isLoading = ref(true);

getUpcoming().then((res) => {
    movies.value = res;
    isLoading.value = false;
});

watch(
    () => route.query.page,
    (newValue) => {
        isLoading.value = true;
        getUpcoming(newValue).then((res) => {
            movies.value = res;
            isLoading.value = false;
        });
    }
);
</script>
