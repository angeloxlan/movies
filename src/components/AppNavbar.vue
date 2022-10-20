<template>
    <div>
        <!-- Desktop Navbar -->
        <div
            class="container my-0 mx-auto border-b-2 border-app-black hidden md:block"
        >
            <ul class="flex justify-around h-32 text-stone-700">
                <li class="self-center"><a href="#">LOGO</a></li>
                <li
                    class="self-center hover:scale-110 transition duration-300 ease-int-out"
                >
                    <router-link :to="{ name: 'trending' }"
                        >Trending</router-link
                    >
                </li>
                <li
                    class="self-center hover:scale-110 transition duration-300 ease-int-out"
                >
                    <router-link :to="{ name: 'topRated' }"
                        >Top Rated</router-link
                    >
                </li>
                <li
                    class="self-center hover:scale-110 transition duration-300 ease-int-out"
                >
                    <router-link :to="{ name: 'upcoming' }"
                        >Upcoming</router-link
                    >
                </li>
                <li class="self-center">
                    <AppDropdown>
                        <template #toggleLabel>Genres</template>
                        <template #menu>
                            <div class="w-120 grid grid-cols-3">
                                <router-link
                                    class="w-fit hover:scale-110 transition duration-300 ease-int-out"
                                    :to="{
                                        name: 'genre',
                                        params: { id: genre.id },
                                    }"
                                    v-for="genre in useGenreStore.genres"
                                    :key="genre.id"
                                    @click="
                                        useGenreStore.setSelection(genre.id)
                                    "
                                    >{{ genre.name }}</router-link
                                >
                            </div>
                        </template>
                    </AppDropdown>
                </li>
                <li class="self-center">
                    <AppSearchInput />
                </li>
            </ul>
        </div>
        <!-- Mobile Navbar -->
        <div
            class="bg-app-white2 flex items-center justify-between w-full md:hidden relative"
        >
            <div class="ml-4 my-3" @click="toggleSidemenu">
                <svg class="w-12" fill="none" viewBox="0 0 78 62">
                    <path
                        fill="#FBFBFB"
                        d="M0 24h71a7 7 0 1 1 0 14H0V24Zm0 24h45a7 7 0 1 1 0 14H0V48ZM0 0h58a7 7 0 1 1 0 14H0V0Z"
                    />
                </svg>
            </div>
            <AppSearchInput />
            <Transition>
                <div
                    class="fixed top-0 left-0 h-screen w-screen z-10"
                    v-if="isSidemenuOpen"
                >
                    <div
                        class="absolute bg-slate-600 opacity-75 h-full w-full"
                        @click="toggleSidemenu"
                    ></div>
                    <div
                        class="absolute bg-white w-3/4 px-5 py-8 h-full w-full overflow-y-auto"
                    >
                        <p class="text-center">LOGO</p>
                        <ul class="font-bold">
                            <li>
                                <router-link :to="{ name: 'trending' }"
                                    >Trending</router-link
                                >
                            </li>
                            <li>
                                <router-link :to="{ name: 'topRated' }"
                                    >Top Rated</router-link
                                >
                            </li>
                            <li>
                                <router-link :to="{ name: 'upcoming' }"
                                    >Upcoming</router-link
                                >
                            </li>
                        </ul>
                        <hr class="border my-4" />
                        <p class="font-bold">Genres</p>
                        <ul>
                            <li
                                v-for="genre in useGenreStore.genres"
                                :key="genre.id"
                                class="ml-2"
                            >
                                <router-link
                                    class="w-fit"
                                    :to="{
                                        name: 'genre',
                                        params: { id: genre.id },
                                    }"
                                    @click="
                                        useGenreStore.setSelection(genre.id);
                                        toggleSidemenu();
                                    "
                                    >{{ genre.name }}</router-link
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import AppDropdown from '@/components/ui/AppDropdown.vue';
import AppSearchInput from '@/components/ui/AppSearchInput.vue';
import { useRoute } from 'vue-router';
import { useGenre } from '@/stores/genre.js';

const isDropdownOpen = ref(false);
const isSidemenuOpen = ref(false);
const genres = ref([]);
const useGenreStore = useGenre();

const route = useRoute();

const toggleSidemenu = () => {
    isSidemenuOpen.value = !isSidemenuOpen.value;
    document.body.style.overflowY = isSidemenuOpen.value ? 'hidden' : 'scroll';
};

watch(
    () => route.name,
    (newValue) => {
        if (isSidemenuOpen.value) toggleSidemenu();
    }
);
</script>

<style scoped>
li > .router-link-active {
    @apply border-gray-400;
    @apply text-black;
    box-shadow: 0px 13px 25px -7px rgb(107 107 107 / 75%);
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>