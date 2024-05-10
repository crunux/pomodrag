<script setup lang="ts">
defineProps<{
    icon?: string;
    label?: string;
    position?: string;
    tooltip?: boolean;
}>();


</script>
<template>
    <button rounded-xl
        flex
        justify-center
        items-center
        gap-1
        hover:text-white
        class="group">
        <div v-if="icon"
            size-7
            :class="icon"></div>
        <span v-if="label">{{ label }}</span>
        <slot />
        <span v-if="tooltip"
            class="group-hover:opacity-100 transform group-hover:visible bottom opacity-0 transition-opacity inline-block absolute invisible z-10 py-2 px-2 bg-white border text-gray-600 rounded-lg shadow-md dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
            :class="position"
            text-xs
            leading-none
            
            role="tooltip">
            <slot name="tooltip" />
        </span>
    </button>
</template>
<style scope>
.bottom{
    --uno: translate-y-10 translate-x-1
}

.top{
    --uno: -translate-y-10 translate-x-1
}
.left{
    --uno: translate-y-1 -translate-x-18
}

.right{
    --uno: translate-y-1 translate-x-18
}
</style>