<template>
  <div class="overviewBlogPost animated" v-bind:style="{ transitionDelay: 0.1*this.index + 's' }">
    <g-link :to="content.path">
      <div class="overviewBlogPostImage" v-if="content.featuredMedia">
        <g-image
          :src="content.featuredMedia.sourceUrl"
          :alt="content.title"
          width="500"
          height="500"
        />
        <!-- <img loading="lazy" :src="content.featuredMedia.sourceUrl" :alt="content.title" /> -->
      </div>

      <div class="overviewBlogPostContent">
        <div class="overviewMetaInfo">
            <p class="date">{{ date }}</p>
            <p class="seperator">·</p>
            <p class="readTime"><readTime :content="content.content" /></p>
        </div>

        <h3 v-html="content.title"></h3>

        <div class="overviewBlogPostText" v-html="content.excerpt"></div>
      </div>
      <div class="clearfix"></div>
    </g-link>
  </div>
</template>

<script>
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import readTime from "../atoms/readTime";

dayjs.extend(calendar);

export default {
  name: "OverviewBlogPost",
  components: { readTime },
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
  mounted() {
    var blogDate = dayjs(this.$props.content.date);

    if (blogDate.$y == new Date().getFullYear()) {
      this.date = dayjs().calendar(blogDate, {
        sameDay: "[From today]",
        nextDay: "[From yesterday]",
        lastDay: "[From yesterday]",
        sameElse: "MMM D"
      });
    } else {
      this.date = blogDate.format("MMM D, YYYY");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overviewBlogPost {
  padding-bottom: 100px;
}

.overviewBlogPost a {
  text-decoration: none;
  background-color: transparent;
}

.overviewBlogPost a:hover{
  color: var(--text-color);
}

.overviewBlogPostImage {
  clear: both;
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
}

.overviewBlogPostImage img {
  max-width: 100%;
  margin-bottom: -10px;

  transition: all 1.4s var(--standard-easing);
}

.overviewBlogPost a:hover .overviewBlogPostImage img {
  transform: scale(1.1);
}

.overviewBlogPost a:hover h3 {
  text-decoration: underline;
}

.overviewBlogPost h3 {
  clear: both;
  margin-top: 0px;
  font-size: 26px;
  line-height: 1.2;
  padding: 10px 0 30px 0;
}

.overviewBlogPost .overviewBlogPostContent:nth-child(2) {
  display: none;
}

.overviewBlogPost a .overviewBlogPostContent {
  display: block !important;
}

.overviewMetaInfo {
  font-family: "DM Mono", monospace;
  color: var(--light-gray);
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 20px;
}

.overviewMetaInfo p{
  float: left;
  color: var(--light-gray);
}

.overviewMetaInfo .seperator{
  float: left;
  margin: 0 10px;
}

.overviewMetaInfo a {
  color: var(--text-color);
  transition: all 0.3s var(--standard-easing);
}

.overviewMetaInfo span::after {
  content: ", ";
}

.overviewMetaInfo span:last-child::after {
  content: "";
}

.overviewMetaInfo a:hover {
  text-decoration: underline;
  color: var(--brand-color);
}

.overviewBlogPostText {
  color: var(--brand-color-light-text);
  font-size: var(--standard-text-size);
  line-height: var(--standard-line-height);
}

#topBlogPost .overviewBlogPostText {
  width: 80%;
}

#topBlogPost.col-sm-12 .overviewBlogPostImage {
  width: 50%;
  float: left;
}

#topBlogPost.col-sm-12 .overviewBlogPostContent {
  float: left;
  width: 33%;
  margin-left: 5%;
  margin-top: 60px;
}

#topBlogPost.col-sm-12 .overviewBlogPostText {
  width: 100%;
}

@media screen and (max-width: 771px) {
  .overviewBlogPost {
    padding-bottom: 80px;
  }

  #topBlogPost .overviewBlogPostText {
    width: 100%;
  }

  #topBlogPost.col-sm-12 .overviewBlogPostImage {
    width: 100%;
  }

  #topBlogPost.col-sm-12 .overviewBlogPostContent {
    width: 100%;
    margin-left: 0%;
    margin-top: 0px;
  }
}

/* GÆLDER KUN FOR HOME BLOG */
#homeBlog .overviewBlogPostImage {
  max-height: 450px;
}
</style>
