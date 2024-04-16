<script setup lang="ts">
  
  // const user = useSupabaseUser()
  
</script>
<template>
  <main>
    <div flex="~ col xl:row" items-center gap-6 justify-between lg:flex-row lg:gap-0 lg:mb-0 touch-manipulation lg:h-full>
    <PomodoroTime/>
    <span p-auto class="inline-block xs:w-[calc(100svh-1.25rem) xs:min-w-[1em] xs:h-0.5 lg:min-h-[1em] lg:h-[calc(100svh-1.25rem) lg:min-h-[1em] lg:w-0.5 self-stretch bg-mountain-950 dark:bg-white/50"></span>
    <DragDropView/>
  </div>
  </main>
</template>
