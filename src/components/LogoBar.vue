<script setup lang="ts">
const { value } = useColorMode();
</script>
<template>
    <NuxtLink to="/">
        <NuxtImg w-40
            md:w-60
            lg:w-82
            :src="value === 'dark' ? '/images/logodark.png' : '/images/logolight.png'"
            alt="pomodrag logo" />
    </NuxtLink>
</template>