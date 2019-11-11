<template>
  <div>
    <topHeader />

    <slot />

    <bottomFooter />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import topHeader from "../components/topHeader.vue";
import bottomFooter from "../components/bottomFooter.vue";

export default {
  components: {
    topHeader,
    bottomFooter
  }
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>


<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata:700");
@import url("https://fonts.googleapis.com/css?family=Karla:400,700&display=swap");

:root {
  --brand-color: #f49922;
  --brand-color-light: #fef3e4;
  --text-color: #261702;
  --brand-secondary: #510a32;
  --light-gray: #cdcaca;
  --brand-color-light-text: #6d6355;

  /* TEXT */
  --standard-text-size: 18px;
  --standard-line-height: 1.5;

  /* ANIMATION */
  --standard-easing: cubic-bezier(0.165, 0.84, 0.44, 1);
}

body {
  font-family: "Karla", -apple-system, "Avenir", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: var(--standard-text-size);
  color: var(--text-color);
  margin: 0px;
  line-height: var(--standard-line-height);
}

.wrapper {
  width: 90%;
  margin: 0 auto;
  max-width: 1600px;
}

.clearfix {
  width: 100%;
  clear: both;
}

img {
  max-width: 100%;
}

::-moz-selection {
  /* Code for Firefox */
  color: #fff;
  background: var(--brand-color);
}

::selection {
  color: #fff;
  background: var(--brand-color);
}

/* TYPOGRAFI */
a,
a:visited {
  cursor: pointer;
  text-decoration: underline;
  color: var(--text-color);
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "HansKendrick_regular", -apple-system, "Avenir", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  line-height: 1.2;
}

h1 {
  font-family: "HansKendrick_regular", -apple-system, "Avenir", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  font-size: 58px;
}

h2 {
  font-family: "HansKendrick_bold", -apple-system, "Avenir", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  font-size: 4px;
}

h3 {
  font-size: 34px;
}

h4 {
  font-size: 28px;
}

h5 {
  font-size: 23px;
}

h6 {
  font-size: 18px;
}

.strong {
  font-weight: bold;
}

@media screen and (max-width: 767px) {
  .wrapper {
    width: 85%;
    margin: 0 auto;
    max-width: 1500px;
  }
}

/* -- FONTS -- */

@font-face {
  font-family: "HansKendrick_regular";
  src: url("../assets/fonts/HansKendrick-Regular.woff2") format("woff2"),
    url("../assets/fonts/HansKendrick-Regular.woff") format("woff"),
    url("../assets/fonts/HansKendrick-Regular.eot") format("embedded-opentype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "HansKendrick_bold";
  src: url("../assets/fonts/HansKendrick-Bold.woff2") format("woff2"),
    url("../assets/fonts/HansKendrick-Bold.woff") format("woff"),
    url("../assets/fonts/HansKendrick-Bold.eot") format("embedded-opentype");
  font-weight: bold;
  font-style: bold;
}
</style>

