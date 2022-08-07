<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { storeToRefs } from 'pinia';
import NavBar from './components/NavBar.vue'
import { darkModeStore } from './store/DarkMode'

const dark_mode_store = darkModeStore();
const dark_mode_ref = storeToRefs(dark_mode_store);

</script>

<template>
  <div :class="[dark_mode_ref.darkModeClass.value ]"
    class="dark:bg-primary-dark bg-primary-light transition-colors duration-300 h-9">
    <NavBar />
    <p class="dark:bg-primary-dark bg-primary-light transition-colors duration-300 text-text-light dark:text-text-dark">
      result : {{
      dark_mode_ref.darkModeClass }}</p>
  </div>
</template>
