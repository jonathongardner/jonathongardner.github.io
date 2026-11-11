import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

function serveBundledApps(server) {
  server.middlewares.use((req, res, next) => {
    const match = req.url?.match(/^\/(crazy-games|easyncryption)(\/)?(\?.*)?$/)
    if (!match || (req.method !== 'GET' && req.method !== 'HEAD')) return next()

    const [, app, slash, query = ''] = match
    if (!slash) {
      res.writeHead(308, { Location: `/${app}/${query}` })
      return res.end()
    }

    // Public directory indexes must be explicit before Vite's SPA fallback.
    req.url = `/${app}/index.html${query}`
    next()
  })
}

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs',
  },
  plugins: [
    {
      name: 'serve-bundled-apps',
      configureServer: serveBundledApps,
      configurePreviewServer: serveBundledApps,
    },
    vue(),
    vueJsx(),
    vueDevTools(),
    VitePWA({
      strategies: 'generateSW',
      filename: 'service-worker.js',
      registerType: 'autoUpdate',
      manifest: {
        name: 'JGard About',
        short_name: 'JGard',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        theme_color: '#4DBA87',
        background_color: '#ffffff',
        icons: [
          { src: '/img/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/img/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: '/img/icons/android-chrome-maskable-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: '/img/icons/android-chrome-maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,woff,woff2,ttf,eot,pdf}'],
        globIgnores: ['easyncryption/**', 'crazy-games/**', '404.html'],
        navigateFallbackDenylist: [/^\/(?:easyncryption|crazy-games)(?:\/|$)/],
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
