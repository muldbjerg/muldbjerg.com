<template>
  <Layout>
    <main class="wrapper">
      <div class="infoText col-sm-6 col-sm-offset-2">
        <h1>Hey! I’m Steffen Østerby Muldbjerg, a designer-developer hybrid. I create and give power to great design on the internet.</h1>
        <p>I work at Cordura by bibliotheca. And currently writing my thesis in IT-Product development at Aarhus University. I have designed and coded websites and digital products for almost 10 years.</p>
        <p>I have worked with nice companies and organisations like → Coop, Knuthenborg Safaripark, Helnan Hotels, Securidan, Aarhus Youth Council & YMCA-Scouts Denmark.</p>
        <p>
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
          >Linkedin.</a>
        </p>
      </div>
      <div class="contactinfo col-sm-3 col-sm-offset-1">
        <p class="strong">Steffen Østerby Muldbjerg</p>
        <p>
          <a href="mailto:steffen@muldbjerg.com">steffen@muldbjerg.com</a>
          <br />+45 42 32 16 63
        </p>
        <p>CVR. 34 94 64 42</p>
      </div>

      <div class="col-12">
        <g-image
          class="profilePicture"
          src="../assets/img/steffen-frontend-developer-digital-designer.jpg"
          alt="Steffen Østerby Muldbjerg. Frontend developer & Digital designer. Aarhus"
        />
      </div>

      <div class="col-sm-10 col-sm-offset-1" style="padding: 100px 0 150px 0;">
        <sayHi />
      </div>
    </main>
  </Layout>
</template>

<script>
import SayHi from "../components/sayHi.vue";

export default {
  components: { SayHi },
  metaInfo: {
    title: "Info"
  }
};
</script>

<style scoped>
main {
  padding-top: 140px;
}

.infoText {
  font-size: 24px;
  line-height: 1.4;
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
</style>