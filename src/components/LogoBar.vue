<script setup lang="ts">
//const colorMode = useColorMode();
const colorMode = defineModel('colorMode');
</script>
<template>
    <NuxtLink to="/">
        <img w-40
            md:w-60
            lg:w-82
            :src="colorMode === 'dark' ? 'assets/LightPomo.svg' : 'assets/DarkPomo.svg'"
            alt="Pomodrag" />
        <!-- <img v-show="colorMode.value === 'light'"
            src="assets/DarkPomo.svg"
            alt="Pomodrag" /> -->
    </NuxtLink>

</template>