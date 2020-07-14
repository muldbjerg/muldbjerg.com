<template>
  <Layout>
    <div class="wrapper pageOffset">
      <div class="col-sm-7 col-md-6 col-md-offset-1 animated">
        <div
          class="manchet"
        >Landsmøde is the leading star for the YMCA-scouts organization - aka the general assembly. The new website and identity is all about getting scouts excited. And show up to debate, sleep in tents, be inspired, and determine the organization’s direction.</div>
      </div>

      <div
        class="col-sm-3 col-sm-offset-2 animated caseInfo"
        v-bind:style="{ transitionDelay: 0.1 + 's'}"
      >
        <h1 class="customer">Cordura by bibliotheca</h1>

        <div class="year col-sm-12 col-xs-6">
          <p class="label">Year</p>
          <p class="yearText">2020</p>
        </div>
        <div class="service col-sm-12 col-xs-6">
          <p class="label">What I did</p>
          <ul class="serviceList">
            <li>Identity</li>
            <li>Strategy</li>
            <li>Design</li>
            <li>Frontend</li>
            <li>Communication</li>
            <li>Wordpress</li>
          </ul>
        </div>
      </div>

      <div class="clearfix"></div>
    </div>
  </Layout>
</template>

<script>
import nextCase from "../../components/nextCase.vue";

export default {
  metaInfo: {
    title: "transformativeLibrary",
    meta: [
      {
        name: "description",
        content: ""
      }
    ]
  },
  components: { nextCase }
};
</script>

<style scoped>
@import "../../assets/workcase.css";
</style>
