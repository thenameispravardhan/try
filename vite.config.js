import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        login: resolve(__dirname, 'src/login.html'),
        signup: resolve(__dirname, 'src/signup.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
