<script setup lang="ts">
useHead({
  title: 'Pomodrag',
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    // { rel: 'icon', type: 'image/ico', href: "/favicon.ico" },
    { rel: 'icon', type: 'image/png', sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: 'icon', type: 'image/png', sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
  ],
  meta: [
    {
      name: 'description',
      content: 'Pomodrag is a productivity tool that combines the Pomodoro Technique with a drag-and-drop task board.'
    },
    {
      name: 'msapplication-TileColor',
      content: '#da532c'
    },
    {
      name: 'og:title',
      content: 'Pomodrag'
    },
    {
      name: 'og:site_name',
      content: 'Pomodrag'
    },
    {
      name: 'og:image:secure_url',
      content: 'https://pomodrag.crunux.me/og-cover.png'
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
      name: 'twitter:site',
      content: '@crunux0'
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
      content: 'https://pomodrag.crunux.me/og-cover.png'
    },
    {
      name: 'twitter:image:secure_url',
      content: 'https://pomodrag.crunux.me/og-cover.png'
    }
  ],
})
</script>
<template>
  <div
    class=" mx-auto flex flex-col justify-between items w-10/12 md:w-11/12 xl:w-8/12 h-full md:h-[calc(100svh-1.25rem)]">
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