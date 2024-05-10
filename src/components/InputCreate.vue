<script setup lang="ts">
import type { ChoreCreate, GetDataResponse, ReturnComposableCreate } from '@/types'; // Add this import statement
const user = useSupabaseUser()
const { createChore } = useCreateChore() as ReturnComposableCreate
const { refresh } = await useGetChores() as GetDataResponse

const chore = reactive<ChoreCreate>({
  content: '',
  status: 'new'
})

const inputChore = async () => {
  const { error } = await createChore(chore)
  chore.content = ''
  chore.status = 'new'
  await refresh()
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
