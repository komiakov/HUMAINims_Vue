// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
      ]
    }
  },
  
  css: ['~/assets/normalize.scss', '~/assets/globals.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/colors.scss" as *;
            @use "@/assets/typography.scss" as *;
            @use "@/assets/mixins.scss" as *;
          `
        }
      }
    }
  },

  modules: []
})
