<template>
  <div class="overviewBlogPost">
    <g-link :to="content.path">
      <div class="overviewBlogPostImage" v-if="content.featuredMedia">
        <g-image :src="content.featuredMedia.sourceUrl" :alt="content.title" />
      </div>

      <div class="overviewBlogPostContent">
        <div class="category">
          <span v-for="(cat, index) in this.content.categories" v-bind:key="index">
            <g-link :to="'/category/'+cat.slug">{{ cat.title }}</g-link>
          </span>
        </div>

        <h3>{{ content.title }}</h3>

        <p class="metaInfo">{{ date }}</p>

        <div class="overviewBlogPostText" v-html="content.excerpt"></div>
      </div>
      <div class="clearfix"></div>
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
.overviewBlogPost {
  padding-bottom: 100px;
}

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
  margin-top: 0px;
  font-size: 26px;
  line-height: 1.2;
}

.metaInfo {
  font-family: "Inconsolata", monospace;
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 30px;
}

.metaInfo a {
  transition: all 1.4s var(--standard-easing);
}

.category {
  margin: 20px 0 0px 0;
}

.category span a {
  margin-right: 10px;
  font-family: "Inconsolata", monospace;
  font-size: 14px;
  color: var(--brand-color);
}

.category span:hover a {
  text-decoration: underline;
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
  #topBlogPost {
    padding-bottom: 100px;
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
