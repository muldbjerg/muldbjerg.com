<template>
  <div class="overviewCase">
    <g-link :to="content.path">
      <h5>
        <span>{{ this.index }}</span>
        {{ content.title }}
      </h5>
      <div class="overviewCaseImage" :style="'background-color:' + content.caseColor + ';'">
        <g-image :src="getImagePath(content.image)" :alt="content.title" />
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  name: "overviewCase",
  components: {},
  props: ["content", "index"],
  data: function() {
    return {};
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
        return "";
      }

      // return require(url);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.case a {
  text-decoration: none;
}

.case h5 {
  font-size: 23px;
  padding-left: 15px;
}

.case h5 span {
  font-size: 14px;
  float: left;
  font-family: "Inconsolata", monospace;
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
  margin-bottom: -2px;

  -webkit-transition: all 1.4s var(--standard-easing);
  transition: all 1.4s var(--standard-easing);
}

.overviewCase a:hover .overviewCaseImage img {
  transform: scale(1.1);
}
</style>
