<script setup lang="ts">
import type { ChoreCreate } from '@/types'; // Add this import statement
const { createChore } = useCreateChore()
const user = useSupabaseUser()

const chore = reactive<ChoreCreate>({
  content: '',
  status: 'new'
})

const inputChore = async () => {
  await createChore(chore)
  chore.content = ''
  chore.status = 'new'
}

</script>
<template>
  <div w-full
    flex
    gap-2
    items-center>
    <input border="~ mountain-400 focus:mountain-900"
      label="create-chore"
      p-1
      m-2
      text-black:90
      rounded-md
      id="chore"
      v-model="chore.content"
      aria-describedby="create-chore"
      @keyup.enter="inputChore()" />
    <p font-bold
      dark:color-white
      color-mountain-900
      aria-describedby="title-chore-seccion">Chores</p>
    <small color-gray-500
      text-xs
      v-show="!user"
      id="chores-info"
      aria-describedby="chores-info">Only available with login.</small>
  </div>
</template>
