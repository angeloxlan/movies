<template>
    <div class="flex-initial">
        <!-- Desktop Navbar -->
        <div
            class="container my-0 mx-auto border-b-2 border-app-black hidden md:block"
        >
            <ul class="flex justify-around h-32 text-stone-700">
                <li class="self-center"><a href="#">LOGO</a></li>
                <li
                    class="self-center hover:scale-110 transition duration-300 ease-in-out"
                >
                    <router-link :to="{ name: 'trending' }"
                        >Trending</router-link
                    >
                </li>
                <li
                    class="self-center hover:scale-110 transition duration-300 ease-in-out"
                >
                    <router-link :to="{ name: 'topRated' }"
                        >Top Rated</router-link
                    >
                </li>
                <li
                    class="self-center hover:scale-110 transition duration-300 ease-in-out"
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
                                    v-for="genre in genreStore.genres"
                                    :key="genre.id"
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
                    v-show="isSidemenuOpen"
                >
                    <div
                        class="absolute bg-slate-600 opacity-75 h-full w-full"
                        @click="toggleSidemenu"
                    ></div>
                    <Transition name="sideWidth">
                        <div
                            class="absolute bg-white w-64 h-full overflow-y-auto"
                            v-show="isSidemenuOpen"
                        >
                            <div class="w-64 px-5 py-8">
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
                                        v-for="genre in genreStore.genres"
                                        :key="genre.id"
                                        class="ml-2"
                                    >
                                        <router-link
                                            class="w-fit"
                                            :to="{
                                                name: 'genre',
                                                params: { id: genre.id },
                                            }"
                                            @click="toggleSidemenu()"
                                            >{{ genre.name }}</router-link
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Transition>
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
import { useGenreStore } from '@/stores/genre.js';

const genreStore = useGenreStore();
const route = useRoute();

const isDropdownOpen = ref(false);
const isSidemenuOpen = ref(false);
const genres = ref([]);

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
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.sideWidth-enter-active,
.sideWidth-leave-active {
    transition: width 0.3s ease;
}

.sideWidth-enter-from,
.sideWidth-leave-to {
    width: 0;
}
</style>
