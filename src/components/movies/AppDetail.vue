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
                    <p class="text-xl lg:text-2xl font-bold">
                        {{ movie.title }}
                    </p>
                    <p class="text-sm lg:text-base">{{ movie.tagline }}</p>
                    <div class="flex gap-4 mt-2">
                        <div class="flex gap-3">
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
                        <div class="text-slate-500">
                            {{ movieYear }}
                        </div>
                    </div>
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
                    <div class="flex gap-2 h-[4.5rem]">
                        <button @click="carouselPrev" ref="prevBtn">
                            <img
                                src="@/assets/img/dropdown-icon.svg"
                                class="w-8 rotate-90"
                            />
                        </button>
                        <div class="relative overflow-hidden w-full z-[1]">
                            <div
                                ref="carouselContainer"
                                class="carousel relative top-0 left-0 flex h-full w-full z-[1]"
                            >
                                <img
                                    v-for="(member, index) in cast"
                                    :key="member.id"
                                    :src="fullCastImgPath(member.profile_path)"
                                    @transitionend="hideTranslate"
                                    ref="carouselItems"
                                    class="carousel-item overflow-hidden w-12 rounded-lg absolute top-0 left-0 mr-4 z-[1] transition-transform duration-500"
                                    :style="{
                                        transform: getInitialPosition(index),
                                        width: widthCarouselItem + 'px',
                                    }"
                                />
                            </div>
                        </div>
                        <button @click="carouselNext" ref="nextBtn">
                            <img
                                src="@/assets/img/dropdown-icon.svg"
                                class="w-8 rotate-270"
                            />
                        </button>
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
        <!-- fin-detail-container -->
    </div>
</template>

<script setup>
import { computed, defineProps, ref, watch } from 'vue';
import StarRating from 'vue-star-rating';
import posterPlaceholder from '@/assets/img/movie-placeholder-1.svg';
import castPlaceholder from '@/assets/img/cast-placeholder.svg';
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
const carouselContainer = ref([]);
const prevBtn = ref(null);
const nextBtn = ref(null);
const isLoading = ref(true);

const widthCarouselItem = 48;
const carouselSpaceItems = 16;

const fullPosterPath = computed(() => {
    if (!movie.value.poster_path) return posterPlaceholder;
    return `${POSTER_PATH_DETAIL}${movie.value.poster_path}`;
});
const fullCastImgPath = computed(() => {
    return (profilePath) => {
        if (!profilePath) return castPlaceholder;
        return `${CAST_IMG_PATH}${profilePath}`;
    };
});

const rateVoteAverage = computed(() => {
    return movie.value.vote_average / 2;
});

const movieYear = computed(() => {
    const movieDate = new Date(movie.value.release_date);
    return movieDate.getFullYear();
});

getDetail(props.id).then((res) => {
    movie.value = res;
    isLoading.value = false;
});

getCast(props.id).then((res) => {
    cast.value = res.cast;
});

const getInitialPosition = (index) => {
    const totalWidth = widthCarouselItem + carouselSpaceItems;

    const position = index * totalWidth;
    if (index + 1 == cast.value.length)
        return `translate(-${totalWidth}px, 0px)`;

    return `translate(${position}px, 0px)`;
};

const carouselNext = () => {
    if (
        carouselContainer.value.scrollWidth <=
        carouselContainer.value.offsetWidth
    )
        return;

    prevBtn.value.disabled = true;
    nextBtn.value.disabled = true;
    carouselItems.value.map((item) => {
        let stepNext;
        const xPosition = getXPosition(item);

        const totalWidth = widthCarouselItem + carouselSpaceItems;

        stepNext = xPosition - totalWidth;
        if (stepNext < -totalWidth) {
            item.style.opacity = 0;
            stepNext = carouselContainer.value.scrollWidth - widthCarouselItem;
        }

        item.style.transform = `translate(${stepNext}px, 0px)`;
    });
};

const carouselPrev = () => {
    if (
        carouselContainer.value.scrollWidth <=
        carouselContainer.value.offsetWidth
    )
        return;

    prevBtn.value.disabled = true;
    nextBtn.value.disabled = true;
    carouselItems.value.map((item) => {
        let stepPrev;
        const xPosition = getXPosition(item);

        const totalWidth = widthCarouselItem + carouselSpaceItems;

        stepPrev = xPosition + totalWidth;
        if (stepPrev >= carouselContainer.value.scrollWidth) {
            item.style.opacity = 0;
            stepPrev = -totalWidth;
        }

        item.style.transform = `translate(${stepPrev}px, 0px)`;
    });
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

const getXPosition = (element) => {
    const styles = window.getComputedStyle(element);
    const matrix =
        styles.transform || styles.webkitTransform || styles.mozTransform;
    const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
    return Number(matrixValues[4]);
};

const hideTranslate = (event) => {
    const img = event.target;

    if (img.style.opacity == 0) img.style.opacity = 1;
    prevBtn.value.disabled = false;
    nextBtn.value.disabled = false;
};
</script>

<style scoped>
.genre-item:before {
    content: '•';
    margin-right: 2px;
}
</style>
