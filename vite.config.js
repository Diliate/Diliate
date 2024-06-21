import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Set the loader to handle JSX syntax
    include: /\.(js|jsx)$/, // Apply the loader to both .js and .jsx files
    exclude: /node_modules/ // Exclude node_modules from being processed by the loader
  }
})
  