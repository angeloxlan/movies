<template>
    <footer
        class="relative -bottom-14 container my-0 mx-auto font-inter text-xs pb-2 md:pb-8 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5"
    >
        <div>Made with ♥ by Angel Aguirre &#169; {{ year }}</div>
        <span class="hidden md:inline">&hyphen;</span>
        <div class="flex items-center gap-2">
            Powered by
            <a href="https://www.themoviedb.org/" target="_blank"
                ><img class="h-6" src="@/assets/img/tmdb-logo.svg"
            /></a>
        </div>
    </footer>
</template>

<script setup>
import { computed } from 'vue';

const year = computed(() => {
    const _date = new Date();
    return _date.getFullYear();
});
</script>
