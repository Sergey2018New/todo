import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        build: {
        rollupOptions: {
            output: {
                entryFileNames: 'assets/scripts.[hash].js',
                chunkFileNames: 'chunks/chunk.[hash].js',
                assetFileNames: 'assets/asset.[hash][extname]',
            },
        },
        },
    },
})
