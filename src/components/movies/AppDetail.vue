<template>
    <div class="container my-0 mx-auto mt-12 flex justify-center">
        <div class="bg-app-white2 w-1/4 h-auto">
            <img :src="fullPosterPath" />
        </div>
        <div class="flex flex-col justify-between w-2/4 px-16">
            <div>
                <p class="text-2xl font-bold">{{ movie.original_title }}</p>
                <p>{{ movie.tagline }}</p>
            </div>
            <div>
                <p class="text-2xl font-bold">Genres</p>
                <span
                    v-for="genre in movie.genres"
                    :key="genre.id"
                    class="genre-item font-bold text-slate-500 mr-3"
                    >{{ genre.name }}</span
                >
            </div>
            <div>
                <p class="text-2xl font-bold">Synopsis</p>
                <p>{{ movie.overview }}</p>
            </div>
            <div>
                <p class="text-2xl font-bold">Cast</p>
                <div class="flex">
                    <img @click="carouselPrev" src="@/assets/img/dropdown-icon.svg" class="w-7 rotate-90" />
                        <div class="relative overflow-hidden">
                            <div class="carousel relative top-0 left-0 flex mx-auto gap-2">
                                <img v-for="member in cast" :key="member.id" :src="fullCastImgPath(member.profile_path)" ref="carouselItems" class="w-12 rounded-lg" />
                            </div>
                        </div>
                    <img @click="carouselNext" src="@/assets/img/dropdown-icon.svg" class="w-7 rotate-270" />
                </div>
            </div>
            <div class="flex gap-2">
                <span class="bg-app-white2 px-3 py-2 rounded-full">Website</span>
                <span class="bg-app-white2 px-3 py-2 rounded-full">IMDB</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps, ref, watch } from 'vue';
import { getCast, getDetail, POSTER_PATH_DETAIL, CAST_IMG_PATH } from '@/api/movies.js';

const props = defineProps({
    id: Number,
});
const movie = ref([]);
const cast = ref([]);
const carouselItems = ref([]);

const fullPosterPath = computed(() => {
    return `${POSTER_PATH_DETAIL}${movie.value.poster_path}`;
});
const fullCastImgPath = (profilePath) => {
    return `${CAST_IMG_PATH}${profilePath}`;
};

getDetail(props.id).then((res) => {
    movie.value = res;
});

getCast(props.id).then((res) => {
    cast.value = res.cast;
});

const carouselPrev = () => {
    console.log('prev');
}

const carouselNext = () => {
    console.log('next');
}

watch(
    () => props.id,
    (newValue) => {
        movie.value = [];
        cast.value = [];
        getDetail(newValue).then((res) => {
            movie.value = res;
        });
        getCast(newValue).then((res) => {
            cast.value = res;
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
