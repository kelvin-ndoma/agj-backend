import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import typography from '@tailwindcss/typography';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        plugins: [typography()],
      },
    }),
  ],
  server: {
    port: 5173,
    open: true, // Automatically open browser
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Pre-bundle these dependencies
  },
  build: {
    chunkSizeWarningLimit: 1600, // Increase chunk size warning limit
  },
});