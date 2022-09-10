<template>
    <div class="container my-0 mx-auto">Movie Detail</div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';
import { getDetail } from '@/api/movies.js';

const props = defineProps({
    id: Number,
});
const movies = ref([]);

getDetail(props.id).then((res) => {
    movies.value = res;
});

watch(
    () => props.id,
    (newValue) => {
        movies.value = [];
        getDetail(newValue).then((res) => {
            movies.value = res;
        });
    }
);
</script>
