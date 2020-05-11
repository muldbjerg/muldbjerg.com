<template>
  <Layout>
    <div class="wrapper pageOffset">
      <div class="col-sm-6 animated">
        <h1 class="customer">Filterdome</h1>
        <div
          class="manchet"
        >Filterdome is a tangible way to experience the bubble that surrounds you. The public installation combines projections, apps, screens and sawing. The most artsy project, you properly will meet on this side.</div>
        <div class="myrole animated" v-bind:style="{ transitionDelay: 0.1 + 's'}">
          <ul class="col-sm-10">
            <li>#frontend</li>
            <li>#design</li>
            <li>#react</li>
            <li>#activism</li>
            <li>#installation</li>
          </ul>
        </div>
      </div>

      <div
        class="col-sm-4 col-sm-offset-2 animated case_image"
        v-bind:style="{ transitionDelay: 0.2 + 's'}"
      >
        <img src="../../assets/portfolio/filterdome/filterdome_top_case_image.jpg" alt />
      </div>

      <div class="clearfix"></div>

      <div
        class="col-sm-5 col-sm-offset-1 textArea animated"
        v-bind:style="{ transitionDelay: 0.3 + 's'}"
      >
        <p>Social media is able to create filter bubbles - echo chambers, where people just confirm you in your existing beliefs. That’s an actual problem, because it makes it harder to understand others point of view. And this world needs more empathy - not less.</p>
      </div>

      <div class="col-sm-10 image animated">
        <videoRatio>
          <iframe
            class
            width="1100"
            height="500"
            src="https://www.youtube.com/embed/IUI3i_xu0GQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </videoRatio>
      </div>

      <div class="col-sm-5 col-sm-offset-1 textArea animated">
        <p>It’s hard to experience your filter bubble, because - well you are inside it already. And it’s invisible, because it hides behind beautiful pictures and updates in your feed.</p>
      </div>

      <div class="clearfix"></div>

      <div class="col-sm-5 col-sm-offset-1 textArea animated">
        <h6>My role</h6>
        <p>I developed the Filterdome concept with Nikolaj and Jonas. Besides sawing the sheet covering the dome, I designed and developed 6 small ReactJs apps. The main app is made with a Facebook login integration - to make it easy to get started.</p>
      </div>

      <div class="clearfix"></div>

      <div class="col-sm-12 image animated">
        <div class="col-sm-6">
          <img
            src="../../assets/portfolio/filterdome/filterdome_creation_process.jpg"
            alt
            loading="lazy"
          />
        </div>
        <div class="col-sm-6">
          <img
            src="../../assets/portfolio/filterdome/filterdome_drawing_early_stage.jpg"
            alt="Frontend"
          />
        </div>
      </div>

      <div class="col-sm-12 image image_row animated">
        <div class="col-sm-4">
          <img
            src="../../assets/portfolio/filterdome/filterdome_drawing_early_stage_too.jpg"
            alt
            loading="lazy"
          />
        </div>
        <div class="col-sm-7 col-sm-offset-1">
          <img
            src="../../assets/portfolio/filterdome/filterdome_drawing_finale.jpg"
            alt
            loading="lazy"
          />
        </div>
      </div>

      <div class="clearfix"></div>

      <div class="col-sm-5 col-sm-offset-1 textArea animated">
        <p>We designed Filterdome to make bubbles come to life. When you’re inside the dome, it’s like you’re inside your bubble. People outside the dome control what you see inside the dome. It’s scary to have others control you - when you actually know that is what’s happening.</p>

        <p>Filterdome both is controlled with RFID-tags inside objects, and have lights, projections, multiple screens. When you walk inside, you login on the webapp with your Facebook account. From there Filterdome uses your name, and personalize the experience based on your account.</p>
        <div class="clearfix"></div>
      </div>

      <div class="col-sm-12 image animated">
        <div class="col-sm-6">
          <img
            src="../../assets/portfolio/filterdome/filterdome_app_facebook_login_screen.jpg"
            alt
            loading="lazy"
          />
        </div>
        <div class="col-sm-6">
          <img
            src="../../assets/portfolio/filterdome/filterdome_control_table.jpg"
            alt
            loading="lazy"
          />
        </div>
      </div>

      <div class="col-sm-12 image image_row animated">
        <div class="col-sm-6">
          <img src="../../assets/portfolio/filterdome/Building_process.gif" alt loading="lazy" />
        </div>
        <div class="col-sm-6">
          <img
            src="../../assets/portfolio/filterdome/filterdome_light_notification.jpg"
            alt
            loading="lazy"
          />
        </div>
      </div>

      <div class="clearfix"></div>

      <div class="col-sm-5 col-sm-offset-1 textArea animated">
        <p>Filterdome was displayed at Dokk1 - and had a lot of visitors. But children and adults played with it. Some was scared. Others fascinated seeing how people outside the dome controlled what they got to see inside. Making a public installation meant designing a super simple user experience - both easy to get started and easy to understand.</p>
        <div class="clearfix"></div>
      </div>

      <div class="clearfix"></div>

      <div class="col-sm-12 image animated">
        <div class="col-sm-6">
          <img
            src="../../assets/portfolio/filterdome/filterdome_installation_dokk1.jpg"
            alt
            loading="lazy"
          />
        </div>
        <div class="col-sm-6">
          <img
            src="../../assets/portfolio/filterdome/filterdome_installation_people_at_dokk1.jpg"
            alt
          />
        </div>
      </div>

      <next-case currentCase="Filterdome" />
    </div>
  </Layout>
</template>

<script>
import nextCase from "../../components/nextCase.vue";
import videoRatio from "../../atoms/videoRatio.vue";

export default {
  components: { nextCase, videoRatio },
  metaInfo: {
    title: "filterdome",
    meta: [
      {
        name: "description",
        content:
          "We are all inside our Filter bubbles, see how it was made tangible. This case shows an installation displayed at Dokk1 in Aarhus."
      }
    ]
  }
};
</script>

<style scoped>
@import "../../assets/workcase.css";
</style>
