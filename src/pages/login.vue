<script setup lang="ts">
import useAuthSupabase from '~/composables/useAuthSupabase';
import ButtonPomo from '~/components/ButtonPomo.vue';

const { signInWithOAuth } = useAuthSupabase();

</script>

<template>
  <div flex justify-center items-center >
    <div class="w-screen lg:w-2/3 h-[100vhw - 0.5rem] md:h-70" flex="~ col" border="~ black" rounded-md justify-around items-center mt-8 my-4 p-2>
      <div>
        <h3 text-5xl font-ubuntu font-bold>SignIn</h3>
        <p font-regular text-gray>To continue</p>
      </div>
      <div flex="~ col md:row" justify-center items-center gap-2>
        <ButtonPomo label="Sign in with Github" icon="i-carbon-logo-github" m-2 p-2 bg-gray color-black border="~ black" hover:bg-black dark:bg-black dark:color-white dark:hover:bg-gray dark:hover:color-black @click="signInWithOAuth('github')"/>
        <ButtonPomo label="Sign in with Google" icon="i-carbon-logo-google" m-2 p-2 bg-red-100 color-coral border="~ coral" hover:bg-coral dark:color-white dark:bg-coral dark:hover:bg-red-100 dark:hover:color-coral @click="signInWithOAuth('google')"/>
        <ButtonPomo label="Sign in with Discord" icon="i-carbon-logo-discord" m-2 p-2 bg-purple-100 color-purple-900 border="~ purple-900" hover:bg-purple-900 dark:color-white dark:bg-purple-900 dark:hover:bg-purple-100 dark:hover:color-purple-900 @click="signInWithOAuth('discord')"/>
      </div>
    </div>
  </div>
</template>