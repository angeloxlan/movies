<template>
    <div
        class="container my-0 mx-auto border-b-2 border-app-black hidden md:block"
    >
        <ul class="flex justify-around h-32 text-stone-700">
            <li class="self-center"><a href="#">LOGO</a></li>
            <li class="self-center">
                <router-link :to="{ name: 'trending' }">Trending</router-link>
            </li>
            <li class="self-center">
                <router-link :to="{ name: 'topRated' }">Top Rated</router-link>
            </li>
            <li class="self-center">
                <router-link :to="{ name: 'upcoming' }">Upcoming</router-link>
            </li>
            <li class="flex items-center self-center">
                <a href="#">Genres</a
                ><img class="h-3 ml-2" src="@/assets/img/dropdown-icon.svg" />
            </li>
        </ul>
    </div>
    <div
        class="bg-app-white2 flex items-center justify-between w-full md:hidden"
    >
        <div class="ml-4 my-3">
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
                <svg class="px-2 py-1.5 h-full" fill="none" viewBox="0 0 37 40">
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
    </div>
</template>

<script setup></script>

<style scoped>
.router-link-active {
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
</style>
