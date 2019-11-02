<template>
  <div class="overviewBlogPost">
    <g-link :to="content.path">
      <div
        class="overviewBlogPostImage"
        :style="'background-color:' + content.caseColor + ';'"
        v-if="getImagePath(content.overviewImage)"
      >
        <img :src="getImagePath(content.overviewImage)" :alt="content.title" />
      </div>

      <h3>{{ content.title }}</h3>

      <p class="metaInfo">
        {{ date }}
        <span>|</span>
        <!-- <g-link :to="'/blog/'+this.content.category">{{ content.category }}</g-link> -->
      </p>

      <div class="overviewBlogPostText">{{ content.overviewText }}</div>
    </g-link>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "OverviewBlogPost",
  components: {},
  props: ["content", "index"],
  data: function() {
    return {
      date: new Date()
    };
  },
  methods: {
    getImagePath: function(pic) {
      try {
        return require("../assets/" + pic);
      } catch (ex) {
        return "";
      }
    }
  },
  created() {
    this.date = moment(this.$props.content.date).calendar(null, {
      today: "From today",
      lastDay: "[From yesterday]",
      sameElse: function() {
        if (this.years() === new Date().getFullYear()) {
          return "MMM D";
        } else {
          return "MMM D, YYYY";
        }
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overviewBlogPost a {
  text-decoration: none;
}

.overviewBlogPostImage {
  clear: both;
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
}

.overviewBlogPostImage img {
  max-width: 100%;
  margin-bottom: -2px;

  transition: all 1.4s var(--standard-easing);
}

.overviewBlogPost a:hover .overviewBlogPostImage img {
  transform: scale(1.1);
}

.overviewBlogPost a:hover h3 {
  text-decoration: underline;
}

.overviewBlogPost h3 {
  margin-top: 30px;
  font-size: 26px;
  line-height: 1.2;
}

.metaInfo {
  font-family: "Inconsolata", monospace;
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 30px;
  /* color: var(--brand-secondary); */
}

.metaInfo span {
  margin: 0 10px 0 6px;
}

.metaInfo a {
  /* color: var(--brand-secondary); */

  -webkit-transition: all 1.4s var(--standard-easing);
  -moz-transition: all 1.4s var(--standard-easing);
  -o-transition: all 1.4s var(--standard-easing);
  transition: all 1.4s var(--standard-easing);
}

.metaInfo a:hover {
  text-decoration: underline;
}

.overviewBlogPostText {
  color: var(--brand-color-light-text);
  font-size: var(--standard-text-size);
  line-height: var(--standard-line-height);
}

#topBlogPost .overviewBlogPostText {
  width: 80%;
}

@media screen and (max-width: 771px) {
  #topBlogPost .overviewBlogPostText {
    width: 100%;
  }
}

/* GÆLDER KUN FOR HOME BLOG */
#homeBlog .overviewBlogPostImage {
  max-height: 450px;
}
</style>
