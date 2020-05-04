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
  transition: all 0.2s ease-in;
  white-space: nowrap;
}

.textButton a {
  display: inline-block;
  background-color: transparent;
  transition: all 0.2s ease-in;
}

.textButton::after {
  content: "→";
  display: inline;
  opacity: 0;
  overflow: hidden;
  transition: all 0.2s ease-in;
}

.textButton:hover::after {
  width: auto;
  opacity: 1;
  padding-left: 10px;
  transform: translateX(10px);
}

.textButton:hover a {
  text-decoration: none;
  transform: translateX(-10px);
}
</style>
