<template>
  <Layout>
    <div>
      <div class="wrapper blogPage pageOffset">
        <div class="col-sm-8">
          <div class="metaInfo category animated">
            <span v-for="(cat, index) in $page.wordPressPost.categories" v-bind:key="index">
              <g-link :to="'/category/'+cat.slug">{{ cat.title }}</g-link>
            </span>
          </div>
          <h1 v-html="$page.wordPressPost.title" class="animated" style="transition-delay:0.1s" />
          <!-- <div class="category"> -->
          <p class="metaInfo date animated" style="transition-delay:0.15s">{{ date }}</p>
          <!-- </div> -->
          <main
            v-html="$page.wordPressPost.content"
            class="animated col-sm-10"
            style="transition-delay:0.2s"
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
import moment from "moment";
import homeBlog from "../components/home/homeBlog";

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
  components: { homeBlog },
  created() {
    this.date = moment(this.$page.wordPressPost.date).calendar(null, {
      today: "From today",
      lastDay: "From yesterday",
      sameElse: function() {
        if (this.year() === new Date().getFullYear()) {
          return "MMM D";
        } else {
          return "MMM D, YYYY";
        }
      }
    });
  }
};
</script>

<style scope>
h1 {
}

h3 {
  margin: 70px 0 20px 0;
}

.wp-block-image {
  clear: both;
  margin: 60px 0;
}

p {
  margin-bottom: 15px;
}

.metaInfo {
  font-family: "Inconsolata", monospace;
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

.metaInfo.date {
  color: var(--light-gray);
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 30px;
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
</style>