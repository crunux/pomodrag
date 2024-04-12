<script setup lang="ts">
  // import useGetChoresSupabase from '~/composables/useGetChoresSupabase'
  import type {StateChore, Chore} from '~/types'
  import ButtonPomo from '~/components/ButtonPomo.vue';
  const { height } = useWindowSize()
  const {timer, isRunning, isPaused, start, pause, reset, changeCurrentTimer} = usePomodoroTimer()
  // const user = useSupabaseUser()
  
  // const { chores, error  } = await useGetChoresSupabase()
  const { data: chores } = await useFetch('/api/chores', {
    method: 'GET',
  });
  // const {error} = await useFetch('/api/chores', {
  //   method: 'POST',
  //   body: {content: 'test', status: 'new', pomo: 0, created_at: new Date().toISOString()}
  // });
  console.log(chores, 'chores');

  // onMounted(async () => {
  //   //const { data } = await useFetch('/api/chores');
    
  // })

  // const choresNew = ref<Chore[]>([])
  // const choresInProcess = ref<Chore[]>([])
  // const choresDone = ref<Chore[]>([])
    
    // choresNew.value = (chores as Chore[])?.filter((chore) => chore.status === 'new') || [];
    // choresInProcess.value = (chores as Chore[])?.filter((chore) => chore.status === 'in-process') || [];
    // choresDone.value = (chores as Chore[])?.filter((chore) => chore.status === 'done') || [];
    
    // const choresList = computed(() => {
    //     return {
    //         new: choresNew.value,
    //         inProcess: choresInProcess.value,
    //         done: choresDone.value
    //     }
    // })
    const countPomo = ref(1)
    const widthTimerPomo = computed(() => height.value)
    
const chore = ref('')
// const state = ref<StateChore>('new')
</script>
<template>
  <div w-screen h-screen flex="~ row" items-center justify-center >
    <div m-4 class="w-[50%]" h-full p-2 m-2 flex justify-center items-center>
      <div :style='{ width: `${widthTimerPomo}px`}' min-w-110 min-h-72 h-full flex="~ col" bg-mountain-100 rounded-xl justify-center items-center gap->
        <div w-full flex flex-around justify-center items-center gap-4 >
          <ButtonPomo data-tooltip-target="tooltip-short-break" type="button" px-4 py-0.7 hover:bg-mountain-400 bg-mountain-50 border="~ mountain-400" color-mountain-400 label="short" @click="changeCurrentTimer(1)" cursor-pointer/>
          <ButtonPomo px-4 py-0.7 hover:bg-mountain-400 bg-mountain-50 border="~ mountain-400" color-mountain-400 label="long" @click="changeCurrentTimer(2)" cursor-pointer/>
          <ButtonPomo flex justify-center items-center ml-10 px-7 bg-mountain-400 focus:bg-mountain-50 focus:text-mountain-400 border="~ " hover:border-mountain-400 py-1 cursor-pointer text-white text-lg font-semibold label="Pomo" @click="changeCurrentTimer(0)">
            <span size-3.5 bg-mountain-600 focus:bg-mountain-400 :class=" i <= countPomo ? 'i-carbon-circle-filled' : 'i-carbon-circle-solid bg-mountain-50'" v-for="i of 4" :key="i"/>
          </ButtonPomo>
        </div>
        <div text-8xl font-bold color-black>{{ timer }}</div>
      <small id="username-help">Enter your username to reset your password.</small>
      <div w-full flex justify-center items-center m-2 gap-3>
        <ButtonPomo v-show="!isRunning && !isPaused" bg="~ mountain-400"  hover:bg-mountain-50 hover:border-mountain-400 px-16 py-1 font-semibold label="start" @click="start"/>
        <ButtonPomo v-if="isRunning || isPaused" bg="~ mountain-400"  hover:bg-mountain-50 hover:border-mountain-400 px-16 py-1 font-semibold label="reset" @click="reset"/>
        <ButtonPomo v-if="isRunning || isPaused" border="~ mountain-400" font-semibold px-16 py-1 label="pause" @click="pause"/>
      </div>
      </div>
    </div>
    <div p-auto class="inline-block h-[calc(100svh-1.25rem) min-h-[1em] w-0.5 self-stretch bg-mountain-950 dark:bg-white/50"></div>
    <div class="w-[50%]" h-full p-2 m-2 flex="~ col" justify-center items-center rounded-md>
      <input border-mountain-400 rounded-md ring-mountain-400 id="chore" v-model="chore" aria-describedby="chore-create" />
      <small id="username-help">Enter your username to reset your password.</small>
      <!-- <pre>{{ choresList }}</pre> -->
    </div>
  </div>
</template>
