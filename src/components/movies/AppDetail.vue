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
                    <p class="text-xl lg:text-2xl font-bold">
                        {{ movie.title }}
                    </p>
                    <p class="text-sm lg:text-base">{{ movie.tagline }}</p>
                </div>
                <div>
                    <p class="text-xl lg:text-2xl font-bold">Genres</p>
                    <span
                        v-for="genre in movie.genres"
                        :key="genre.id"
                        class="genre-item font-bold text-sm lg:text-base text-slate-500 mr-3 inline-block"
                        >{{ genre.name }}</span
                    >
                </div>
                <div>
                    <p class="text-xl text-2xl font-bold">Synopsis</p>
                    <p class="text-sm lg:text-base">{{ movie.overview }}</p>
                </div>
                <div>
                    <p class="text-xl lg:text-2xl font-bold">Cast</p>
                    <div class="flex">
                        <img
                            @click="carouselPrev"
                            src="@/assets/img/dropdown-icon.svg"
                            class="w-7 rotate-90"
                        />
                        <div class="relative overflow-hidden">
                            <div
                                class="carousel relative top-0 left-0 flex mx-auto gap-2"
                            >
                                <img
                                    v-for="member in cast"
                                    :key="member.id"
                                    :src="fullCastImgPath(member.profile_path)"
                                    ref="carouselItems"
                                    class="w-12 rounded-lg"
                                />
                            </div>
                        </div>
                        <img
                            @click="carouselNext"
                            src="@/assets/img/dropdown-icon.svg"
                            class="w-7 rotate-270"
                        />
                    </div>
                </div>
                <div class="flex gap-2">
                    <span class="bg-app-white2 px-3 py-2 rounded-full"
                        >Website</span
                    >
                    <span class="bg-app-white2 px-3 py-2 rounded-full"
                        >IMDB</span
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps, ref, watch } from 'vue';
import {
    getCast,
    getDetail,
    POSTER_PATH_DETAIL,
    CAST_IMG_PATH,
} from '@/api/movies.js';

const props = defineProps({
    id: [Number, String],
});
const movie = ref([]);
const cast = ref([]);
const carouselItems = ref([]);
const isLoading = ref(true);

const fullPosterPath = computed(() => {
    if (!movie.value.poster_path) return '@/assets/img/movie-placeholder-1.svg';
    return `${POSTER_PATH_DETAIL}${movie.value.poster_path}`;
});
const fullCastImgPath = computed(() => {
    return (profilePath) => `${CAST_IMG_PATH}${profilePath}`;
});

getDetail(props.id).then((res) => {
    movie.value = res;
    isLoading.value = false;
});

getCast(props.id).then((res) => {
    cast.value = res.cast;
});

const carouselPrev = () => {
    console.log('prev');
};

const carouselNext = () => {
    console.log('next');
};

watch(
    () => props.id,
    (newValue) => {
        movie.value = [];
        cast.value = [];
        isLoading.value = true;
        getDetail(newValue).then((res) => {
            movie.value = res;
            isLoading.value = false;
        });
        getCast(newValue).then((res) => {
            cast.value = res.cast;
        });
    }
);
</script>

<style scoped>
.genre-item:before {
    content: '•';
    margin-right: 2px;
}
</style>
