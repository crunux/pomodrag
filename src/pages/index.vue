<script setup lang="ts">
import InputText from 'primevue/inputtext'
import type {StateChore} from '~/types'
const user = useSupabaseUser()

const chore = ref('')
const state = ref<StateChore>('new')
</script>
<template>
  <div w-screen h-screen flex="~ row" items-center justify-center >
    <div w-[40%] h-full p-2 m-2 >
      <div w-92 flex="~ col" bg-mountain-50 rounded-md justify-center items-center gap->
        <label for="username">Username</label>
      <small id="username-help">Enter your username to reset your password.</small>
      </div>
    </div>
    <div class="inline-block h-[calc(100svh-1.25rem) min-h-[1em] w-0.5 self-stretch bg-mountain-950 dark:bg-white/50"></div>
    <div w-[60%] h-full p-2 m-2 flex="~ col" justify-center items-center rounded-md>
      <InputText border-mountain-400 rounded-md ring-mountain-400 id="chore" v-model="chore" aria-describedby="chore-create" />
      <small id="username-help">Enter your username to reset your password.</small>
    </div>
  </div>
</template>
