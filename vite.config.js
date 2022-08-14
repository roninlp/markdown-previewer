import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/markdown-previewer/",
  build: {
    rollupOptions: {
      external: "bundle.js",
    },
  },
  server: {
    port: 8000,
  },
});

