// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  nitro: {

    preset: 'vercel-edge',

  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css', // Додаємо стилі Bootstrap
    '@/assets/styles/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }, // Додаємо плагін для JS Bootstrap
    '~/plugins/font-awesome.ts',
    { src: '~/plugins/font-awesome.ts', mode: 'client'},

  ],

})
