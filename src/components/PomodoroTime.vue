<script setup lang="ts">
import alarma from '~/public/sound/alarm.mp3'
const { timer, isRunning, isPaused, currentTimer, start, pause, reset, changeCurrentTimer } = usePomodoroTimer()
const countPomo = ref(1)
const playbackRate = ref(0.75)
const { play } = useSound(alarma, { playbackRate })
// provide('countPomo', countPomo.value)

watch(() => [unref(timer)], () => {

  if (timer.value === "00:00") {
    play()
    reset()
    if (countPomo.value < 4) countPomo.value++
    if (countPomo.value === 4) countPomo.value = 1
  }
  // provide('countPomo', countPomo.value)

})
</script>
<template>
  <div w-full
    class="md:w-4/10 md:h-2/5"
    m-0
    h-full
    p-2
    flex
    justify-center
    items-center>
    <div md:min-w-100
      md:w-5:10
      xs:w-full
      md:min-h-100
      md:max-h-5:10
      h-full
      flex="~ col"
      rounded-xl
      justify-center
      items-center>
      <div w-full
        flex
        flex-around
        justify-center
        items-center
        m-2
        md:gap-3>
        <ButtonPomo tooltip
          position="top"
          mx-2
          px-2
          py-0.7
          hover:bg-mountain-400
          bg-mountain-100
          type="button"
          border="~ mountain-700 hover:mountain-400"
          color-mountain-700
          font-semibold
          label="short"
          show-label
          aria-describedby="change-short-timer"
          class="shortTiming"
          @click="changeCurrentTimer(1)"
          cursor-pointer>
          <template #tooltip>
            Set short break
          </template>
        </ButtonPomo>
        <ButtonPomo tooltip
          position="top"
          px-2.7
          py-0.7
          hover:bg-mountain-400
          bg-mountain-100
          type="button"
          border="~ mountain-700 hover:mountain-400"
          color-mountain-700
          font-semibold
          label="long"
          show-label
          aria-describedby="change-long-timer"
          class="longTiming"
          @click="changeCurrentTimer(2)"
          cursor-pointer>
          <template #tooltip>
            Set long break
          </template>
        </ButtonPomo>
        <ButtonPomo tooltip
          position="top"
          justify-center
          text-md
          items-center
          ml-3
          md:ml-10
          px-7
          bg-mountain-700
          type="button"
          hover:bg-mountain-100
          hover:color-mountain-900
          py-1
          cursor-pointer
          text-white
          text-lg
          font-semibold
          class="group pomodoroTiming"
          label="Pomodoro"
          show-label
          aria-describedby="change-pomodoro-timer"
          @click="changeCurrentTimer(0)">
          <span size-3
            md:size-3.5
            text-white
            class="potTiming"
            :class="i <= countPomo ? 'i-carbon-circle-filled bg-white group-hover:bg-mountain-900' : 'i-carbon-circle-solid bg-mountain-200 group-hover:bg-mountain-400'"
            v-for="i of 4"
            :key="i" />
          <template #tooltip>
            Middler click to reset pomos
          </template>
        </ButtonPomo>
      </div>
      <div text-6xl
        p-6
        md:p-2
        md:text-8xl
        font-bold
        color-black
        dark:color-white
        aria-describedby="timer">{{ timer }}</div>
      <div w-full
        flex
        justify-center
        items-center
        m-2
        gap-2
        md:gap-3>
        <ButtonPomo v-show="!isRunning && !isPaused"
        tooltip
          position="bottom"
          bg="~ mountain-700"
          border="~ hover:mountain-900"
          type="button"
          hover:bg-mountain-100
          color-white
          hover:color-mountain-900
          px-16
          py-2
          font-semibold
          label="playTimer"
          icon="i-carbon-play-filled-alt"
          aria-describedby="start-timer"
          @click="start" >
          <template #tooltip>
            Start timer
          </template>
        </ButtonPomo>
        <ButtonPomo v-if="isRunning || isPaused"
        tooltip
          position="bottom"
          bg="~ mountain-700"
          border="~ mountain-900 hover:mountain-900"
          type="button"
          label="resetTimer"
          hover:bg-mountain-100
          hover:color-mountain-900
          px-10
          md:px-16
          py-2
          font-semibold
          color-white
          icon="i-carbon-stop-filled-alt"
          aria-describedby="reset-timer"
          @click="reset" >
          <template #tooltip>
            Stop timer
          </template>
        </ButtonPomo>

        <ButtonPomo v-if="isRunning || isPaused"
        tooltip
          position="bottom"
          type="button"
          border="~ mountain-900 hover:mountain-400"
          font-semibold
          bg-mountain-100
          color-mountain-900
          hover:bg-mountain-400
          label="pauseTimer"
          px-10
          md:px-16
          py-2
          :icon="!isPaused ? 'i-carbon-pause-filled' : 'i-carbon-skip-forward-filled'"
          aria-describedby="pause-timer"
          @click="pause" >
          <template #tooltip>
            Pause timer
          </template>
        </ButtonPomo>
      </div>
    </div>
  </div>
</template>