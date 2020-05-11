<template>
  <Layout>
    <div class="wrapper pageOffset">
      <div class="col-sm-6 animated">
        <h1 class="customer">Gravisi</h1>
        <div
          class="manchet"
        >Behind Gravisi is Jesper Oehlenschläger, and he teaches grown-ups to catch a pencil and facilitate processes with drawings. His new website is hand-drawn and he got his very own unique font. The website is easily maintained and automates the rest.</div>
        <div class="myrole animated" v-bind:style="{ transitionDelay: 0.2 + 's'}">
          <ul class="col-sm-10">
            <li>#frontend</li>
            <li>#design</li>
            <li>#font</li>
            <li>#wordpress</li>
            <li>#concept</li>
            <li>#communication</li>
          </ul>
        </div>
      </div>

      <div class="col-sm-4 col-sm-offset-2 animated" v-bind:style="{ transitionDelay: 0.1 + 's'}">
        <img src="../../assets/portfolio/gravisi/gravisi_you_can_draw_too.png" alt="Frontend" />
      </div>

      <div class="clearfix"></div>

      <div
        class="col-sm-5 col-sm-offset-1 textArea animated"
        v-bind:style="{ transitionDelay: 0.3 + 's'}"
      >
        <!-- <h6>01. Problem</h6> -->
        <p>Gravisi’s old website didn’t handle payment or course sign up. It required trivial hand-typing registering and accounting. And when you’re just one person firm that not where you want to spend your time. The old design was also your typical standard WordPress theme.</p>
      </div>

      <div class="col-sm-12 image animated">
        <!-- <img loading="lazy" src="../../assets/portfolio/gravisi/gravisi_picture_map.png" alt="Frontend" /> -->
        <img
          class="col-sm-5"
          src="../../assets/portfolio/gravisi/gravisi_picture_moodbord_1.jpg"
          alt="Frontend"
        />
        <img
          class="col-sm-6"
          src="../../assets/portfolio/gravisi/gravisi_picture_moodbord_2.jpg"
          alt="Frontend"
        />
      </div>

      <div class="col-sm-5 col-sm-offset-1 textArea animated">
        <!-- <h6>02. Insight</h6> -->
        <p>Behind Gravisis is Jesper, and for the last 5 years, he has taught over 4000 grown-ups to draw. Drawing has been his go-to tool for facilitating process and coaching leaders for over 20 years. And as a one-man-band firm, his website has to grab its own pencil and start helping him.</p>
      </div>

      <div class="clearfix"></div>

      <div class="col-sm-5 col-sm-offset-1 textArea animated">
        <!-- <h6>03. My role</h6> -->
        <h6>My role</h6>
        <p>I, too, was a one-man-band on this project. I did the research, structured, designed and coded the project. Jesper, of course, helped a lot with his awesome hand-drawn illustrations.</p>
      </div>

      <div class="col-sm-12 image animated">
        <img
          loading="lazy"
          src="../../assets/portfolio/gravisi/gravisi_custom_font.png"
          alt="Frontend"
        />
      </div>

      <div class="col-sm-9 col-sm-offset-1 customfont animated">
        <div class="col-sm-3">Regular</div>
        <div class="col-sm-8">
          <img
            loading="lazy"
            src="../../assets/portfolio/gravisi/gravisi_custom_font_regular.svg"
            alt="Frontend"
          />
        </div>
      </div>
      <div class="col-sm-9 col-sm-offset-1 customfont animated">
        <div class="col-sm-3">Bold</div>
        <div class="col-sm-8">
          <img
            loading="lazy"
            src="../../assets/portfolio/gravisi/gravisi_custom_font_bold.svg"
            alt="Frontend"
          />
        </div>
      </div>

      <div class="col-sm-12 image animated">
        <img
          loading="lazy"
          src="../../assets/portfolio/gravisi/gravisi_new_designed_website.jpg"
          alt="Frontend"
        />
      </div>

      <div class="col-sm-5 col-sm-offset-1 textArea animated">
        <!-- <h6>04. Solution</h6> -->
        <p>The solution was to have the design shine of Jesper’s charisma. All hand-drawn from illustrations to the new custom typeface. Jesper drew the letters, and I made the font. The content is written to be from Jesper directly.</p>
        <p>The website is a brand new Wordpress site. Complete with an integrated WooCommerce shop. And yeps - it handles the accounting automatically.</p>
      </div>

      <div class="clearfix"></div>

      <div class="image animated">
        <div class="col-sm-6">
          <img
            src="../../assets/portfolio/gravisi/gravisi_course_page_wordpress.png"
            alt="Frontend"
          />
        </div>

        <div class="col-sm-4 col-sm-offset-1">
          <img
            loading="lazy"
            src="../../assets/portfolio/gravisi/gravisi_graphic.png"
            alt="Frontend"
          />
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="image animated">
        <div class="col-sm-5">
          <img
            loading="lazy"
            src="../../assets/portfolio/gravisi/gravisi_website_footer.png"
            alt="Frontend"
          />
        </div>

        <div class="col-sm-6 col-sm-offset-1">
          <img
            src="../../assets/portfolio/gravisi/gravisi_website_course_overview.png"
            alt="Frontend"
          />
        </div>
        <div class="clearfix"></div>
      </div>

      <div class="clearfix"></div>

      <div class="col-sm-5 col-sm-offset-1 textArea animated">
        <!-- <h6>05. Learnings</h6> -->
        <p>It was awesome to work with Jesper and Gravisi, getting to design around Jesper’s illustrations. Creating a font and using it on the site, was a first-time. And the really makes the website shine of personality.</p>
      </div>

      <div class="clearfix"></div>

      <next-case currentCase="Gravisi" />
    </div>
  </Layout>
</template>



<script>
import nextCase from "../../components/nextCase.vue";

export default {
  components: { nextCase },
  metaInfo: {
    title: "Gravisi",
    meta: [
      {
        name: "description",
        content:
          "A hand drawn website for Gravisi. See how a websites helps run a small drawing consultant business."
      }
    ]
  }
};
</script>


<style scoped>
@import "../../assets/workcase.css";

.customfont {
  margin-bottom: 30px;
}

@media screen and (max-width: 771px) {
}
</style>

