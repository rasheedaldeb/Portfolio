import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line no-undef
  base: process.env.VITE_BASE_PATH || "/deploy_react_app_github_pages_vercel",
  plugins: [react()],
});
