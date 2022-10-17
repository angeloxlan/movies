<template>
    <div
        @click="isDropdownOpen = !isDropdownOpen"
        ref="dropdownContainer"
        class="flex items-center self-center relative"
    >
        <button class="flex items-center">
            <slot name="toggleLabel"></slot>
            <img
                :class="{ 'rotate-180': isDropdownOpen }"
                class="h-3 ml-2 transition-all duration-300"
                src="@/assets/img/dropdown-icon.svg"
            />
        </button>
        <Transition>
            <div
                v-show="isDropdownOpen"
                class="absolute right-0 top-8 bg-app-white2 px-4 py-2 rounded-1 shadow-dropdown z-10"
            >
                <slot name="menu"></slot>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const isDropdownOpen = ref(false);
const dropdownContainer = ref(null);

const closeDropdown = (e) => {
    if (!dropdownContainer.value.contains(e.target)) {
        isDropdownOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', closeDropdown);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', closeDropdown);
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
