// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/reset.css";
import "~/assets/bootstrap.css";
import DefaultLayout from "~/layouts/Default.vue";

// FONTS
import HansKendrick_regular from "~/assets/fonts/HansKendrick-Regular.woff2";
import HansKendrick_bold from "~/assets/fonts/HansKendrick-Bold.woff2";

export default function(Vue, { router, head, isClient }) {
  console.log(router);

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Add an external fonts
  head.link.push({
    rel: "preconnect",
    href:
      "https://fonts.googleapis.com/css?family=Inconsolata:400&display=swap",
    crossorigin: "anonymous",
  });
  head.link.push({
    rel: "preconnect",
    href:
      "https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap",
    crossorigin: "anonymous",
  });

  // Add local fonts
  // head.link.push({ rel: "preload", href: HansKendrick_regular, as: "font" });
  // head.link.push({ rel: "preload", href: HansKendrick_bold, as: "font" });

  // Add favicons
  head.link.push([
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/static/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/static/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/static/favicon/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/static/favicon/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/static/favicon/safari-pinned-tab.svg",
      color: "#f49922",
    },
    {
      rel: "shortcut icon",
      href: "/static/favicon/favicon.ico",
    },
  ]);

  // Add a meta tag
  head.meta.push([
    {
      name: "author",
      content: "Steffen Østerby Muldbjerg",
    },
    {
      name: "theme-color",
      content: "#ffeee4",
    },
    {
      name: "msapplication-config",
      content: "/static/favicon/browserconfig.xml",
    },
    {
      name: "msapplication-TileColor",
      content: "#f49922",
    },
  ]);
}
