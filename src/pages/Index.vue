<template>
  <Layout>
    <div class="home">
      <main class="homePage wrapper">
        <h1
          class="col-sm-6 animated"
        >Frontend developer & Digital designer from Aarhus. Working at Cordura. Studying at Aarhus University.</h1>

        <homeCases />

        <homeCompetencies />

        <div class="theend"></div>
      </main>

      <homeBlog />
    </div>
  </Layout>
</template>

<script>
import homeCases from "../components/home/homeCases";
import homeCompetencies from "../components/home/homeCompetencies";
import homeBlog from "../components/home/homeBlog";

export default {
  components: { homeCases, homeCompetencies, homeBlog },
  data: function() {
    return {
      loaded: ""
    };
  },
  metaInfo: {
    title:
      "Steffen Muldbjerg - Frontend developer & Digital Designer from Aarhus",
    bodyAttrs: {
      class: "index"
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.home {
  padding-top: 100px;
}

.homeCompetencies {
  clear: both;
}
</style>

<style scoped>
h1 {
  font-size: 32px;
  line-height: 1.4;
  margin: 0px;
}
</style>
