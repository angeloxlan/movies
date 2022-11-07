<template>
    <div class="flex flex-col">
        <div
            v-if="isLoading"
            class="detail-placeholder animate-pulse container max-w-144 my-0 mx-auto mt-12 flex flex-col lg:flex-row justify-center"
        >
            <div
                class="bg-gray-200 w-1/2 lg:w-1/4 h-full rounded-xl self-center mb-6 lg:mb-0"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="none"
                    viewBox="0 0 780 1046"
                >
                    <path fill="url(#a)" d="M0 0h780v1170H0z" />
                    <defs>
                        <pattern
                            id="a"
                            width="1"
                            height="1"
                            patternContentUnits="objectBoundingBox"
                        >
                            <use
                                xlink:href="#b"
                                transform="scale(.00128 .00085)"
                            />
                        </pattern>
                    </defs>
                </svg>
            </div>
            <div
                class="flex flex-col justify-between gap-2 lg:w-2/4 px-8 lg:px-16"
            >
                <div>
                    <p class="h-8 w-full bg-gray-200 mb-2"></p>
                    <p class="h-16 w-full bg-gray-200"></p>
                </div>
                <div>
                    <p class="h-8 w-full bg-gray-200 mb-2"></p>
                    <span
                        class="h-7 w-1/5 bg-gray-200 mr-3 inline-block"
                    ></span>
                    <span
                        class="h-7 w-1/5 bg-gray-200 mr-3 inline-block"
                    ></span>
                    <span class="h-7 w-1/5 bg-gray-200 inline-block"></span>
                </div>
                <div>
                    <p class="h-8 w-full bg-gray-200 mb-2"></p>
                    <p class="h-40 w-full bg-gray-200"></p>
                </div>
                <div>
                    <p class="h-8 w-full bg-gray-200 mb-2"></p>
                    <div class="flex">
                        <img
                            src="@/assets/img/dropdown-icon.svg"
                            class="w-7 rotate-90"
                        />
                        <div class="relative overflow-hidden w-full">
                            <div
                                class="carousel relative top-0 left-0 flex justify-between"
                            >
                                <div
                                    class="h-20 w-12 bg-gray-200 rounded-lg"
                                ></div>
                                <div
                                    class="h-20 w-12 bg-gray-200 rounded-lg"
                                ></div>
                                <div
                                    class="h-20 w-12 bg-gray-200 rounded-lg"
                                ></div>
                                <div
                                    class="h-20 w-12 bg-gray-200 rounded-lg"
                                ></div>
                                <div
                                    class="h-20 w-12 bg-gray-200 rounded-lg"
                                ></div>
                                <div
                                    class="h-20 w-12 bg-gray-200 rounded-lg"
                                ></div>
                                <div
                                    class="h-20 w-12 bg-gray-200 rounded-lg"
                                ></div>
                                <div
                                    class="h-20 w-12 bg-gray-200 rounded-lg"
                                ></div>
                            </div>
                        </div>
                        <img
                            src="@/assets/img/dropdown-icon.svg"
                            class="w-7 rotate-270"
                        />
                    </div>
                </div>
                <div class="flex gap-2">
                    <span
                        class="h-10 w-1/5 bg-gray-200 px-3 py-2 rounded-full"
                    ></span>
                    <span
                        class="h-10 w-1/5 bg-gray-200 px-3 py-2 rounded-full"
                    ></span>
                </div>
            </div>
        </div>
        <!-- fin-detail-placeholder -->
        <div
            v-else
            class="container my-0 mx-auto mt-12 flex flex-col lg:flex-row justify-center"
        >
            <div
                class="bg-app-white2 w-1/2 lg:w-1/4 h-auto rounded-xl self-center mb-6 lg:mb-0 shadow-poster"
            >
                <img class="rounded-xl" :src="fullPosterPath" />
            </div>
            <div
                class="flex flex-col justify-between gap-2 lg:w-2/4 px-8 lg:px-16"
            >
                <div>
                    <p class="font-ubuntu text-xl lg:text-2xl font-bold">
                        {{ movie.title }}
                    </p>
                    <p class="font-inter text-sm lg:text-base">
                        {{ movie.tagline }}
                    </p>
                    <div class="flex gap-4 mt-2">
                        <div class="font-inter flex gap-3">
                            <star-rating
                                :rating="rateVoteAverage"
                                :increment="0.5"
                                :show-rating="false"
                                read-only
                                :star-size="15"
                                :padding="2"
                                :rounded-corners="true"
                                :border-color="'#37474f'"
                                :active-color="'#37474f'"
                            />
                            <span>{{ movie.vote_average }}</span>
                        </div>
                        <div>&hyphen;</div>
                        <div class="font-ubuntu italic text-slate-500">
                            {{ movieYear }}
                        </div>
                    </div>
                </div>
                <div>
                    <p class="font-ubuntu text-xl lg:text-2xl font-bold">
                        Genres
                    </p>
                    <router-link
                        v-for="genre in movie.genres"
                        :key="genre.id"
                        :to="{ name: 'genre', params: { id: genre.id } }"
                        class="font-inter genre-item font-bold text-sm lg:text-base text-slate-500 mr-3 inline-block hover:translate-y-1 transition ease-in-out"
                        >{{ genre.name }}</router-link
                    >
                </div>
                <div>
                    <p class="font-ubuntu text-xl text-2xl font-bold">
                        Synopsis
                    </p>
                    <p class="font-inter text-sm lg:text-base">
                        {{ movie.overview }}
                    </p>
                </div>
                <div>
                    <p class="font-ubuntu text-xl lg:text-2xl font-bold">
                        Cast
                    </p>
                    <AppCastCarousel :cast="cast" />
                </div>
                <div class="font-inter flex gap-2">
                    <a
                        v-if="movie.homepage"
                        :href="movie.homepage"
                        target="_blank"
                        class="bg-app-white2 px-3 py-2 rounded-full border border-app-black hover:scale-110 transition"
                        >Website</a
                    >
                    <a
                        v-if="imdbLink"
                        :href="imdbLink"
                        target="_blank"
                        class="bg-app-white2 px-3 py-2 rounded-full border border-app-black hover:scale-110 transition"
                        >IMDB</a
                    >
                </div>
            </div>
        </div>
        <!-- fin-detail-container -->
    </div>
</template>

<script setup>
import { computed, defineProps, ref, watchEffect } from 'vue';
import StarRating from 'vue-star-rating';
import AppCastCarousel from '@/components/movies/AppCastCarousel.vue';
import { getCast, getDetail } from '@/api/movies.js';
import { getFullPosterPath, getIMDBLink } from '@/utils/buildPaths.js';
import { getRatingVoteAverage } from '@/utils/votingCalc.js';
import { getYear } from '@/utils/dates.js';

const props = defineProps({
    id: [Number, String],
});
const movie = ref([]);
const cast = ref([]);
const isLoading = ref(true);

const rateVoteAverage = computed(() =>
    getRatingVoteAverage(movie.value.vote_average)
);

const movieYear = computed(() => getYear(movie.value.release_date));

const imdbLink = computed(() => getIMDBLink(movie.value.imdb_id));

const fullPosterPath = computed(() =>
    getFullPosterPath(movie.value.poster_path)
);

watchEffect(() => {
    movie.value = [];
    cast.value = [];
    isLoading.value = true;
    getDetail(props.id).then((res) => {
        movie.value = res;
        isLoading.value = false;
    });
    getCast(props.id).then((res) => {
        cast.value = res.cast;
    });
});
</script>

<style scoped>
.genre-item:before {
    content: '•';
    margin-right: 2px;
}
</style>
