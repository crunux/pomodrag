import PrimeVue from "primevue/config";
import useDesignSystem from "~/composables/useDesignSystem";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        ripple: false,
        unstyled: true,
        pt: useDesignSystem(),
    });
});