<template>
  <div id="homeCompetencies">
    <div class="skill col-sm-6 col-sm-offset-4" id="frontend">
      <div class="skillIcon col-sm-4">
        <img
          src="../../assets/img/Certified_frontend_developer_umbraco_steffen_muldbjerg.svg"
          alt="Frontend"
        />
      </div>
      <div class="skillText col-sm-8">
        The internet is my home field. I write html, css, and javascript to create lovely user experiences. Sometimes it's vanilla, other times with frameworks like React or Vue. Also, I'm a certified friendly Umbraco Expert.
        <div class="readMore">
          <!-- <a>Læs mere</a> -->
        </div>
      </div>
    </div>

    <div class="skill col-sm-6 col-sm-offset-1" id="design">
      <div class="skillIcon col-sm-4">
        <img src="../../assets/img/Designing_user_interfaces_steffen_muldbjerg.svg" alt="Design" />
      </div>
      <div class="skillText col-sm-8">
        Design is not luxury, but creating with intent - on purpose. I design for user experience and atmosphere. And users needs consistency rather than art. I design digital products and websites.
        <div class="readMore">
          <!-- <a>Læs mere</a> -->
        </div>
      </div>
    </div>

    <div id="competenciesLink" class="col-sm-4 col-sm-offset-6">
      <textButton text="Contact me" url="about" />
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
  width: 90%;
  margin-top: -10%;
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
