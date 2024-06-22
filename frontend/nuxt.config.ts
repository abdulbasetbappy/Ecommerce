// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: [
        "@primevue/nuxt-module",
        "nuxt-icon",
        "@pinia/nuxt",
        "@nuxtjs/tailwindcss",
        "@pinia-plugin-persistedstate/nuxt"
    ],
    css: [
        "~/assets/css/main.css",
        "primevue/resources/themes/aura-light-green/theme.css",
        'primevue/resources/primevue.min.css',
        'primeicons/primeicons.css'
    ],
    postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    },
    vite: {
        server: {
        host: true,
        port: 3001,
        watch: {
            usePolling: true,
        },
        },
    }
});
