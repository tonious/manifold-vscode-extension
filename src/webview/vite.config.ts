import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/manifold-3d/manifold-encapsulated-types.d.ts',
          dest: 'types', // dest is relative to build.outDir
        },
        {
          src: 'node_modules/manifold-3d/manifold-global-types.d.ts',
          dest: 'types',
        },
        {
          src: 'node_modules/manifold-3d/types/manifoldCAD.d.ts',
          dest: 'types',
        },
        {
          src: 'types/gl-matrix.d.ts',
          dest: 'types',
        },
      ],
    }),
  ],
  build: {
    outDir: '../../media',
    emptyOutDir: true,
    sourcemap: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        chunkFileNames: 'chunk-[name].js',
        assetFileNames: 'assets/[name][extname]',
        format: 'es'
      },
    }
  }
});