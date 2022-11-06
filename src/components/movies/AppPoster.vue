<template>
    <router-link
        :to="{ name: 'movieDetail', params: { id } }"
        class="rounded-lg bg-app-white2 w-57 min-h-106 my-0 mx-auto shadow-poster hover:scale-105 transition duration-300 ease-int-out"
    >
        <div class="flex h-87">
            <img class="rounded-t-lg" :src="fullPosterPath" />
        </div>
        <div
            class="font-inter rounded-b-lg bg-app-white2 min-h-1/6 p-2 text-center"
        >
            <p>{{ title }}</p>
            <span
                class="pt-2 group relative inline-block text-block text-blue-500 underline hover:text-red-500 duration-300"
            >
                <!-- Tooltip text here -->
                <span
                    class="absolute hidden group-hover:flex justify-center -top-1.5 -left-14 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"
                >
                    {{ roundedVoteAverage }} average rating<br />
                    on {{ voteCount }} votes
                </span>
                <star-rating
                    :rating="rateVoteAverage"
                    :increment="0.5"
                    :show-rating="false"
                    read-only
                    :star-size="13"
                    :padding="2"
                    :rounded-corners="true"
                    :border-color="'#37474f'"
                    :active-color="'#37474f'"
                />
            </span>
        </div>
    </router-link>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import StarRating from 'vue-star-rating';
import { getPosterPath } from '@/utils/buildPaths.js';
import {
    getRatingVoteAverage,
    getRoundedVoteAverage,
} from '@/utils/votingCalc.js';

const props = defineProps({
    id: Number,
    title: String,
    posterPath: String,
    voteAverage: Number,
    voteCount: Number,
});

const fullPosterPath = computed(() => getPosterPath(props.posterPath));

const rateVoteAverage = computed(() => getRatingVoteAverage(props.voteAverage));

const roundedVoteAverage = computed(() =>
    getRoundedVoteAverage(props.voteAverage)
);
</script>
