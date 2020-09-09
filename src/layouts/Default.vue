<template>
  <div>
    <topHeader />
    <transition name="fade" appear>
      <div id="maincontent">
        <slot />
      </div>
    </transition>

    <bottomFooter />
    <div class="circle"></div>
  </div>
</template>


<script>
import topHeader from "../components/topHeader.vue";
import bottomFooter from "../components/bottomFooter.vue";

require("typeface-work-sans");

export default {
  components: {
    topHeader,
    bottomFooter,
  },
  methods: {
    randomNumber() {
      return Math.ceil(Math.random() * 10);
    },
  },
};
</script>



<style>
/* 
  Old - primary: #f49922;
  Old - light: #fef3e4;
 */
:root {
  --brand-color: #f49922;
  /* --brand-color: #fab302; */
  /* --brand-color: #f4aa50; */
  --brand-color-light: #ffeee4;
  --text-color: #261702;
  --brand-secondary-dark: #e49aaa;
  --brand-secondary: #f2cfd7;
  --light-gray: #a49e9e;
  --brand-color-light-text: #6d6355;

  /* TEXT */
  --standard-text-size: 19px;
  --standard-line-height: 1.6;

  /* ANIMATION */
  --standard-easing: cubic-bezier(0.165, 0.84, 0.44, 1);
}

body {
  font-family: "Work Sans", -apple-system, "Avenir", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: var(--standard-text-size);
  color: var(--text-color);
  margin: 0px;
  line-height: var(--standard-line-height);
  transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 100%;
  overflow-x: hidden;
}

.wrapper {
  width: 90%;
  margin: 0 auto;
  max-width: 1600px;
}

.pageOffset {
  margin: 100px auto 200px auto;
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
  transition: all 0.2s var(--standard-easing);
  padding: 3px 0;
}

a:hover {
  background-color: var(--brand-color);
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
  font-size: 58px;
}

h2 {
  font-family: "HansKendrick_bold", -apple-system, "Avenir", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  font-size: 40px;
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

.strong,
strong {
  font-weight: 600;
}

/* HEADER */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

/* .nav__link {
  margin-left: 20px;
} */

/* ANIMATION */
.loaded .fade-enter-active .animated,
.loaded .fade-leave-active .animated {
  transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.loaded .fade-leave-active .animated {
  transition: all 0s ease;
}

.loaded .animated {
  transition-delay: 0.01s;
}

.loaded .fade-enter .animated,
.loaded .fade-leave-active .animated {
  opacity: 0;
  transform: matrix(0.9, 0.02, -0.02, 0.9, 0, 100);
}

@media screen and (max-width: 767px) {
  .wrapper {
    width: 85%;
    margin: 0 auto;
    max-width: 1500px;
  }

  .pageOffset {
    margin: 60px auto 200px auto;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 38px;
  }

  h2 {
    font-family: "HansKendrick_bold", -apple-system, "Avenir", "Helvetica Neue",
      Helvetica, Arial, sans-serif;
    font-size: 34px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 26px;
  }
}

/* -- FONTS -- */

@font-face {
  font-family: "HansKendrick_regular";
  src: url("/fonts/HansKendrick-Regular.woff2") format("woff2"),
    url("/fonts/HansKendrick-Regular.woff") format("woff"),
    url("/fonts/HansKendrick-Regular.eot") format("embedded-opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "HansKendrick_bold";
  src: url("/fonts/HansKendrick-Bold.woff2") format("woff2"),
    url("/fonts/HansKendrick-Bold.woff") format("woff"),
    url("/fonts/HansKendrick-Bold.eot") format("embedded-opentype");
  font-weight: bold;
  font-style: bold;
}
</style>

