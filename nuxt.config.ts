// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/svg-sprite',
    '@formkit/auto-animate/nuxt'
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/styles/main.css'
  ],
})
