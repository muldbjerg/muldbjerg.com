<template>
  <div id="homeCompetencies">
    <div class="skill col-sm-6 col-sm-offset-4" id="frontend">
      <div class="skillIcon col-sm-4">
        <!-- <img src="../assets/map.svg" alt> -->
      </div>
      <div class="skillText col-sm-8">
        Interwebs er min hjemmebane. Jeg skriver html, css og javascript.
        Nogle gange vanilla, andre gange med frameworks som react og vue.
        Jeg er certificeret Umbraco udvikler.
        <div class="readMore">
          <a>Læs mere</a>
        </div>
      </div>
    </div>

    <div class="skill col-sm-6 col-sm-offset-1" id="design">
      <div class="skillIcon col-sm-4">
        <!-- <img src="../assets/notebook.svg" alt> -->
      </div>
      <div class="skillText col-sm-8">
        Jeg arbejder med design systemer, som giver en tydelig konsistens på tværs af medier og produkter. Jeg designer digitale produkter ~ software, websites og apps.
        <div class="readMore">
          <a>Læs mere</a>
        </div>
      </div>
    </div>

    <div class="skill col-sm-6 col-sm-offset-6" id="education">
      <div class="skillIcon col-sm-4">
        <!-- <img src="../assets/backpack.svg" alt> -->
      </div>
      <div class="skillText col-sm-8">
        Jeg underviser i webteknologier og design.
        <div class="readMore">
          <a>Læs mere</a>
        </div>
      </div>
    </div>

    <div id="competenciesLink" class="col-sm-4">
      <textButton text="Contact me" url="info" />
    </div>
  </div>
</template>

<script>
import textButton from "../textButton.vue";

export default {
  name: "homeCompetencies",
  components: { textButton },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#homeCompetencies {
  clear: both;
  padding-top: 200px;
}

.skillText {
  font-size: var(--standard-text-size);
  line-height: var(--standard-line-height);
}

.skillIcon img {
  width: 80%;
  margin-top: -5%;
}

.skill {
  margin-bottom: 110px;
}

.skill:nth-child(3) {
  margin-bottom: 0px;
}

#competenciesLink {
  margin-top: -40px;
}

@media screen and (max-width: 771px) {
  #competenciesLink {
    margin-top: 60px;
    text-align: center;
  }
}
</style>
