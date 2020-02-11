<template>
  <Layout>
    <div class="wrapper pageOffset">
      <main id="workPage">
        <article class="workcaseArticle" v-for="project in this.cases" v-bind:key="project.title">
          <workCase v-bind:content="project" />
          <!-- <g-link :to="project.path">{{project.title}}</g-link> -->
          <div class="clearfix"></div>
        </article>
      </main>

      <div style="width: 100%; clear:both;"></div>
      <div class="pageDescription col-sm-6">
        <h1>Selected work</h1>
        <p>hdehdehde</p>
      </div>
    </div>
  </Layout>
</template>


<script>
import cases from "../cases.json";
import workCase from "../components/workCase.vue";

export default {
  data() {
    return {
      cases: cases
    };
  },
  components: { workCase },
  metaInfo: {
    title: "Work"
  }
};
</script>

<style scoped>
.pageDescription {
  margin: 100px 0 200px 0;
}

.clearfix {
  display: none;
}

.workcaseArticle:nth-child(3n + 0) .clearfix {
  display: block;
}

@media screen and (max-width: 991px) {
  .workcaseArticle:nth-child(3n + 0) .clearfix {
    display: none;
  }

  .workcaseArticle:nth-child(2n + 0) .clearfix {
    display: block;
  }
}
</style>

