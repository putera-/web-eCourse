// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    'usebootstrap',
    '@pinia/nuxt'
  ],
  usebootstrap: {
    bootstrap: {
      prefix: ``
    },
    html: {
      prefix: `B`
    },
  },
  css: [
    "bootstrap/scss/bootstrap.scss"
  ],
  runtimeConfig: {
    apiUri: '', // can be overridden by NUXT_API_URI environment variable
    public: {
      apiUri: '', // can be overridden by NUXT_PUBLIC_API_URI environment variable
    }
  },
  ssr: false
})
