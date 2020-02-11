<template>
  <div id="homeCompetencies">
    <div class="skill col-sm-6 col-sm-offset-4" id="frontend">
      <div class="skillIcon col-sm-4">
        <g-image src="../../assets/img/map.svg" alt="Frontend" />
      </div>
      <div class="skillText col-sm-8">
        The internet is my home field. I write html, css and javascript to create lovely user experiences. Sometimes it's vanilla, other times with frameworks as React or Vue. Also, I'm certified friendly Umbraco Developer.
        <div class="readMore">
          <!-- <a>Læs mere</a> -->
        </div>
      </div>
    </div>

    <div class="skill col-sm-6 col-sm-offset-1" id="design">
      <div class="skillIcon col-sm-4">
        <g-image src="../../assets/img/notebook.svg" alt="Design" />
      </div>
      <div class="skillText col-sm-8">
        I design websites and digital products. All to make this a better place for people using it.
        <div class="readMore">
          <!-- <a>Læs mere</a> -->
        </div>
      </div>
    </div>

    <div class="skill col-sm-6 col-sm-offset-6" id="education">
      <div class="skillIcon col-sm-4">
        <g-image src="../../assets/img/backpack.svg" alt="User Experience" />
      </div>
      <div class="skillText col-sm-8">
        UX...
        <div class="readMore">
          <!-- <a>Læs mere</a> -->
        </div>
      </div>
    </div>

    <div id="competenciesLink" class="col-sm-4">
      <textButton text="Contact me" url="info" />
    </div>

    <div class="clearfix"></div>
  </div>
</template>

<script>
import textButton from "../../atoms/textButton.vue";

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
