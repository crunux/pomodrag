<script setup lang="ts">
import type { Chore } from '~/types';
const { deleteChore } = useDeleteChores()
interface Props {
  chore: Chore
}
defineProps<Props>()

const handlerDeleteChore = async (id: number) => {
  await deleteChore(id)
}
</script>
<template>
  <div max-w-80
    break-words
    leading-none
    h-10
    max-h-15
    bg-mountain-100
    color-black
    flex
    justify-between
    items-center
    rounded-md
    m-1
    p-2
    gap-2
    class="group">
    <div flex="~ col">
      <p font-bold
        p-0
        m-0
        cursor-grab>{{ chore.content }}</p>
      <div flex
        gap-1>
        <span cursor-grab
          color-mountain-400
          size-3
          v-for="pomo of chore.pomo"
          :key="pomo"
          class="i-carbon-circle-filled" />
      </div>
    </div>
    <ButtonPomo size-3
      icon="i-carbon-close"
      hover:color-black
      invisible
      class="group-hover:visible"
      @click="handlerDeleteChore(chore.id)" />
  </div>
</template>