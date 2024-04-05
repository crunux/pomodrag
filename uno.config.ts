import {
    defineConfig, 
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
} from 'unocss'

export default defineConfig({
    theme: {
        colors: {}
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
    ],
    pipeline: {
        include: [
            // default
            /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
            // contains utility styles tha are used for the passthough
            "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",]
    }
})