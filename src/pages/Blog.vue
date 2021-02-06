<template>
  <layout>
    <div class="wrapper blog pageOffset">
      <!-- <h1>Blog</h1> -->

      <main id="blogPostArea">
        <overviewBlogPost
          class="col-sm-12 animated"
          id="topBlogPost"
          v-if="$page.allWordPressPost.edges.length > 0"
          :content="$page.allWordPressPost.edges[0].node"
        />

        <article
          class="blogpost animated"
          v-for="({node}, index) in $page.allWordPressPost.edges"
          :key="index"
        >
          <overviewBlogPost
            class="col-sm-offset-1 col-sm-4"
            :content="node"
            :index="index"
            v-if="index != 0"
          />
          <div class="clearfix"></div>
        </article>
      </main>
      <div class="clearfix"></div>

      <pager
        v-if="$page.allWordPressPost.pageInfo.totalPages > 0"
        :currentPage="$page.allWordPressPost.pageInfo.currentPage"
        :totalPages="$page.allWordPressPost.pageInfo.totalPages"
      />

      <div class="clearfix"></div>
    </div>
  </layout>
</template>

<page-query>
query Blog($page: Int) {
  allWordPressPost (perPage: 9, page: $page) @paginate {
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
        content
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
import pager from "../components/pager.vue";

export default {
  components: { overviewBlogPost, pager },
  metaInfo: {
    title: "Blog",
    meta: [
      {
        name: "description",
        content:
          "Steffen Muldbjerg's blog about design and frontend development. Side projects, book reviews, experiements and more. Find it here."
      }
    ]
  }
};
</script>

<style scoped>
#topBlogPost {
  margin-top: 20px;
}

.blogpost:nth-child(odd) .clearfix {
  display: none;
}
</style>