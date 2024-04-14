<script setup lang="ts">
  import ButtonPomo from '~/components/ButtonPomo.vue';

  const {timer, isRunning, isPaused, currentTimer, start, pause, reset, changeCurrentTimer} = usePomodoroTimer()

  const countPomo = ref(1)
  console.log(currentTimer);
  
  watchEffect(() => {
    if (timer.value === "00:00"){
      if(currentTimer.value === 0 && countPomo.value < 4) {
        countPomo.value++
      }
    }
  }) 

</script>
<template>
  <div w-full md:w-4xl h-full p-2 flex justify-center items-center>
      <div md:min-w-120 md:max-w-3xl w-full md:min-h-120 md:max-h-xl h-full flex="~ col" bg-mountain-100 rounded-xl justify-center items-center gap->
        <div w-full flex flex-around justify-center items-center m-4 md:gap-4>
          <ButtonPomo m-1 px-2 py-0.7 hover:bg-mountain-400 bg-mountain-50 type="button" border="~ mountain-400" color-mountain-400 label="short" aria-describedby="change-short-timer" @click="changeCurrentTimer(1)" cursor-pointer/>
          <ButtonPomo px-2.7 py-0.7 hover:bg-mountain-400 bg-mountain-50 type="button" border="~ mountain-400" color-mountain-400 label="long" aria-describedby="change-long-timer" @click="changeCurrentTimer(2)" cursor-pointer/>
          <ButtonPomo flex justify-center text-md items-center ml-3 md:ml-10 px-7 bg-mountain-400 type="button"  hover:bg-mountain-50 hover:color-mountain-400 border="~ hover:mountain-400 " py-1 cursor-pointer text-white text-lg font-semibold label="Pomodoro" aria-describedby="change-pomodoro-timer" @click="changeCurrentTimer(0)">
            <span size-3 md:size-3.5 bg-mountain-600 focus:bg-mountain-400 :class=" i <= countPomo ? 'i-carbon-circle-filled' : 'i-carbon-circle-solid bg-mountain-50'" v-for="i of 4" :key="i"/>
          </ButtonPomo>
        </div>
        <div text-6xl p-6 md:p-2 md:text-8xl font-bold color-black aria-describedby="timer">{{ timer }}</div>
      <div w-full flex justify-center items-center m-2 gap-2 md:gap-3>
        <ButtonPomo v-show="!isRunning && !isPaused" bg="~ mountain-400" type="button" hover:bg-mountain-50 hover:color-mountain-400 border="~ hover:mountain-400" px-16 py-1 font-semibold label="start" aria-describedby="start-timer" @click="start"/>
        <ButtonPomo v-if="isRunning || isPaused" bg="~ mountain-400" type="button" hover:bg-mountain-50 hover:color-mountain-400 border="~ hover:mountain-400" px-10 md:px-16 py-1 font-semibold label="reset" aria-describedby="reset-timer" @click="reset"/>
        <ButtonPomo v-if="isRunning || isPaused" border="~ mountain-400" type="button" font-semibold bg-mountain-50 color-mountain-400 hover:bg-mountain-400 px-10 md:px-16 py-1 label="pause" aria-describedby="pause-timer" @click="pause"/>
      </div>
      </div>
    </div>
</template>