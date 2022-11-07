<template>
    <div class="flex gap-2 h-[4.5rem]">
        <button @click="carouselPrev" ref="prevBtn">
            <img src="@/assets/img/dropdown-icon.svg" class="w-8 rotate-90" />
        </button>
        <div class="relative overflow-hidden w-full z-[1]">
            <div
                ref="carouselContainer"
                class="carousel relative top-0 left-0 flex h-full w-full z-[1]"
            >
                <img
                    v-for="(member, index) in cast"
                    :key="member.id"
                    :src="getFullCastImagePath(member.profile_path)"
                    @transitionend="hideTranslate"
                    ref="carouselItems"
                    class="overflow-hidden w-12 rounded-lg absolute top-0 left-0 mr-4 z-[1] transition-transform duration-500"
                    :style="{
                        transform: getInitialPosition(index),
                        width: widthCarouselItem + 'px',
                    }"
                />
            </div>
        </div>
        <button @click="carouselNext" ref="nextBtn">
            <img src="@/assets/img/dropdown-icon.svg" class="w-8 rotate-270" />
        </button>
    </div>
</template>

<script setup>
import { defineProps, onUnmounted, ref } from 'vue';
import { getFullCastImagePath } from '@/utils/buildPaths.js';

const props = defineProps({
    cast: Array,
});
const carouselItems = ref([]);
const carouselContainer = ref([]);
const prevBtn = ref(null);
const nextBtn = ref(null);

const widthCarouselItem = 48;
const carouselSpaceItems = 16;
let carouselInterval = null;
let carouselInicialTimeout = null;

onUnmounted(() => {
    clearTimeout(carouselInicialTimeout);
    clearInterval(carouselInterval);
});

const getInitialPosition = (index) => {
    const totalWidth = widthCarouselItem + carouselSpaceItems;

    const position = index * totalWidth;
    if (index + 1 == props.cast.length)
        return `translate(-${totalWidth}px, 0px)`;

    return `translate(${position}px, 0px)`;
};

const carouselAutoPlay = () => {
    carouselInterval = setInterval(() => {
        carouselNext();
    }, 3500);
};

carouselInicialTimeout = setTimeout(() => carouselAutoPlay(), 5000);

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

    clearTimeout(carouselInicialTimeout);
    clearInterval(carouselInterval);
    carouselAutoPlay();
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

    clearTimeout(carouselInicialTimeout);
    clearInterval(carouselInterval);
    carouselAutoPlay();
};

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
