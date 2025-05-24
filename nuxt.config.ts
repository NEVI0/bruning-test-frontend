import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  srcDir: 'app',
  css: ['~/assets/css/main.css'],

  // TODO: Add alias for domain, repositories and entities
  // alias: {
  //   '@domain': './domain/**/*.*',
  //   '@repositories': './domain/repositories/**/*.*',
  //   '@entities': './domain/entities/**/*.*',
  // },

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
  runtimeConfig: {
    public: {
      PHP_API_BASE_URL: process.env.PHP_API_BASE_URL,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    define: {
      PHP_API_BASE_URL: JSON.stringify(process.env.PHP_API_BASE_URL),
    },
  },

  modules: ['@nuxt/icon'],
});
