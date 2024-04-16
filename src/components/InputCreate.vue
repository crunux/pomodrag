<script setup lang="ts">
import type { ChoreCreate } from '@/types'; // Add this import statement
const { createChore } = useCreateChore()
const user = useSupabaseUser()

const chore = reactive<ChoreCreate>({
    content: '',
    status: 'new'
})

</script>
<template>
  <div flex gap-2 items-center>
    <input border="~ mountain-400 focus:mountain-900" w-40 ml-10 md:w-auto p-1 text-black:70 rounded-md id="chore" v-model="chore.content" aria-describedby="create-chore" @click.enter="createChore(chore)"/>
    <p font-bold dark:color-white color-mountain-900 aria-describedby="title-chore-seccion">Chores</p>
    <small color-gray-500 text-xs v-show="!user" id="chores-info" aria-describedby="chores-info">Only available with login.</small>
  </div>
</template>
