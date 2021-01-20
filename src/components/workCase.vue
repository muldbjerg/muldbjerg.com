<template>
  <div
    class="workCase animated col-sm-6 col-md-4 col-xl-3"
    v-bind:style="{ transitionDelay: 0.1*this.index + 's' }"
  >
    <g-link :to="content.path">
      <div class="workCaseImage" :style="'background-color:' + content.caseColor + ';'">
        <div :id="content.smallTitle" v-if="!Array.isArray(content.imageWork)">
          <img :src="getImagePath(content.imageWork)" :alt="content.title" />
        </div>
        <div :id="content.smallTitle" v-if="Array.isArray(content.imageWork)">
          <carousel
            :images="content.imageWork"
            :project="content.smallTitle"
            :carouselInterval="content.carouselInterval"
            v-once
          />
        </div>
      </div>

      <div class="clearfix"></div>
      <p class="client">{{ content.smallTitle }}</p>
      <h2>{{ content.title }}</h2>

      <ul>
        <li class="tags" v-for="(tag, index) in content.tags" v-bind:key="index">{{tag}}</li>
      </ul>
      <div class="clearfix"></div>
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
  background-color: transparent;
}

.workCase a:hover{
  color: var(--text-color);
}

.workCase h2 {
  font-size: 26px;
  font-family: "Space Grotesk", -apple-system, "Avenir", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
  font-weight: normal;
}

.workCase a:hover h2 {
  text-decoration: underline;
}

.workCase .client {
  display: inline-block;
  margin: 15px 0 5px 0;
  font-size: 14px;
  /* font-weight: bold; */
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

#Landsmøde {
  position: relative;
}

#Landsmøde::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  display: block;
  background-image: url("../assets/portfolio/landsmoede/landsmoede_logo.png");
  background-size: cover;
}


@media screen and (max-width: 771px) {
  .workCase{
    padding-right: 0px;
  }
}
</style>
