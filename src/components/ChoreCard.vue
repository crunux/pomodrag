<script setup lang="ts">
import type { Chore } from '~/types';
interface Props {
  chore: Chore
}
defineProps<Props>()
</script>
<template>
  <div min-w-40 h-15 bg-white color-black flex justify-between items-center rounded-md m-1 p-2 gap-2 group>
    <div flex="~ col">
      <p font-bold  cursor-grab>{{ chore.content }}</p>
      <div flex gap-1>
        <span cursor-grab color-mountain-400 size-3 v-for="pomo of chore.pomo" :key="pomo" class="i-carbon-circle-filled"/>
      </div>
    </div>
    <ButtonPomo size-3 icon="i-carbon-close" invisible group-hover:visible/>
  </div>
</template>