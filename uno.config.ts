import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
} from 'unocss'

export default defineConfig({
    theme: {
        colors: {
            'mountain': {
                '50': '#ebfef7',
                '100': '#d0fbe8',
                '200': '#a4f6d7',
                '300': '#6aebc2',
                '400': '#2ed9a9',
                '500': '#0abd90',
                '600': '#009b77',
                '700': '#007c63',
                '800': '#03624f',
                '900': '#035142',
                '950': '#012d27',
            },
            'golden': '#eda613',
            'coral': '#ec4646',
        }
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
            /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,]
    }
})