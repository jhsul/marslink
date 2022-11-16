import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/marslink/",
  plugins: [react()],
  build: { target: "esnext" },
});
