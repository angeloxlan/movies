<template>
    <a href="#" class="rounded-lg bg-app-white2 w-57 min-h-106 my-0 mx-auto hover:shadow-2xl hover:scale-105 transition duration-300 ease-int-out">
        <div class="flex h-87">
            <img class="rounded-t-lg" :src="fullPosterPath" />
        </div>
        <div class="rounded-b-lg bg-app-white2 min-h-1/6 p-2 text-center">
            <p>{{ title }}</p>
            <span class="flex justify-center pt-2">
                <img src="@/assets/img/star-rate-filled.svg" />
                <img src="@/assets/img/star-rate-filled.svg" />
                <img src="@/assets/img/star-rate-filled.svg" />
                <img src="@/assets/img/star-rate-half.svg" />
                <img src="@/assets/img/star-rate-empty.svg" />
            </span>
        </div>
    </a>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { POSTER_PATH } from '@/api/movies.js';

const props = defineProps({
    id: Number,
    title: String,
    posterPath: String,
    voteAverage: Number,
});

const fullPosterPath = computed(() => {
    return `${POSTER_PATH}${props.posterPath}`;
});
</script>
