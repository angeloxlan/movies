<template>
    <AppHeader />
    <router-view></router-view>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
</script>

<style>
@media (min-width: 768px) {
    body {
        overflow-y: scroll!important;
    }
}
</style>
