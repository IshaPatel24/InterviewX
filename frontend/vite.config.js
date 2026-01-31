import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router'],
          'vendor-clerk': ['@clerk/clerk-react'],
          'vendor-stream': ['@stream-io/video-react-sdk', 'stream-chat-react', 'stream-chat'],
          'vendor-ui': ['@monaco-editor/react', 'react-resizable-panels', 'react-hot-toast']
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3005',
        changeOrigin: true,
      },
    },
  },
});
