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
  font-family: "DM Sans", -apple-system, "Avenir", "Helvetica Neue",
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

.textButton a:hover{
  color: var(--text-color);
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

@media screen and (max-width: 771px) {
  .textButton::after{
    display: none;
  }

  .textButton:hover::after {
    padding-left: 0px;
    transform: translateX(0px);
  }

  .textButton:hover a {
    transform: translateX(0px);
  }
}
</style>
