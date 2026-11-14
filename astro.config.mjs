import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static", // Required for GitHub Pages
  site: "https://your-username.github.io",
  base: "/duck-duck-no-better/",
});
