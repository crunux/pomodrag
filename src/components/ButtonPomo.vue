<script setup lang="ts">
defineProps<{
    icon?: string;
    label?: string;

}>();


</script>
<template>
    <button rounded-xl flex justify-center items-center gap-1 hover:text-white >
        <div v-if="icon" size-7 :class="icon"></div>
        <span v-if="label">{{ label }}</span>
        <slot/>
    </button>
</template>