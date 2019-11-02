<template>
  <Layout>
    <h1>Blog</h1>
    <ul>
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <g-link :to="node.path">{{node.title}}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Home {
  allWordPressPost (perPage: 10) {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>
