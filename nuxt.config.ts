import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  srcDir: 'app',
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Bruning Sistemas',
      htmlAttrs: {
        lang: 'pt-BR',
      },
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },

  devtools: {
    enabled: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxt/icon'],
});
