<template>
    <div>
        <!-- Desktop Navbar -->
        <div
            class="container my-0 mx-auto border-b-2 border-app-black hidden md:block"
        >
            <ul class="flex justify-around h-32 text-stone-700">
                <li class="self-center"><a href="#">LOGO</a></li>
                <li class="self-center">
                    <router-link :to="{ name: 'trending' }"
                        >Trending</router-link
                    >
                </li>
                <li class="self-center">
                    <router-link :to="{ name: 'topRated' }"
                        >Top Rated</router-link
                    >
                </li>
                <li class="self-center">
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
                                    class="w-fit"
                                    :to="{
                                        name: 'genre',
                                        params: { id: genre.id },
                                    }"
                                    v-for="genre in genres"
                                    :key="genre.id"
                                    @click="
                                        useGenreStore.setSelected(genre.name)
                                    "
                                    >{{ genre.name }}</router-link
                                >
                            </div>
                        </template>
                    </AppDropdown>
                </li>
            </ul>
        </div>
        <!-- Mobile Navbar -->
        <div
            ref="mobileMenuContainer"
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
            <div
                id="searchContainer"
                class="bg-app-white1 border-2 flex h-10 mr-3 max-w-2/3 rounded-full"
            >
                <input
                    type="text"
                    placeholder="Search for movies"
                    class=""
                    id="search"
                />
                <label for="search" class="">
                    <svg
                        class="px-2 py-1.5 h-full"
                        fill="none"
                        viewBox="0 0 37 40"
                    >
                        <path
                            fill="#C4C4C4"
                            fill-rule="evenodd"
                            d="M34.772 35.168 24.88 23 21 26.154l9.892 12.168c.712.877 2.158.881 3.23.01 1.071-.87 1.362-2.287.65-3.164Z"
                            clip-rule="evenodd"
                        />
                        <path
                            fill="#C4C4C4"
                            fill-rule="evenodd"
                            d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Zm0-5c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </label>
            </div>
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
                            <li>Trending</li>
                            <li>Top Rated</li>
                            <li>Upcoming</li>
                        </ul>
                        <hr class="border my-4" />
                        <p class="font-bold">Genres</p>
                        <ul>
                            <li
                                v-for="genre in genres"
                                :key="genre.id"
                                class="ml-2"
                            >
                                {{ genre.name }}
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
import AppDropdown from '@/components/AppDropdown.vue';
import { useRoute } from 'vue-router';
import { getMovieGenres } from '@/api/movies.js';
import { useGenre } from '@/stores/genre.js';

const isDropdownOpen = ref(false);
const isSidemenuOpen = ref(false);
const genres = ref([]);
const useGenreStore = useGenre();
const mobileMenuContainer = ref(null);
console.log(mobileMenuContainer.value);
const route = useRoute();

const toggleSidemenu = () => {
    isSidemenuOpen.value = !isSidemenuOpen.value;
    document.body.style.overflowY = isSidemenuOpen.value ? 'hidden' : 'scroll';
};

getMovieGenres().then((res) => {
    genres.value = res.genres;
});

watch(
    () => route.name,
    (newValue) => {
        if (route.name == 'genre') {
            console.log(route.name);
            const genre = genres.value.find(
                (genre) => genre.id == route.params.id
            );
            useGenreStore.setSelected(genre.name);
        }
    }
);

watch(
    () => mobileMenuContainer.value,
    (newValue) => {
        console.log(newValue);
    }
);
</script>

<style scoped>
li > .router-link-active {
    @apply border-b-2;
    @apply border-gray-400;
    @apply shadow-lg;
    @apply text-black;
}

input {
    width: 1px;
    border-radius: 0;
    box-shadow: none;
    outline: none;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
    opacity: 0;
    transition: all 0.2s ease-out;
}

input:focus {
    width: 13rem;
    opacity: 1;
    @apply p-2.5;
}

label {
    display: inline-block;
    position: relative;
}

#searchContainer:focus-within {
    border: 1px solid #2d2d2e;
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
