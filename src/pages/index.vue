<script setup lang="ts">
  // import useGetChoresSupabase from '~/composables/useGetChoresSupabase'
  import type {StateChore, Chore} from '~/types'
  import ButtonPomo from '~/components/ButtonPomo.vue';
  const user = useSupabaseUser()
  const { height } = useWindowSize()
  const { timestamp, pause, resume } = useTimestamp({ controls: true })
  
  // const { chores, error  } = await useGetChoresSupabase()
  // const { data: chores } = await useFetch('/api/chores');
  // console.log(chores, 'chores');

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
    const countPomo = ref(2)
    const clock = ref(Date.time(timestamp))
    
const chore = ref('')
// const state = ref<StateChore>('new')
</script>
<template>
  <div w-screen h-screen flex="~ row" items-center justify-center >
    <div m-4 class="w-[50%]" h-full p-2 m-2 flex justify-center items-center>
      <div :style='{ width: `${height}px`}' min-w-110 min-h-72 h-full flex="~ col" bg-mountain-100 rounded-xl justify-center items-center gap->
        <div w-full flex flex-around justify-center items-center gap-4 >
          <ButtonPomo px-4 hover:bg-mountain-400 bg-mountain-50 border="~ mountain-400" color-mountain-400 label="short" />
          <ButtonPomo px-4 hover:bg-mountain-400 bg-mountain-50 border="~ mountain-400" color-mountain-400 label="long" />
          <ButtonPomo ml-10 px-7 bg-mountain-400  hover:bg-mountain-50 hover:border-mountain-400 py-1 text-white text-lg font-semibold label="Pomo" >
            <span p-1 size-3 bg-mountain-200 :class=" i < countPomo ? 'i-carbon-circle-filled color-mountain-400' : 'i-carbon-circle-solid'" v-for="i of 4" :key="i"/>
          </ButtonPomo>
        </div>
        <div text-8xl font-bold color-black>12:00</div>
      <small id="username-help">Enter your username to reset your password.</small>
      <div w-full flex justify-center items-center m-2 gap-3>
        <ButtonPomo bg="~ mountain-400"  hover:bg-mountain-50 hover:border-mountain-400 px-16 py-1 font-semibold label="start" />
        <ButtonPomo border="~ mountain-400" font-semibold px-16 py-1 label="stop" />
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
