<template>
  <Layout>
    <div class="wrapper pageOffset">
      <div class="col-sm-6 col-sm-offset-1 animated">
        <div
          class="manchet"
        >Landsmøde is the leading star for the YMCA-scouts organization - aka the general assembly. The new website and identity is all about getting scouts excited. And show up to debate, sleep in tents, be inspired, and determine the organization’s direction.</div>
      </div>

      <div
        class="col-sm-3 col-sm-offset-2 animated caseInfo"
        v-bind:style="{ transitionDelay: 0.1 + 's'}"
      >
        <h1 class="customer">Volunteer Project</h1>

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

      <div
        class="col-sm-5 col-sm-offset-1 textArea animated"
        v-bind:style="{ transitionDelay: 0.3 + 's'}"
      >
        <p>Democracy is amazing, but to many maybe not the sexiest of things. Landsmøde is the YMCA-Scout of Denmark’s national general assembly. My task - getting people excited. Great!</p>
      </div>

      <div class="col-sm-12 image animated">
        <img loading="lazy" src="../../assets/portfolio/landsmoede/Landsmoede_full_image.jpg" alt />
      </div>

      <div class="col-sm-5 col-sm-offset-1 textArea animated">
        <p>Only 34% of scout groups attended the last assembly. This is the number we worked on getting up. It is not only fun to gather more people. The debates and decisions become more nuanced.</p>
      </div>

      <div class="clearfix"></div>

      <div class="col-sm-5 col-sm-offset-1 textArea animated">
        <!-- <h6>03. My role</h6> -->
        <h6>My role</h6>
        <p>I’m organizing this event together with some good friends. My part is designing the identity. Making the website. Handling the communication and social media. Record the podcast. Oh, did I mention merch?! All this is done as a volunteer and as a personal project.</p>
      </div>

      <div class="clearfix"></div>

      <div class="col-sm-12 image animated">
        <img
          loading="lazy"
          src="../../assets/portfolio/landsmoede/landsmoede_logo_exploration.jpg"
          alt="Frontend"
        />
      </div>

      <div class="col-sm-12 image image_row animated">
        <div class="col-sm-6">
          <img
            loading="lazy"
            src="../../assets/portfolio/landsmoede/landsmoede_logo_outlined.jpg"
            alt="Frontend"
          />
        </div>
        <div class="col-sm-6">
          <img
            loading="lazy"
            src="../../assets/portfolio/landsmoede/landsmoede_logo_drawing_exploration.jpg"
            alt="Frontend"
          />
        </div>
      </div>

      <div class="clearfix"></div>

      <div class="col-sm-5 col-sm-offset-1 textArea animated">
        <p>The logo is a star mark. The star is both the organisations leading star or compass rose. It is also a little shout-out to a old tradition at Landsmøde - the event’s bar is called the star bar.</p>
        <p>The event website is a wordpress site with a custom designed theme. It is prepared to easily handle new proposal for by-laws and board member candidates. Because it needs to be updated quickly and in-the-wild throughout the event.</p>

        <a href="http://landsmoede.dk" target="_blank" rel="noopener">See the website in action 💻</a>
        <div class="clearfix"></div>
      </div>

      <div class="col-sm-12 image animated">
        <img
          loading="lazy"
          src="../../assets/portfolio/landsmoede/landsmoede_websites_pages.jpg"
          alt
        />
      </div>

      <div class="col-sm-12 image image_row animated">
        <div class="col-sm-6">
          <img
            loading="lazy"
            src="../../assets/portfolio/landsmoede/Landsmoede_logo_decoration.jpg"
            alt="Frontend"
          />
        </div>
        <div class="col-sm-6">
          <img
            loading="lazy"
            src="../../assets/portfolio/landsmoede/Landsmoede_headline_font.jpg"
            alt="Frontend"
          />
        </div>
      </div>

      <div class="clearfix"></div>

      <div class="col-sm-5 col-sm-offset-1 textArea animated">
        <p>The communication was a large part of getting that 34% number up. The general assembly is perceived very serious - and well it is - but with the tone of voice we wanted to come off as friendly and easy to understand.</p>

        <p>The identity also included graphics for social media, name tags, powerpoint templates, signs, and a range of other things both before and at the event.</p>
        <div class="clearfix"></div>
      </div>

      <div class="clearfix"></div>

      <div class="col-sm-12 image animated">
        <img
          loading="lazy"
          src="../../assets/portfolio/landsmoede/Landsmoede_instagram_carousel_post.jpg"
          alt
        />
      </div>

      <div class="col-sm-12 image image_row animated">
        <img
          loading="lazy"
          class="col-sm-6"
          src="../../assets/portfolio/landsmoede/landsmoede_podcast_mobile_player.jpg"
          alt
        />
        <img
          loading="lazy"
          class="col-sm-4 col-sm-offset-1"
          src="../../assets/portfolio/landsmoede/landsmoede_podcast_icon.jpg"
          alt
        />
      </div>

      <div class="clearfix"></div>

      <next-case currentCase="Landsmøde" />
    </div>
  </Layout>
</template>

<script>
import nextCase from "../../components/nextCase.vue";

export default {
  components: { nextCase },
  metaInfo: {
    title: "Landsmøde",
    meta: [
      {
        name: "description",
        content:
          "YMCA-scouts in Denmarks general assembly got a new branding to attract more scout leaders to join the organization democrazy."
      }
    ]
  }
};
</script>

<style scoped>
@import "../../assets/workcase.css";
</style>
