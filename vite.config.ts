import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import eslint from "@rollup/plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  { ...eslint({ include: "src/**/*.+(js|jsx|ts|tsx)" }), enforce: "pre" },
  plugins: [reactRefresh()]
})
