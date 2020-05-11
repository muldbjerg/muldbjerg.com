<template>
  <Layout>
    <div class="wrapper pageOffset">
      <main id="workPage">
        <article
          class="workcaseArticle"
          v-for="(project, index) in this.cases"
          v-bind:key="project.title"
        >
          <workCase v-bind:content="project" v-bind:index="index" />
          <div class="clearfix"></div>
        </article>
      </main>

      <div style="width: 100%; clear:both;"></div>
      <!-- <div class="pageDescription col-sm-6">
        <h1 class="animated" style="transition-delay: 0.2s;">Selected work</h1>
        <p class="animated" style="transition-delay: 0.4s;">hdehdehde</p>
      </div>-->
    </div>
  </Layout>
</template>


<script>
import cases from "../cases.json";
import workCase from "../components/workCase.vue";

export default {
  components: { workCase },
  data: function() {
    return {
      cases
    };
  },
  metaInfo: {
    title: "Work",
    meta: [
      {
        name: "description",
        content:
          "Steffen Muldbjergs's selected projects from 10 years designing and developing frontends for websites and digital products."
      },
      {
        property: "og:title",
        content: "Selected work projects of Steffen Østerby Muldbjerg"
      },
      { property: "og:site_name", content: "Muldbjerg" },
      { property: "og:type", content: "website" }
    ],
    bodyAttrs: {
      class: "workPage"
    }
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

