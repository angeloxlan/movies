<template>
    <AppDetail
        :id="route.params.id"
        :movie="movie"
        :cast="cast"
        class="mb-10 lg:mb-28"
    />
    <p
        ref="detailTitle"
        class="font-ubuntu container my-4 mx-auto pl-20 flex flex-col text-3xl font-bold"
    >
        {{ title }}
    </p>
    <div class="flex flex-col flex-auto justify-center items-center">
        <AppSpinner v-if="isLoading" class="min-h-screen" />
        <AppShowcase v-else :movies="movies">
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
import { useRoute, useRouter } from 'vue-router';
import AppDetail from '@/components/movies/AppDetail.vue';
import AppSpinner from '@/components/ui/AppSpinner.vue';
import AppShowcase from '@/components/movies/AppShowcase.vue';
import { getCast, getDetail, getRecommended } from '@/api/movies.js';

const route = useRoute();
const router = useRouter();

const movies = ref([]);
const movie = ref([]);
const cast = ref([]);
const title = ref('Recommended');
const isLoading = ref(true);
const detailTitle = ref(null);

watchEffect(() => {
    if (route.name != 'movieDetail') return;

    movies.value = [];
    movie.value = [];
    cast.value = [];
    isLoading.value = true;

    if (route.query.page && detailTitle.value)
        detailTitle.value.scrollIntoView();
    else window.scrollTo(0, 0);

    getDetail(route.params.id).then((res) => {
        if (res.hasOwnProperty('success') && !res.success)
            router.push({ name: 'NotFound' });

        movie.value = res;

        document.title = movie.value.title
            ? `${movie.value.title} - ${import.meta.env.VITE_APP_TITLE}`
            : import.meta.env.VITE_APP_TITLE;
    });
    getCast(route.params.id).then((res) => {
        cast.value = res.cast;
    });
    getRecommended(route.params.id, route.query.page).then((res) => {
        movies.value = res;
        isLoading.value = false;
    });
});
</script>
