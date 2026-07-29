import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
      dedupe: ['react', 'react-dom'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return undefined;
            if (id.includes('lucide-react')) return 'icons-vendor';
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) return 'react-vendor';
            if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) return 'motion-vendor';
            if (id.includes('gsap')) return 'gsap-vendor';
            return 'vendor';
          },
        },
      },
    },
    server: {
      port: 4001,
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
