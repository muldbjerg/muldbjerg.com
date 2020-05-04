<template>
  <div class="videoScaleRatio">
    <slot />
  </div>
</template>

<script>
export default {
  name: "videoRatio"
};
</script>

<style scoped>
.videoScaleRatio {
  position: relative;
  padding-bottom: 56.5%;
  height: 0;
}
.videoScaleRatio iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
