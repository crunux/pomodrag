import {
    defineConfig, presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
} from 'unocss'

export default defineConfig({
    theme: {
        colors:{}
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
    ]
})