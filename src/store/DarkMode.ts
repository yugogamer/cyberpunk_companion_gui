import { defineStore } from "pinia";
import { ref } from "vue";

export const darkModeStore = defineStore('darkMode', () => {
    let isDark = localStorage.getItem('darkMode') === 'true';
    
    //save state to localStorage
    if (localStorage.getItem('darkMode') === null) {
        localStorage.setItem('darkMode', isDark.toString());
    }
    const darkModeClass = ref(isDark ? 'dark' : '');

    function toggle() {
        isDark = !isDark;
        localStorage.setItem('darkMode', isDark.toString());
        darkModeClass.value = isDark ? 'dark' : '';
    }

    return {
        darkModeClass,
        toggle
    }
});