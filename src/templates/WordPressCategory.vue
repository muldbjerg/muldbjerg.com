<template>
  <Layout>
    <div class="blog wrapper pageOffset">
      <h1>→ {{ $page.wordPressCategory.title }}</h1>
      <ul class="post-list">
        <li v-for="({node}, index) in $page.wordPressCategory.belongsTo.edges" :key="index">
          <overviewBlogPost class="col-sm-offset-1 col-sm-4" :content="node" />

          <div v-if="index%2 != 0" class="clearfix"></div>
        </li>
      </ul>

      <div class="clearfix"></div>

      <pager
        v-if="$page.wordPressCategory.belongsTo.pageInfo.totalPages > 0"
        :currentPage="$page.wordPressCategory.belongsTo.pageInfo.currentPage"
        :totalPages="$page.wordPressCategory.belongsTo.pageInfo.totalPages"
      />

      <div class="clearfix"></div>
    </div>
  </Layout>
</template>

<page-query>
query WordPressCategory ($id: ID!, $page: Int) {
  wordPressCategory(id: $id) {
    title
    belongsTo(page: $page, perPage: 10) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
            ... on WordPressPost {
                id
                title
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
  }
}
</page-query>

<script>
// import { Pager } from "gridsome";
import overviewBlogPost from "../components/overviewBlogPost.vue";
import pager from "../components/pager.vue";

export default {
  components: {
    overviewBlogPost,
    pager
  },
  metaInfo() {
    return {
      title: this.$page.wordPressCategory.title
    };
  }
};
</script>

<style scoped>
h1 {
  margin-top: 80px;
  margin-bottom: 40px;
}
</style>