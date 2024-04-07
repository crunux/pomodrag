<script setup lang="ts">
import Button from 'primevue/button';
defineProps<{
    icon: string;
    label: string;

}>();


</script>
<template>
    <Button m-2 p-2 flex justify-center items-center gap-1 hover:text-white bg-mountain-50>
        <div  :class="icon"></div>
        <span>{{ label }}</span>
    </Button>
</template>