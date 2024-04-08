<script setup lang="ts">
import Button from 'primevue/button';
defineProps<{
    icon: string;
    label: string;

}>();


</script>
<template>
    <Button flex justify-center items-center gap-1 hover:text-white bg-mountain-50>
        <div  :class="icon"></div>
        <span>{{ label }}</span>
    </Button>
</template>