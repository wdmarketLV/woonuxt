export default defineNuxtConfig({
  extends: ['./woonuxt_base'],
  components: [{ path: './components', pathPrefix: false }],
  ssr: true,
  nitro: {
    preset: 'netlify', // 👈 enables Netlify SSR build
  },
})
