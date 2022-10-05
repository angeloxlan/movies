<template>
    <div>
        <AppDetail :id="route.params.id" class="mb-10 lg:mb-28" />
        <AppSpinner v-if="isLoading" />
        <ViewShowcase v-else :movies="movies" :title="title" />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppDetail from '@/components/movies/AppDetail.vue';
import AppSpinner from '@/components/AppSpinner.vue';
import ViewShowcase from '@/views/ViewShowcase.vue';
import { getRecommended } from '@/api/movies.js';

const movies = ref([]);
const route = useRoute();
const title = ref('Recommended');
const isLoading = ref(true);

getRecommended(route.params.id).then((res) => {
    movies.value = res;
    isLoading.value = false;
});

watch(
    () => route.params.id,
    (newValue) => {
        movies.value = [];
        isLoading.value = true;
        getRecommended(newValue).then((res) => {
            movies.value = res;
            isLoading.value = false;
        });
    }
);

watch(
    () => route.query.page,
    (newValue) => {
        isLoading.value = true;
        getRecommended(route.params.id, newValue).then((res) => {
            movies.value = res;
            isLoading.value = false;
        });
    }
);
</script>
