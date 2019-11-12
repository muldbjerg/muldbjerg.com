<template>
  <div class="fitText">
    <vueResizeSensor @resize="resize"></vueResizeSensor>
    <p v-bind:style="{fontSize: fontSize + 'px'}" id="textFitBox">
      <slot />
    </p>
  </div>
</template>

<script>
import "../assets/js/fittext.js";
import vueResizeSensor from "vue-resize-sensor";

export default {
  name: "fitText",
  components: { vueResizeSensor },
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
  },
  methods: {
    resize: function() {
      var factor = 1 / this.factor; // approximate width-to-height ratio
      var textFitBox = document.getElementById("textFitBox");
      this.fontSize = Math.floor(
        textFitBox.offsetWidth / (textFitBox.innerText.length * factor)
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
