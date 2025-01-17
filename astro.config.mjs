import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { externalLink } from "./src/plugin/externalLink";

// https://astro.build/config
export default defineConfig({
  site: "https://muldbjerg.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [[externalLink, { domain: "muldbjerg.com" }]],
  },
});
