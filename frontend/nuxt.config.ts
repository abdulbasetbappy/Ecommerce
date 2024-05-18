// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  
  modules: [
      'nuxt-primevue',
      'nuxt-icon',
      '@pinia/nuxt'
  ],
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/aura-light-green/theme.css"

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
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
  },
});
