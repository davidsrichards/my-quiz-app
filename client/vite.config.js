import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/user": "https://my-quiz-app-l4gu.onrender.com",
    },
  },
  plugins: [react()],
});
