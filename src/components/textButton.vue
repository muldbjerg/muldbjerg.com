<template>
  <div class="textButton">
    <g-link :to="this.url">{{ this.text }}</g-link>
  </div>
</template>

<script>
export default {
  name: "textButton",
  components: {},
  props: ["url", "text"],
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textButton {
  font-family: "HansKendrick_regular", -apple-system, "Avenir", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  font-size: 36px;
}
</style>
