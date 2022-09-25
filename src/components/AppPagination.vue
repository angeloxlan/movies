<template>
    <div class="flex justify-center gap-4 mt-10 mb-6">
        <router-link
            :to="{
                name: route.name,
                query: { page: usePaginationStore.prevPage },
            }"
            v-if="usePaginationStore.currentPage > 1"
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

            Page {{ usePaginationStore.prevPage }}</router-link
        >
        <router-link
            :to="{
                name: route.name,
                query: { page: usePaginationStore.nextPage },
            }"
            v-if="
                usePaginationStore.currentPage < usePaginationStore.totalPages
            "
            class="flex gap-2 bg-app-black text-white px-5 py-2 rounded-full hover:scale-105 transition duration-300 ease-int-out"
        >
            Page {{ usePaginationStore.nextPage }}
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
import { useRoute } from 'vue-router';
import { usePagination } from '@/stores/pagination.js';

const route = useRoute();
const usePaginationStore = usePagination();
</script>
