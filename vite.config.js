import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { imagetools } from 'vite-imagetools'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  assetsInclude: ['**/*.JPG'],
  plugins: [
    vue(),
    // Optimise every imported raster image at build time: convert to WebP,
    // compress, and downscale to a sensible cap. No import changes needed,
    // originals are untouched, and any future image is optimised automatically.
    imagetools({
      // Match imports case-insensitively so uppercase .JPG files are included.
      include: /^[^?]+\.(avif|gif|heif|jpe?g|png|tiff?|webp)(\?.*)?$/i,
      defaultDirectives: (url) => {
        const path = url.pathname.toLowerCase()

        // Logos / favicons are already tiny — convert only, never resize.
        if (path.includes('/logos/')) {
          return new URLSearchParams({ format: 'webp', quality: '85' })
        }

        // Profile photos are rendered small (≤ ~384px) — cap hard.
        if (path.includes('/profilephoto/')) {
          return new URLSearchParams({
            format: 'webp',
            quality: '80',
            w: '900',
            withoutEnlargement: 'true',
          })
        }

        // Everything else (projects, galleries, courses): cap for full-screen
        // lightbox viewing while still cutting multi-MB sources down hard.
        return new URLSearchParams({
          format: 'webp',
          quality: '80',
          w: '1600',
          withoutEnlargement: 'true',
        })
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          leaflet: ['leaflet'],
        },
      },
    },
  },
})
