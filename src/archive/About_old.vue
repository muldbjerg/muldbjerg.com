<template>
  <Layout>
    <main class="wrapper pageOffset">
      <div class="infoText col-sm-8 col-md-6 col-md-offset-2">
        <h1
          class="animated"
        >Hey! I’m Steffen Østerby Muldbjerg, a designer-developer hybrid. I create and give power to great design on the internet.</h1>
        <p class="animated" style="transition-delay: 0.05s;">
          I work on creating digital products that
          <span class="strong">gives you superpowers</span>, instead of making you feel confused and wasting your time.
        </p>
        <p class="animated" style="transition-delay: 0.1s;">
          I work at
          <a
            href="http://cordura.dk/en"
            target="_blank"
            rel="noopener"
          >Cordura by bibliotheca</a> as a
          <span class="strong">Frontend Developer & Digital Designer</span>. Building and designing products for libraries and people who like good books.
        </p>
        <p class="animated" style="transition-delay: 0.15s;">
          Simultaneously I’m writing my thesis in
          <a
            href="https://kandidat.au.dk/en/itproductdevelopment/"
            target="_blank"
            rel="noopener"
          >IT-Product development</a> at Aarhus University.
        </p>
        <p
          class="animated"
          style="transition-delay: 0.2s;"
        >I have worked with nice companies and organisations like → Coop, Knuthenborg Safaripark, Helnan Hotels, Securidan, Aarhus Youth Council & YMCA-Scouts Denmark.</p>
        <p class="animated" style="transition-delay: 0.25s;">
          Say hi at
          <a href="mailto:steffen@muldbjerg.com">steffen@muldbjerg.com</a> or follow along at
          <a
            href="https://www.instagram.com/muldbjerg/"
            title="Muldbjerg at instagram"
            target="_blank"
            rel="noopener"
          >instagram</a>,
          <a
            href="https://dribbble.com/Muldbjerg"
            title="Muldbjerg at dribbble"
            target="_blank"
            rel="noopener"
          >dribbble</a> or
          <a
            href="https://www.linkedin.com/in/steffen-%C3%B8sterby-muldbjerg-b7b67421/"
            title="Muldbjerg at LinkedIn"
            target="_blank"
            rel="noopener"
          >linkedin.</a>
        </p>
      </div>
      <div class="contactinfo animated col-sm-3 col-sm-offset-1" style="transition-delay: 0.3s;">
        <p class="strong">Steffen Østerby Muldbjerg</p>
        <p>
          <a href="mailto:steffen@muldbjerg.com">steffen@muldbjerg.com</a>
          <br />+45 42 32 16 63
        </p>
        <p>CVR. 34 94 64 42</p>
      </div>

      <div class="col-12">
        <img
          class="profilePicture animated"
          style="transition-delay: 0.5s;"
          src="../assets/img/steffen-frontend-developer-digital-designer.jpg"
          alt="Steffen Østerby Muldbjerg. Frontend developer & Digital designer. Aarhus"
          loading="lazy"
        />
      </div>

      <div class="col-sm-10 col-sm-offset-1 sayHi">
        <sayHi />
      </div>
    </main>
  </Layout>
</template>

<script>
import SayHi from "../components/sayHi.vue";

export default {
  components: { SayHi },
  data: function () {
    return {
      loaded: "",
    };
  },
  metaInfo: {
    title: "Info",
    bodyAttrs: {
      class: "infoPage",
    },
    meta: [
      {
        name: "description",
        content:
          "Steffen Østerby Muldbjerg is a Aarhus based frontend developer and digital designer. Let me take good care of the people visting your website or using your digital product.",
      },
    ],
  },
};
</script>

<style>
.infoPage {
  background-color: var(--brand-secondary);
  background-size: 100px;
}
</style>

<style scoped>
.infoText {
  font-size: 24px;
  line-height: 1.6;
}

.pageOffset {
  padding-top: 50px;
}

h1 {
  font-size: 32px;
  margin-bottom: 25px;
}

p {
  margin-bottom: 15px;
}

.contactinfo {
  font-size: 14px;
  text-align: right;
  margin-top: 100px;
}

.profilePicture {
  margin: 60px 0;
}

.sayHi {
  padding: 100px 0 150px 0;
}

@media screen and (max-width: 771px) {
  .sayHi {
    padding: 30px 0 0px 0;
  }
}
</style>