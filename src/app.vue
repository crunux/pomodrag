<script setup lang="ts">
useHead({
  title: 'Pomodrag',
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  meta: [
    {
      name: 'description',
      content: 'Pomodrag is a productivity tool that combines the Pomodoro Technique with a drag-and-drop task board.'
    },
    {
      name: 'og:title',
      content: 'Pomodrag'
    },
    {
      name: 'og:description',
      content: 'Pomodrag is a productivity tool that combines the Pomodoro Technique with a drag-and-drop task board.'
    },
    {
      name: 'og:image',
      content: 'https://pomodrag.crunux.me/og-cover.png'
    },
    {
      name: 'og:url',
      content: 'https://pomodrag.crunux.me'
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Pomodrag'
    },
    {
      name: 'twitter:description',
      content: 'Pomodrag is a productivity tool that combines the Pomodoro Technique with a drag-and-drop task board.'
    },
    {
      name: 'twitter:image',
      content: 'https://pomodrag.crunux.me/og-image.png'
    },
    {
      name: 'twitter:url',
      content: 'https://pomodrag.crunux.me'
    }
  ],
})
</script>
<template>
  <div
    class=" mx-auto flex flex-col justify-between items w-10/12 lg:w-9/12 xl:w-7/12 h-full md:h-[calc(100svh-1.25rem)]">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
.dark body {
  background: #303231;
  color: #eceaea;
}

.light body {
  background: #eceaea;
  color: #303231;
}

body {
  min-height: 100vh;
  margin: 0 auto;
}
</style>