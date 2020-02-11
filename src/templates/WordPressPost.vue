<template>
  <Layout>
    <div class="wrapper blogPage pageOffset">
      <div class="col-sm-12">
        <div class="metaInfo category">
          <span v-for="(cat, index) in $page.wordPressPost.categories" v-bind:key="index">
            <g-link :to="'/category/'+cat.slug">{{ cat.title }}</g-link>
          </span>
        </div>
        <h1 v-html="$page.wordPressPost.title" />
        <!-- <div class="category"> -->
        <p class="metaInfo date">{{ date }}</p>
        <!-- </div> -->
        <div v-html="$page.wordPressPost.content"></div>
      </div>
      <div class="clearfix"></div>
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

export default {
  metaInfo() {
    return {
      title: this.$page.wordPressPost.title
    };
  },
  data: function() {
    return {
      date: new Date()
    };
  },
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
  font-size: 42px;
}

h3 {
  margin: 30px 0 10px 0;
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

.wp-block-image {
  clear: both;
  margin: 30px 0;
}

p {
  margin-bottom: 15px;
}
</style>