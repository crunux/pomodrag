<template>
  <div class="flex flex-col justify-between items w-10/12 md:w-10/12 lg:w-9/12 xl:w-7/12 h-[calc(100svh-1.25rem)]">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<style>
.dark body {
  background: #303231;
  color: #fafafa;
}

.light body {
  background: #fafafa;
  color: #303231;
}

body {
    min-height: 100vh;
    margin: 0 auto;
}
</style>