<template>
    <AppDetail :id="route.params.id" class="mb-10 lg:mb-28" />
    <div class="flex flex-col flex-auto justify-center items-center">
        <AppSpinner v-if="isLoading" />
        <AppShowcase v-else :movies="movies" :title="title">
            <template #noResults>
                <p class="font-bold text-xl text-slate-500">
                    No recommendations found
                </p>
            </template>
        </AppShowcase>
    </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import AppDetail from '@/components/movies/AppDetail.vue';
import AppSpinner from '@/components/ui/AppSpinner.vue';
import AppShowcase from '@/components/movies/AppShowcase.vue';
import { getRecommended } from '@/api/movies.js';

const route = useRoute();

const movies = ref([]);
const title = ref('Recommended');
const isLoading = ref(true);

watchEffect(() => {
    if (route.name != 'movieDetail') return;

    window.scrollTo(0, 0);
    movies.value = [];
    isLoading.value = true;
    getRecommended(route.params.id, route.query.page).then((res) => {
        movies.value = res;
        isLoading.value = false;
    });
});
</script>
