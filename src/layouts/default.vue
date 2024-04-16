<script setup lang="ts">
import ButtonPomo from '~/components/ButtonPomo.vue';
// variables
const visibleLogout = ref(false)
//composables
const colorMode = useColorMode();
const user = useSupabaseUser()
const route = useRoute()
// computed
const currentRoute = computed(() => route.name === 'login' ? true: false)

const logoutUser = () => {
  console.log('logout');
}

</script>
<template>
  <nav flex justify-between items-center pt-7 pb-12 touch-manipulation>
    <div font-bold font-ubuntu color-mountain-500 text-4xl>POMODRAG</div>
    <div flex gap-2 justify-center items-center>
      <NuxtLink to="https://github.com/crunux" color-mountain-950 dark:color-white target="_blank" rel="noopener">
        <div i-carbon-logo-github w-6 h-6 font-medium name="github"/>
      </NuxtLink>
      <div>
        <div dark:i-carbon-sun i-carbon-moon size-6 dark:size-6 color-mountain-950 dark:color-white @click="colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'"/>
      </div>
      <NuxtLink to="/login" v-show="!user" px-3 bg-mountain-400 p-4 rounded-xl color-mountain-900 hover:color-mountain-400 dark:color-white hover:bg-mountain-50 border="~ hover:mountain-400"  dark:color-black py-0.5 class="px-[3px]" :class="{'hidden': currentRoute}">
        <div i-carbon-user w-6 h-6 font-medium/>
      </NuxtLink>
      <NuxtImg v-show="user" v-if="user?.user_metadata.avatar_url" alt="avatar" :src="user?.user_metadata.avatar_url" h-9 border="~ mountain-700 dark:mountain-400" rounded-full mr-2 @click="visibleLogout = true" />
      <div v-show="user" v-else h-9 border="~ mountain-700 dark:mountain-400" rounded-full mr-2 @click="visibleLogout = true" ></div>
    </div>
  </nav>
  <!-- <Dialog v-model:visible="visibleLogout" modal :style="{ width: '25rem' }">
    <div flex flex-col items-center p-5 surface-overlay rounded-lg dark:bg-black>
      <div class="rounded-full bg-coral inline-flex justify-center items-center h-6rem w-6rem mt-8">
        <i class="i-carbon-logout " size-9></i>
      </div>
      <span class="font-bold text-2xl block mb-2 mt-4">Are you sure?</span>
      <p class="mb-0">Please confirm to proceed.</p>
      <div class="flex align-items-center gap-2 mt-4">
        <ButtonPomo label="logout" icon="i-carbon-logout" px-2 color-coral border-coral hover:bg-coral dark:color-white dark:bg-coral dark:hover:bg-mountain-50 dark:hover:color-coral @click="logoutUser"/>
        <ButtonPomo label="Cancel" @click="visibleLogout = !visibleLogout"></ButtonPomo>
      </div>
    </div>
  </Dialog> -->
  <slot/>
  <footer flex items-center justify-center font-ubuntu font-semibold text-xl gap-1>
    Built by <a href="https://www.crunux.me"> @crunux</a>
  </footer>
</template>
<style scoped></style>