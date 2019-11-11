<template>
  <div class="sayHi">
    <p>Say hi</p>
    <p>↓</p>

    <fitText factor="1.8">
      <a id="fitemail" href="mailto:steffen@muldbjerg.com">steffen@muldbjerg.com</a>
    </fitText>
    <!-- <p v-bind:style="{fontSize: fontSize + 'px'}" id="textFitBox">
      
    </p>-->
  </div>
</template>

<script>
import fitText from "../atoms/fitText.vue";
// window.addEventListener("resize", this.makeTextFit());

export default {
  data: function() {
    return {};
  },
  components: { fitText },
  mounted() {}
};
</script>

<style scoped>
.sayHi {
  text-align: center;
}

.sayHi p {
  margin-bottom: 10px;
  width: 100%;
}
</style>
