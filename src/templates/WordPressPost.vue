<template>
  <Layout>
    <div>
      <div class="wrapper blogPage pageOffset">
        <div class="col-sm-10 col-md-9 col-md-offset-1">
          <div class="metaInfo category animated">
            <span v-for="(cat, index) in $page.wordPressPost.categories" v-bind:key="index">
              <g-link :to="'/category/'+cat.slug">{{ cat.title }}</g-link>
            </span>
          </div>
          <h1 v-html="$page.wordPressPost.title" class="animated" style="transition-delay:0.1s" />
          <!-- <div class="category"> -->
          <div class="metaInfo">
            <p class="date animated" style="transition-delay:0.15s">{{ date }}</p>
            <p class="seperator">·</p>
            <p class="readTime animated" style="transition-delay:0.22s"><readTime :content="$page.wordPressPost.content" /></p>
          </div>
         
        </div>
        <div class="col-sm-9 col-md-8 col-md-offset-1">
          <main
            v-html="$page.wordPressPost.content"
            class="animated col-sm-10"
            style="transition-delay:0.27s"
          ></main>
        </div>
        <div class="clearfix"></div>
      </div>

      <div class="clearfix"></div>

      <homeBlog />
    </div>
  </Layout>
</template>

<page-query>
    query Post ($path: String!){
        wordPressPost (path: $path){
            content,
            id
            title
            date
            path
            excerpt
            featuredMedia {
              sourceUrl, altText
            }
            categories {
              id
              title
              slug
            }
        }
    }
</page-query>

<script>
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import homeBlog from "../components/home/homeBlog";
import readTime from "../atoms/readTime";

dayjs.extend(calendar);

export default {
  metaInfo() {
    return {
      title: this.$page.wordPressPost.title,
      meta: [{ name: "description", content: this.$page.wordPressPost.excerpt }]
    };
  },
  data: function() {
    return {
      date: new Date()
    };
  },
  components: { homeBlog, readTime },
  mounted() {
    var blogDate = dayjs(this.$page.wordPressPost.date);

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

<style>
.blogPage p{
  margin-bottom: 15px;
}

.blogPage h3 {
  margin: 70px 0 20px 0;
}

.wp-block-image {
  clear: both;
  margin: 60px 0;
}

.wp-block-preformatted {
  clear: both;
  font-family: "DM Mono", monospace;
  margin: 20px 0 30px 0;
  padding: 20px;
  background-color: var(--brand-secondary-dark);
  white-space: normal;
}

</style>

<style scoped>

.metaInfo {
  font-family: "DM Mono", monospace;
  font-size: 14px;
}

.metaInfo.category a {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 5px;
  color: var(--brand-color);
  text-decoration: none;
}

.metaInfo.category a:hover {
  color: var(--text-color);
  background-color: transparent;
}

.metaInfo p{
  float: left;
  color: var(--light-gray);
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.metaInfo .seperator{
  margin: 10px 15px;
}

.metaInfo a {
  color: var(--text-color);
  transition: all 0.3s var(--standard-easing);
}

.metaInfo span::after {
  content: ", ";
}

.metaInfo span:last-child::after {
  content: "";
}

.metaInfo a:hover {
  text-decoration: underline;
  color: var(--brand-color);
}

main{
  clear: both;
}


</style>