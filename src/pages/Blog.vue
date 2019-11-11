<template>
  <layout>
    <div class="wrapper">
      <!-- <h1>Blog</h1> -->

      <main id="blogPostArea">
        <overviewBlogPost
          class="col-sm-12"
          id="topBlogPost"
          v-if="$page.allWordPressPost.edges.length > 0"
          :content="$page.allWordPressPost.edges[0].node"
        />

        <article v-for="({node}, index) in $page.allWordPressPost.edges" :key="index">
          <overviewBlogPost class="col-sm-offset-1 col-sm-4" :content="node" v-if="index != 0" />
          <div v-if="index%2 != 0" class="clearfix"></div>
        </article>
      </main>
      <div class="clearfix"></div>

      <Pager :info="$page.allWordPressPost.pageInfo" />

      <div class="clearfix"></div>
    </div>
  </layout>
</template>

<page-query>
query Blog($page: Int) {
  allWordPressPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
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
  }
}
</page-query>

<script>
import overviewBlogPost from "../components/overviewBlogPost.vue";
import { Pager } from "gridsome";

export default {
  components: { overviewBlogPost, Pager },
  metaInfo: {
    title: "About us"
  }
};
</script>

<style scoped>
#topBlogPost {
  margin-top: 80px;
}
</style>