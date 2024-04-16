import type { Timeout } from 'node'

interface PomodoroTimer {
    name: string
    duration: number
}


const usePomodoroTimer = () => {

    const isRunning = ref<boolean>(false)
    const isPaused = ref<boolean>(false)
    const timerInstance = ref<Timeout>({})
    const totalSeconds = ref<number>(25 * 60)
    const currentTimer = ref<number>(0)
    const timers = reactive<PomodoroTimer[]>([{ name: 'Pomodoro', duration: 25 * 60 }, { name: 'Short Break', duration: 5 * 60 }, { name: 'Long Break', duration: 15 * 60 }])
    const displayMinute = computed(() => {
        const minutes = Math.floor(totalSeconds.value / 60)
        return formatTime(minutes)
    })
    const displaySecond = computed(() => {
        const seconds = totalSeconds.value % 60
        return formatTime(seconds)
    })

    const formatTime = (time: number) => {
        if (time < 10) {
            return '0' + time
        }
        return time.toString()
    }


    const start = () => {
        isRunning.value = true
        isPaused.value = false
        timerInstance.value = setInterval(() => {
            totalSeconds.value--
            if (totalSeconds.value <= 0) {
                reset()
                return
            }
            totalSeconds.value -= 1
        }, 1000)
    }
    
    const pause = () => {

        if (isPaused.value) {
            isPaused.value = false
            isRunning.value = true
            start()
            return
        }
        isRunning.value = false
        isPaused.value = !isPaused.value
        clearInterval(timerInstance.value)
    }

    const reset = () => {
        isRunning.value = false
        isPaused.value = false
        totalSeconds.value = timers[currentTimer.value].duration
        clearInterval(timerInstance.value)
    }

    const changeCurrentTimer = (num: number) => {
        currentTimer.value = num
        totalSeconds.value = timers[num].duration
    }
    return {
        // expose the following properties
        isRunning,
        isPaused,
        currentTimer,
        // expose the following computed
        timer: computed(() => `${displayMinute.value}:${displaySecond.value}`),
        minute: displayMinute,
        second: displaySecond,
        // expose the following methods
        start,
        pause,
        reset,
        changeCurrentTimer,
    }
}


export default usePomodoroTimer