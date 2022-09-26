<template>
    <div
        @click="inputSearch.focus()"
        class="searchContainer bg-app-white1 border-2 flex h-10 mr-3 max-w-52 rounded-full"
    >
        <input
            ref="inputSearch"
            type="text"
            placeholder="Search for movies"
            class=""
            id="search"
        />
        <label for="search" class="">
            <svg
                class="px-2 py-1.5 h-full w-10"
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
</template>

<script setup>
import { ref } from 'vue';

const inputSearch = ref(null);
</script>

<style scoped>
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
    /* @apply p-2.5; */
    padding: 0.625rem;
}

label {
    display: inline-block;
    position: relative;
    width: auto;
}

.searchContainer:focus-within {
    border: 1px solid #2d2d2e;
}
</style>
