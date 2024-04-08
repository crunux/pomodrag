<script setup lang="ts">
const {store, system} = useColorMode();
const route = useRoute()
const myColorMode = computed(() => store.value === 'auto' ? system.value : store.value);
const iconsDark = computed(() => store.value === 'dark' ? 'i-carbon-sun' : 'i-carbon-moon');
const currentRoute = computed(() => route.name === 'login' ? true: false)

store.value = myColorMode.value
</script>
<template>
  <nav flex w-screen h-[80px] my-4 py-4 left-0 z-[99] justify-around>
    <div font-bold font-ubuntu text-4xl>POMODRAG</div>
    <div flex gap-2 justify-center items-center>
      <NuxtLink to="https://github.com/crunux" color-mountain-950 target="_blank" rel="noopener">
        <div i-carbon-logo-github w-6 h-6 font-medium/>
      </NuxtLink>
      <div>
        <div :class="iconsDark" scale="2em" w-6 h-6 color-mountain-950 dark:color-white @click="store = store === 'dark' ? 'light' : 'dark'"/>
      </div>
      <NuxtLink to="/login" bg-mountain-400 p-4 rounded-xl color-black hover:color-mountain-400 dark:color-white hover:bg-mountain-50 hover:border-mountain-400 dark:color-black py-0.5 px-[3px] :class="{'hidden': currentRoute}">
        <div i-carbon-user w-6 h-6 font-medium/>
      </NuxtLink>
    </div>
  </nav>
  <slot/>
  <footer relative flex items-center justify-center left-5 bottom-0 w-screen h-[30px] m-[5px] font-ubuntu font-semibold text-xl gap-1>
    Built by <a href="https://www.crunux.me"> @crunux</a>
  </footer>
</template>
<style scoped></style>