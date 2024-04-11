<script setup lang="ts">
import useAuthSupabase from '~/composables/useAuthSupabase';
import ButtonPomo from '~/components/ButtonPomo.vue';

const { signInWithOAuth } = useAuthSupabase();

</script>

<template>
  <div w-screen h-screen flex justify-center items-center overflow-hidden>
    <div h-60 class="w-[700px]" flex="~ col" border="~ black" rounded-md justify-around items-center mt-10 my-4 p-2>
      <div>
        <h3 text-5xl font-ubuntu font-bold>SignIn</h3>
        <p font-regular text-gray>To continue</p>
      </div>
      <div flex justify-center items-center gap-2>
        <ButtonPomo label="Sign in with Github" icon="i-carbon-logo-github" m-2 p-2 bg-mountain-50 color-black border-black hover:bg-black dark:bg-black dark:color-white dark:hover:bg-mountain-50 dark:hover:color-black @click="signInWithOAuth('github')"/>
        <ButtonPomo label="Sign in with Google" icon="i-carbon-logo-google" m-2 p-2 bg-mountain-50 color-coral border-coral hover:bg-coral dark:color-white dark:bg-coral dark:hover:bg-mountain-50 dark:hover:color-coral @click="signInWithOAuth('google')"/>
        <ButtonPomo label="Sign in with Discord" icon="i-carbon-logo-discord" m-2 p-2 bg-mountain-50 color-purple-900 border-purple-900 hover:bg-purple-900 dark:color-white dark:bg-purple-900 dark:hover:bg-mountain-50 dark:hover:color-purple-900 @click="signInWithOAuth('discord')"/>
      </div>
    </div>
  </div>
</template>