export default defineNuxtConfig({

  // inherit base theme
  extends: ['./woonuxt_base'],

  components: [{ path: './components', pathPrefix: false }],

  // ✅ enable live server rendering instead of static generation
  ssr: true,

  nitro: {
    preset: 'node-server', // good default for most SSR hosts (Netlify/Vercel/Render/custom)
    minify: true,
    // remove the prerender block entirely
  },

  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST, // ensure GraphQL endpoint is available at runtime
    }
  },
})
