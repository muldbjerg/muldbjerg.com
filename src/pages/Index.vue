<template>
  <Layout>
    <div class="home">
      <main class="homePage wrapper animated">
        <h1
          class="col-sm-6 animated"
          style="transition-delay: 0.1s;"
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
  margin: 0px;
}

[data-aos="standard-animation"] {
  opacity: 0;
  transform: matrix(0.9, 0.02, -0.02, 0.9, 0, 100);
  /* transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1); */
}

[data-aos="standard-animation"].aos-animate {
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
</style>
