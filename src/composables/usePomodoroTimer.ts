import type { Timeout } from 'node'

interface Timer {
    name: string
    duration: number
}

const usePomodoroTimer = () => {

    const isRunning = ref<boolean>(false)
    const timerInstance = ref<Timeout>()
    const totalSeconds = ref<number>(25 * 60)
    const currentTimer = ref<number>(0)
    const timers = reactive<Timer[]>([{ name: 'Pomodoro', duration: 25 * 60 }, { name: 'Short Break', duration: 5 * 60 }, { name: 'Long Break', duration: 15 * 60 }])
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
        timerInstance.value = setInterval(() => {
            totalSeconds.value--
            if (totalSeconds.value <= 0) {
                stop()
                return
            }
            totalSeconds.value -= 1
        }, 1000)
    }

    const stop = () => {
        isRunning.value = false
        clearInterval(timerInstance.value)
    }

    const reset = () => {
        stop()
        totalSeconds.value = timers[currentTimer.value].duration
    }

    const changeCurrentTimer = (num: number) => {
        currentTimer.value = num
    }
    return {
        // expose the following properties
        isRunning,
        currentTimer,
        // expose the following computed
        timer: computed(() => `${displayMinute.value}:${displaySecond.value}`),
        // expose the following methods
        start,
        stop,
        reset,
        changeCurrentTimer,
    }
}


export default usePomodoroTimer