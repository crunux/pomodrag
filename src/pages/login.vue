<script setup lang="ts">
import useAuthSupabase from '~/composables/useAuthSupabase';
import Button from 'primevue/button';
import ButtonPomo from '~/components/ButtonPomo.vue';

const { signInWithOAuth } = useAuthSupabase();

</script>

<template>
  <div w-full h-full flex justify-center items-center>
    <div h-70 w-[700px] flex="~ col" border="~ black" rounded-md justify-around items-center mt-10 my-4 p-2>
      <div>
        <h3 text-5xl font-ubuntu font-bold>SignIn</h3>
        <p font-regular text-gray>To continue</p>
      </div>
      <div flex justify-center items-center gap-2>
        <ButtonPomo label="Sign in with Github" icon="i-carbon-logo-github" color-black border-black hover:bg-black @click="signInWithOAuth('github')"/>
        <ButtonPomo label="Sign in with Google" icon="i-carbon-logo-google" color-coral border-coral hover:bg-coral @click="signInWithOAuth('google')"/>
        <ButtonPomo label="Sign in with Discord" icon="i-carbon-logo-discord" color-purple-900 border-purple-900 hover:bg-purple-900 @click="signInWithOAuth('discord')"/>
      </div>
    </div>
  </div>
</template>