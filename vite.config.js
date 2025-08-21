import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/spotify-album-finder/', // use your repo name here
})
// This configuration file sets up Vite for a React project
// with the React plugin and specifies the base path for deployment.