<template>
  <Layout>
    <div class="wrapper">
      <h1>Work</h1>
      <ul>
        <li v-for="project in this.cases" v-bind:key="project.title">
          <g-link :to="project.path">{{project.title}}</g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>


<script>
import cases from "../cases.json";

export default {
  data() {
    return {
      cases: cases
    };
  },
  metaInfo: {
    title: "Work"
  }
};
</script>
