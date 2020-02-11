// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/reset.css";
import "~/assets/bootstrap.css";
import DefaultLayout from "~/layouts/Default.vue";

// import AOS from "aos";
// import "aos/dist/aos.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  if (process.isClient) {
    import AOS from "aos";
    import "aos/dist/aos.css";

    Vue.use(
      AOS.init({
        initClassName: "aos-init", // class applied after initialization
        animatedClassName: "aos-animate", // class applied on animation
        once: true,
        disable: "mobile",
        duration: 800,
        ease: "cubic-bezier(0.075, 0.82, 0.165, 1)"
      })
    );
  }

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
