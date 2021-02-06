<template>
  <div class="readTime">
    {{ this.readTime }} min read
  </div>
</template>

<script>
export default {
  name: "readTime",
  props: [ "content" ],
  data() {
    return {
      readTime: ""
    }
  },
  mounted() {
    const words = this.content.split(" ").length;
    const wordsPerMinute = 200;
    this.readTime = Math.ceil(words / wordsPerMinute);
  }
};
</script>

<style scoped>
.readTime{
  display: inline;
}
</style>
