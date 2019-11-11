<template>
  <Layout>
    <div class="home">
      <main class="wrapper">
        <h1
          class="col-sm-6"
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
  metaInfo: {
    title: "Steffen Muldbjerg - Frontend developer & Digital Designer."
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

h1 {
  font-size: 32px;
  margin: 0px;
}

.homeCompetencies {
  clear: both;
}
</style>
