<template>
  <Layout>
    <div class="wrapper">
      <h1>→ {{ $page.wordPressCategory.title }}</h1>
      <ul class="post-list">
        <li v-for="({node}, index) in $page.wordPressCategory.belongsTo.edges" :key="index">
          <overviewBlogPost class="col-sm-offset-1 col-sm-4" :content="node" />

          <div v-if="index%2 != 0" class="clearfix"></div>
        </li>
      </ul>

      <div class="clearfix"></div>

      <Pager :info="$page.wordPressCategory.belongsTo.pageInfo" />
    </div>
  </Layout>
</template>

<page-query>
query WordPressCategory ($id: ID!, $page: Int) {
  wordPressCategory(id: $id) {
    title
    belongsTo(page: $page, perPage: 2) @paginate {
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
import { Pager } from "gridsome";
import overviewBlogPost from "../components/overviewBlogPost.vue";

export default {
  components: {
    Pager,
    overviewBlogPost
  },
  metaInfo() {
    return {
      title: this.$page.wordPressCategory.title
    };
  }
};
</script>