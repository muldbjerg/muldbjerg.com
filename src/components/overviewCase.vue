<template>
  <div
    class="overviewCase animated"
    v-bind:style="{ transitionDelay: 0.1*this.index + 's' }"
    v-bind:class="getClass(index)"
  >
    <g-link :to="content.path">
      <h5>
        <span>{{ calcIndex(index) }}</span>
        {{ content.smallTitle }}
      </h5>
      <div class="overviewCaseImage" :style="'background-color:' + content.caseColor + ';'">
        <div :id="content.smallTitle" v-if="!Array.isArray(content.imageHome)">
          <img :src="getImagePath(content.imageHome)" :alt="content.title" />
        </div>
        <div :id="content.smallTitle" v-if="Array.isArray(content.imageHome)">
          <carousel :images="content.imageHome" :carouselInterval="content.carouselInterval" />
        </div>
      </div>
      <div class="clearfix"></div>
    </g-link>
  </div>
</template>

<script>
import carousel from "./carousel.vue";

export default {
  name: "overviewCase",
  components: { carousel },
  props: ["content", "index"],
  data: function() {
    return {};
  },
  methods: {
    getUrl: function(value) {
      value = value.toString();
      var res = value.replace(/:| /g, "-");
      return res.toLowerCase();
    },
    calcIndex(val) {
      if (val < 10) {
        val = "0" + val;
      }
      return val;
    },
    getImagePath: function(pic) {
      try {
        return require("../assets/portfolio/" + pic);
      } catch (ex) {
        return "";
      }

      // return require(url);
    },
    getClass: function(index) {
      var caseOffsets = [
        "col-sm-offset-7",
        "",
        "col-sm-offset-6",
        "col-sm-offset-1",
        "col-sm-offset-7"
      ];
      return caseOffsets[index - 1];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.case a {
  text-decoration: none;
  background-color: transparent;
}

.case a:hover{
  color: var(--text-color);
}

.case h5 {
  font-size: 23px;
  padding-left: 15px;
}

.case h5 span {
  font-size: 14px;
  float: left;
  font-family: "DM Mono", monospace;
  color: var(--light-gray);
  padding: 5px 10px 0 0;

  -webkit-transition: all 0.4s var(--standard-easing) 0.2s;
  -moz-transition: all 0.4s var(--standard-easing) 0.2s;
  -o-transition: all 0.4s var(--standard-easing) 0.2s;
  transition: all 0.4s var(--standard-easing) 0.2s;
}

.overviewCase a:hover h5 span {
  padding: 5px 20px 0 0;
}

.overviewCaseImage {
  clear: both;
  margin-top: 10px;
  width: 100%;
  overflow: hidden;
  text-align: center;
}

.overviewCaseImage img {
  max-width: 100%;
  margin-bottom: -10px;

  -webkit-transition: all 1.4s var(--standard-easing);
  transition: all 1.4s var(--standard-easing);
}

@media screen and (min-width: 778px) {
  body {
    background-color: olive;
  }
}

.overviewCase a:hover .overviewCaseImage img {
  transform: scale(1.1);
}

/* Animation for desktop screens */
@media screen and (min-width: 771px) {
  .overviewCaseImage::after {
    content: "";
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    top: 50%;
    left: 50%;
    z-index: -100;
    background-color: inherit;
    opacity: 0.8;

    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .overviewCase a:hover .overviewCaseImage::after {
    z-index: -99;
    transform: scale(99);

    -webkit-transition: all 1s ease;
    transition: all 1s ease;
  }
}
</style>
