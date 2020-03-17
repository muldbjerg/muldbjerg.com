<template>
  <div
    class="workCase animated col-sm-6 col-md-4 col-xl-3"
    v-bind:style="{ transitionDelay: 0.1*this.index + 's' }"
  >
    <g-link :to="content.path">
      <div class="workCaseImage" :style="'background-color:' + content.caseColor + ';'">
        <div :id="content.smallTitle" v-if="!Array.isArray(content.imageWork)">
          <g-image :src="getImagePath(content.imageWork)" :alt="content.title" />
        </div>
        <div :id="content.smallTitle" v-if="Array.isArray(content.imageWork)">
          <carousel :images="content.imageWork" :carouselInterval="content.carouselInterval" />
        </div>
      </div>

      <div class="clearfix"></div>
      <p class="client">{{ content.smallTitle }}</p>
      <h2>{{ content.title }}</h2>

      <ul>
        <li class="tags" v-for="(tag, index) in content.tags" v-bind:key="index">{{tag}}</li>
      </ul>
    </g-link>
  </div>
</template>

<script>
import carousel from "./carousel.vue";

export default {
  name: "workCase",
  components: { carousel },
  props: ["content", "index"],
  data: function() {
    return {
      imageError: false
    };
  },
  methods: {
    getUrl: function(value) {
      value = value.toString();
      var res = value.replace(/:| /g, "-");
      // res = res.replace(/?|!|.|,/g, "");
      return res.toLowerCase();
    },
    getImagePath: function(pic) {
      try {
        return require("../assets/portfolio/" + pic);
      } catch (ex) {
        console.log(pic + " failed");
        return "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.workCase {
  box-sizing: border-box;
  padding-right: 20px;
  padding-bottom: 40px;
}

.workCase a {
  text-decoration: none;
}

.workCase h2 {
  font-size: 26px;
  font-family: "HansKendrick_regular", -apple-system, "Avenir", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
}

.workCase .client {
  display: inline-block;
  margin: 15px 0 5px 0;
  font-size: 14px;
  font-weight: bold;
  /* text-transform: uppercase; */
}

.workCaseImage {
  clear: both;
  margin-top: 10px;
  width: 100%;
  overflow: hidden;
  text-align: center;
}

.workCaseImage img {
  max-width: 100%;
  margin-bottom: -10px;

  transition: all 1.4s var(--standard-easing);
}

.workCase a:hover .workCaseImage img {
  transform: scale(1.1);
}

.tags {
  font-size: 14px;
  float: left;
  padding-right: 5px;
  color: var(--text-color);
  text-transform: capitalize;
}

.tags::after {
  content: ", ";
}

.tags:last-child:after {
  content: "";
}
</style>
