<script setup lang="ts">
import { darkModeStore } from '../store/DarkMode'
import { SunIcon } from '@heroicons/vue/solid'

const dark_mode_store = darkModeStore();

function toggle() {
  dark_mode_store.toggle();
}

</script>

<template>
    <nav
        class="relative w-auto flex flex-wrap py-4 m-2 items-center justify-between bg-tertiary-light dark:bg-tertiary-dark text-text-light dark:text-text-dark transition-colors duration-300 shadow-lg rounded-md">
        <div></div>
        <button @click="toggle"
            class="hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors duration-200 py-2 px-4 rounded">
            <SunIcon class="text-text-light dark:text-text-dark h-7" />
        </button>
    </nav>
</template>