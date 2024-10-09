import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // /apiに訪れたら（アクセスしたら）、この値を先頭に付けるようにするという意味
      },
    },
  },
});
