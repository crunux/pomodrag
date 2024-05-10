<script setup lang="ts"></script>
<template>
  <div class="inline-block [--trigger:click] [--placement:bottom] group">
    <slot name="button">
      <span
        class="group-hover:opacity-100 group-hover:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-lg shadow-md dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
        role="tooltip">
        <slot name="content" />
      </span>
    </slot>
  </div>
</template>
<style scoped></style>