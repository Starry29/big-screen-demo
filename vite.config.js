import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://starry29.github.io/big-screen/',
  assetsDir: 'assets',
  plugins: [reactRefresh()]
})
