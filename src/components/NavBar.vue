<script setup lang="ts">
const colorMode = useColorMode();
const user = useSupabaseUser()
const route = useRoute()
const { signOut } = useAuthSupabase()

const visibleLogout = ref(false)
const logoutElement = ref<HTMLDivElement | null>(null)
// computed
const currentRoute = computed(() => route.name === 'login' ? true : false)

// 

onClickOutside(logoutElement, () => {
  visibleLogout.value = false
})

const logOut = async () => {
  await signOut()
}
</script>
<template>
  <nav flex
    justify-between
    items-center
    pt-7
    pb-12
    touch-manipulation>
    <LogoBar />
    <div flex
      gap-2
      justify-center
      items-center>
      <NuxtLink to="https://github.com/crunux"
        color-mountain-900
        dark:color-white
        target="_blank"
        rel="noopener">
        <div i-carbon-logo-github
          w-6
          h-6
          font-medium
          name="github" />
      </NuxtLink>
      <div>
        <div dark:i-carbon-sun
          i-carbon-moon
          size-6
          dark:size-6
          color-mountain-900
          dark:color-white
          @click="colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'" />
      </div>
      <NuxtLink to="/login"
        v-show="!user"
        px-3
        bg-mountain-400
        p-4
        rounded-xl
        color-mountain-900
        hover:color-mountain-400
        dark:color-white
        hover:bg-mountain-50
        border="~ hover:mountain-400"
        dark:color-black
        py-0.5
        class="px-[3px]"
        :class="{ 'hidden': currentRoute }">
        <div i-carbon-user
          w-6
          h-6
          font-medium />
      </NuxtLink>
      <NuxtImg v-show="user"
        v-if="user?.user_metadata.avatar_url"
        name="avatar"
        alt="avatar"
        :src="user?.user_metadata.avatar_url"
        h-9
        border="~ mountain-700 dark:mountain-400"
        rounded-full
        mr-2
        @click="visibleLogout = !visibleLogout"
        class="group" />
      <div ref="logoutElement"
        v-show="visibleLogout"
        role="tooltip"
        data-tooltip-target="bottom-tooltip"
        class="absolute z-10 inline-block  px-3 py-2 transform -translate-y-2 translate-x-7 top-24 text-sm font-medium text-mountain-800 bg-mountain-400 rounded-lg shadow-sm dark:bg-mountain-400">
        <ButtonPomo icon="i-carbon-logout"
          label="logout"
          @click="logOut" />
      </div>
    </div>
  </nav>
</template>