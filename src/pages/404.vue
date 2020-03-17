<template>
  <Layout>
    <main class="wrapper pageOffset">
      <div class="col-sm-4 errorPage">
        <h1 class="animated">Sorry, but this page is missing</h1>
        <p class="animated" v-bind:style="{ transitionDelay: 0.1 + 's'}">
          Bummer - but this page is not there for some reason. You could head back to the
          <a
            href="/"
          >frontpage</a> or write me a email on the huge email address below.
        </p>
      </div>

      <div
        class="col-sm-10 col-sm-offset-1 animated"
        v-bind:style="{ transitionDelay: 0.2 + 's'}"
        style="padding: 100px 0 150px 0;"
      >
        <sayHi />
      </div>
    </main>
  </Layout>
</template>

<script>
import SayHi from "../components/sayHi.vue";

export default {
  components: { SayHi },
  metaInfo: {
    title: "Site not found"
  }
};
</script>

<style scoped>
/* .infoText {
  font-size: 24px;
  line-height: 1.4;
}*/

.pageOffset {
  padding-top: 50px;
}

h1 {
  font-size: 32px;
  margin-bottom: 25px;
}

p {
  margin-bottom: 15px;
}

.errorPage {
  margin-bottom: 100px;
}
</style>