import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/user": "https://cbt-app-pecj.onrender.com",
    },
  },
  plugins: [react()],
});
