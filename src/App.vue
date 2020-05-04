<template>
  <div id="app">
    <transition name="fade" appear>
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: ""
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
