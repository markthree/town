export default defineNuxtConfig({
  experimental: {
    crossOriginPrefetch: true,
  },
  modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxt/devtools",
    "@nuxtjs/robots",
    "@nuxtjs/critters",
    "@nuxtjs/fontaine",
    "@nuxtjs/color-mode",
    "nuxt-simple-sitemap",
  ],
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
  },
  typescript: {
    shim: false,
  },
  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
    },
  },
  sourcemap: false,
  sitemap: {
    hostname: "https://mt3.netlify.app/",
  },
});
