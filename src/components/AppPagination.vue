<template>
    <div class="font-inter flex justify-center gap-4 mt-10 mb-6">
        <router-link
            :to="{
                name: route.name,
                query: { ...route.query, page: paginationStore.prevPage },
            }"
            v-if="paginationStore.isPrevPageAvailable"
            class="flex gap-2 bg-app-black text-white px-5 py-2 rounded-full hover:scale-105 transition duration-300 ease-int-out"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
            </svg>

            Page {{ paginationStore.prevPage }}</router-link
        >
        <router-link
            :to="{
                name: route.name,
                query: { ...route.query, page: paginationStore.nextPage },
            }"
            v-if="paginationStore.isNextPageAvailable"
            class="flex gap-2 bg-app-black text-white px-5 py-2 rounded-full hover:scale-105 transition duration-300 ease-int-out"
        >
            Page {{ paginationStore.nextPage }}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
            </svg>
        </router-link>
    </div>
</template>

<script setup>
import { defineProps, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { usePaginationStore } from '@/stores/pagination.js';

const props = defineProps({
    page: {
        type: Number,
        default: 1,
    },
    totalPages: {
        type: Number,
        required: true,
    },
    totalResults: {
        type: Number,
        required: true,
    },
});
const route = useRoute();
const paginationStore = usePaginationStore();

watchEffect(() => {
    paginationStore.currentPage = parseInt(route.query.page ?? props.page);
    paginationStore.totalPages = props.totalPages;
    paginationStore.totalResults = props.totalResults;
    paginationStore.updatePagination();
});
</script>
