<template>
  <div class="nextCase pageOffset">
    <div class="clearfix"></div>
    <h4>Also have a look at..</h4>
    <article
      class="workcaseArticle"
      v-for="(project, index) in this.cases"
      v-bind:key="project.title"
      v-if="project.smallTitle != currentCase"
    >
      <workCase v-bind:content="project" v-bind:index="index" />
      <div class="clearfix"></div>
    </article>

    <div id="competenciesLink" class="col-sm-4">
      <textButton text="See all projects" url="work" />
    </div>
  </div>
</template>

<script>
import cases from "../cases.json";
import workCase from "../components/workCase.vue";
import textButton from "../atoms/textButton.vue";

export default {
  data: function() {
    return {
      caseItem: null,
      cases: cases
    };
  },
  components: { workCase, textButton },
  props: ["currentCase"]
};
</script>

<style scoped>
h4 {
  margin: 120px 0 20px 0;
}

.workcaseArticle .clearfix {
  display: none;
}

.workcaseArticle:nth-child(3n + 2) .clearfix {
  display: block;
}

@media screen and (max-width: 991px) {
  .workcaseArticle:nth-child(3n + 2) .clearfix {
    display: none;
  }

  .workcaseArticle:nth-child(2n + 0) .clearfix {
    display: block;
  }
}
</style>
