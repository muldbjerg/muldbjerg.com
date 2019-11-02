<template>
  <Layout>
    <h1 v-html="$page.wordPressPost.title" />
    <div v-html="$page.wordPressPost.content"></div>
  </Layout>
</template>

<page-query>
    query Post ($path: String!){
        wordPressPost (path: $path){
            title, content,
        }
    }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.wordPressPost.title
    };
  }
};
</script>