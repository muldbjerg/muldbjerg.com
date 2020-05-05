// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/reset.css";
import "~/assets/bootstrap.css";
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  console.log(router);

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Add an external CSS file
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Inconsolata:400&display=swap",
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap",
  });

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
