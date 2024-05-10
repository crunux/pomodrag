<script setup lang="ts">
const user = useSupabaseUser()
</script>
<template>
  <div class="xl:w-9/12 w-full md:w-11/12"
    h-full
    py-2
    mt-3
    md:mx-4
    flex="~ col"
    justify-center
    items-start
    m-0
    lg:pl-10
    rounded-md>
    <InputCreate :disabled="!user" />
    <Suspense>
      <ChoreBoard v-show="user" />
    </Suspense>
  </div>
</template>