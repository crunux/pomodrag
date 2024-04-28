<script setup lang="ts">
const colorMode = useColorMode();
</script>
<template>
    <div w-40
        md:w-60
        lg:w-82>
        <img v-show="colorMode.value === 'dark'"
            src="assets/LightPomo.svg"
            alt="Pomodrag" />
        <img v-show="colorMode.value === 'light'"
            src="assets/DarkPomo.svg"
            alt="Pomodrag" />
    </div>

</template>