// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/reset.css";
import "~/assets/bootstrap.css";
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Add an external CSS file
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Inconsolata:400&display=swap"
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Karla:400,400i,700&display=swap"
  });

  // Add a meta tag
  head.meta.push({
    name: "author",
    content: "Steffen Østerby Muldbjerg"
  });
}
