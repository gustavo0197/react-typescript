import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  root: "./src",
  server: {
    port: 1234,
  },
  build: {
    outDir: "../build",
    emptyOutDir: true,
  },
  resolve: {
    alias: [
      {
        find: "app",
        replacement: path.resolve(__dirname, "./src/app"),
      },
      {
        find: "assets",
        replacement: path.resolve(__dirname, "./src/assets"),
      },
      {
        find: "components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "store",
        replacement: path.resolve(__dirname, "./src/store"),
      },
    ],
  },
});
