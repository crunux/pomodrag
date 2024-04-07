<script setup lang="ts">
import Button from 'primevue/button';

const { icon, label, color} = defineProps<{
    icon: string;
    label: string;
    color: string;
}>();

const style = `color-${ color } border-${ color } hover:bg-${ color }`

</script>
<template>
    <Button m-2 p-2 flex justify-center items-center gap-1 hover:text-white :class="style">
        <div  :class="icon"></div>
        <span>{{ label }}</span>
    </Button>
</template>