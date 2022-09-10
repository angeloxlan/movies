<template>
    <AppDetail :id="route.params.id" />    
</template>

<script setup>
import { useRoute } from 'vue-router';
import AppDetail from '@/components/movies/AppDetail.vue';

const route = useRoute();
</script>
