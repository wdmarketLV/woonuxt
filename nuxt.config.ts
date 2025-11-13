import netlify from '@nuxtjs/netlify'

export default defineNuxtConfig({
  extends: ['./woonuxt_base'],
  components: [{ path: './components', pathPrefix: false }],
  ssr: true,
  modules: [netlify()],
  nitro: {
    preset: 'netlify', // 👈 enables Netlify SSR build
  },
})
