// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/reset.css";
import "~/assets/bootstrap.css";
import DefaultLayout from "~/layouts/Default.vue";

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

  // Add favicons
  head.link.push(
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png",
    },
    {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#f49922",
    },
    {
      rel: "shortcut icon",
      href: "/favicon/favicon.ico",
    }
  );

  // Add a meta tag
  head.meta.push({
    name: "author",
    content: "Steffen Østerby Muldbjerg",
  });

  head.meta.push({
    name: "theme-color",
    content: "#ffeee4",
  });
  head.meta.push({
    name: "msapplication-config",
    content: "/favicon/browserconfig.xml",
  });
  head.meta.push({
    name: "msapplication-TileColor",
    content: "#f49922",
  });
}
