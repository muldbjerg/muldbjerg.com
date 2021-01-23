<template>
  <div class="fitText">
    <vueResizeSensor @resize="resize"></vueResizeSensor>
    <p v-bind:style="{fontSize: fontSize + 'px'}" ref="box" id="textFitBox">
      <slot />
    </p>
  </div>
</template>

<script>
import vueResizeSensor from "vue-resize-sensor";

export default {
  name: "fitText",
  components: { vueResizeSensor },
  props: ["factor"],
  data: function() {
    return {
      fontSize: 32
    };
  },
  mounted() {
    var factor = 1 / this.factor; 
    this.fontSize = Math.floor(
      this.$refs.box.offsetWidth / (this.$refs.box.innerText.length * factor)
    );
  },
  methods: {
    resize: function() {
      var factor = 1 / this.factor; 
      this.fontSize = Math.floor(
        this.$refs.box.offsetWidth / (this.$refs.box.innerText.length * factor)
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#textFitBox a:hover {
  text-decoration: none;
  background-color: transparent;
}
</style>
