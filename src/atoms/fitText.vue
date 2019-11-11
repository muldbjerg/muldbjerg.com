<template>
  <div class="fitText">
    <p v-bind:style="{fontSize: fontSize + 'px'}" id="textFitBox">
      <slot />
    </p>
  </div>
</template>

<script>
import "../assets/js/fittext.js";

export default {
  name: "fitText",
  components: {},
  props: ["factor"],
  data: function() {
    return {
      fontSize: 30
    };
  },
  mounted() {
    var factor = 1 / this.factor; // approximate width-to-height ratio
    var textFitBox = document.getElementById("textFitBox");
    this.fontSize = Math.floor(
      textFitBox.offsetWidth / (textFitBox.innerText.length * factor)
    );

    window.addEventListener("resize", () => {
      var factor = 1 / this.factor; // approximate width-to-height ratio
      var textFitBox = document.getElementById("textFitBox");
      this.fontSize = Math.floor(
        textFitBox.offsetWidth / (textFitBox.innerText.length * factor)
      );
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
