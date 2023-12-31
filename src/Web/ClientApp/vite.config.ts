import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
    https: true,
    strictPort: true,
    proxy: {
      "/api": {
        target: "https://localhost:5001",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
