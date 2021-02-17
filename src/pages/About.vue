<template>
  <Layout>
    <main class="wrapper pageOffset">
      <div class="infoText col-sm-8 col-md-6 col-md-offset-1">
        <h1
          class="animated"
        >Hello, I'm Steffen - I develop digital products. Deep into all things users' experience. Researching, sketching flows, writing micro copy, designing and coding frontends.</h1>
        <p class="animated" style="transition-delay: 0.05s;">
          Working at  <a href="https://www.bibliotheca.com/" target="_blank" rel="noopener">bibliotheca</a>, helping libaries spark the joy of good books.  
        </p>
        <p class="animated" style="transition-delay: 0.1s;">
          Also, I gladely recommend the best coffee (etc.) in Aarhus.
        </p>
      </div>
      <div class="contactinfo animated col-sm-3 col-sm-offset-2" style="transition-delay: 0.3s;">
        <p class="strong">Steffen Østerby Muldbjerg</p>
        <p>
          <a href="mailto:steffen@muldbjerg.com">steffen@muldbjerg.com</a>
          <br />+45 42 32 16 63
        </p>
        <p>CVR. 34 94 64 42</p>
      </div>

      <div class="col-xs-12 imageRow">
        <div class="col-sm-4  col-xs-7 animated" style="transition-delay: 0.4s;">
          <img src="../assets/img/steffen-museum.jpg" alt="Steffen Muldbjerg at a art museum in France. I got an idea I needed to draw at once.">
        </div>
        <div class="col-sm-3 col-sm-offset-1 col-xs-4 col-xs-offset-1 animated" style="transition-delay: 0.45s;">
          <img src="../assets/img/Aarhus.jpg" alt="Steffen Muldbjerg at a art museum in France. I got an idea I needed to draw at once.">
        </div>
        <div class="col-sm-3 col-sm-offset-1 animated" style="transition-delay: 0.5s;">
          <img src="../assets/img/steffen-kamera.jpg" alt="Steffen Muldbjerg at a art museum in France. I got an idea I needed to draw at once.">
        </div>
      </div>

      <div id="career" class="col-xs-12 animated" style="transition-delay: 0.6s;">
        <div class="careerSubject col-xs-4 col-sm-2">
          Experience
        </div>
        <div class="col-xs-8 col-sm-3">
          <div class="careerItem">
            <p class="timespan">2016 - Present</p>
            <p class="title">Frontend Developer & Product Designer</p>
            <p class="place">bibliotheca</p>
          </div>
          <div class="careerItem">
            <p class="timespan">2016 - 2018</p>
            <p class="title">Teaching Assistant</p>
            <p class="place">Aarhus University</p>
          </div>
          <div class="careerItem">
            <p class="timespan">2014 - 2016</p>
            <p class="title">Digital Designer & Frontend Developer</p>
            <p class="place">Adhost</p>
          </div>
        </div>
        <div class="careerSubject education col-xs-4 col-sm-2 col-sm-offset-2">
          Education
        </div>
        <div class="education col-xs-8 col-sm-3">
          <div class="careerItem">
            <p class="timespan">2015 - 2020</p>
            <p class="title">Master of Science in IT Product Development</p>
            <p class="place">Aarhus University</p>
          </div>
          <div class="careerItem">
            <p class="timespan">2012 - 2014</p>
            <p class="title">Multi Media Designer</p>
            <p class="place">Business Academy Aarhus</p>
          </div>
        </div>
      </div>

      <div class="clearfix"></div>

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

.infoText h1 {
  font-size: 32px;
  margin-bottom: 25px;
  line-height: 1.5;
}

p {
  margin-bottom: 15px;
}

.infoText p{
  font-size: 32px;
  margin-bottom: 25px;
  line-height: 1.5;
}

.contactinfo {
  font-size: 14px;
  text-align: right;
  margin-top: 100px;
}

.imageRow{
  margin: 120px 0;
}

#career{
  padding-top: 60px;
}

.education{
  margin-top: 140px;
}

.careerSubject{
  font-size: 13px;;
}

.careerItem{
  margin-bottom: 40px;

  transition: all 0.4s ease-in;
}

.careerItem p{
  margin: 0px;
}

.careerItem .timespan{
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  color: var(--brand-secondary-dark);
}

.careerItem .title{
  font-weight: bold;
  transition: all 0.1s ease-out;
}

.careerItem .place{
  opacity: 0.7;
  transition: all 0.15s ease-out;
}

.careerItem:hover .title{
  transform: translateX(20px);
}

.careerItem:hover .place{
  transform: translateX(40px);
}

.sayHi {
  padding: 150px 0 200px 0;
}


@media screen and (max-width: 771px) {
  .infoText h1 {
    font-size: 22px;
    line-height: 1.5;
  }

  .infoText p{
    font-size: 22px;
    margin-bottom: 25px;
    line-height: 1.5;
  }

  .contactinfo{
    display: none;
  }

  .imageRow div{
    margin-bottom: 20px;
  }

  .imageRow{
    margin: 70px 0px 40px 0;
  }

  .education{
    margin-top: 60px;
    margin-bottom: 100px;
  }

  .careerItem:hover .title,
  .careerItem:hover .place{
  transform: translateX(0px);
}

  .sayHi {
    padding: 30px 0 0px 0;
  }
}
</style>