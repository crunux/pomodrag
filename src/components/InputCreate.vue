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
  <div flex gap-2 items-start>
        <input border="~ mountain-400 focus:active:hover:mountain-900" w-40 md:w-auto text-black:70 rounded-md id="chore" v-model="chore.content" aria-describedby="create-chore" @click.enter="createChore({content: chore.content, status: chore.status})"/>
        <p font-bold dark:color-white color-mountain-900 aria-describedby="title-chore-seccion">Chores</p>
        <small color-gray-500 text-xs v-show="!user" id="chores-info" aria-describedby="chores-info">Only available with login.</small>
      </div>
</template>
<style scoped></style>