<template>
  <Layout>
    <div class="home">
      <main class="homePage wrapper">
        <div class="title col-sm-10" :class="title_in">
          
          <div class="title_line title_first_line animated">
            <fitText factor="1.8">
              <h1>Product designer & creative</h1>
            </fitText>
            <!-- <h1>Digital Product Developer</h1> -->
          </div>
          <div class="title_line title_second_line animated">
             <fitText factor="1.8">
              <h1>frontend developer from</h1>
            </fitText>
          </div>
          <div class="title_line title_third_line animated">
             <fitText factor="1.8">
              <h1>Aarhus {{ this.randomEmoji() }}</h1>
            </fitText>
          </div>

          <div class="title_mobile ">
            <h1 class="animated">Product designer & creative frontend developer from Aarhus {{ this.randomEmoji() }}</h1>
          </div>
        </div>

        <div class="clearfix"></div>

        <homeCases />

        <homeCompetencies />

        <div class="theend"></div>
      </main>

      <homeBlog />
    </div>
  </Layout>
</template>

<script>
import homeCases from "../components/home/homeCases";
import homeCompetencies from "../components/home/homeCompetencies";
import homeBlog from "../components/home/homeBlog";

import fitText from "../atoms/fitText.vue";

// import "../assets/js/test.js";

export default {
  components: { homeCases, homeCompetencies, homeBlog, fitText },
  data: function() {
    return {
      loaded: "",
      title_in: "",
      first: true
    };
  },
  methods: {
    randomEmoji: function(event) {
      var emojis = ["🌈", "🚀", "🚲", "🍓", "🦁", "🦸‍♂️"];
      return emojis[Math.floor(Math.random() * emojis.length)];
    }
  },
  metaInfo: {
    title:
      "Steffen Muldbjerg - Frontend developer & Digital Designer from Aarhus",
    bodyAttrs: {
      class: "index frontpage"
    },
    meta: [
      {
        name: "description",
        content:
          "Hallo, I'm Steffen Østerby Muldbjerg. A Aarhus based frontend developer and digital designer. Find previous cases I have made, and follow projects and experiments on my blog."
      }
    ]
  }
};
</script>

<style>
.frontpage{
  background-image:url('../assets/img/color_header.jpg');
  background-position: top center;
  background-repeat: no-repeat;
  /* background-size: ; */
}

.home-links a {
  margin-right: 1rem;
}

.home {
  padding-top: 80px;
}

.homeCompetencies {
  clear: both;
}
</style>

<style scoped>
.title{
  margin-bottom: 30px;
}

.title_mobile{
  display: none;
}

.title_line.animated h1 {
  font-size: 32x;
  font-size: inherit;
  line-height: 120%;
  margin: 0px;
  -webkit-transition: transform 0.4s var(--standard-easing);
  transition: transform 0.4s var(--standard-easing);
  -webkit-transform: translate3d(0, 0%, 0);
  transform: translate3d(0, 0%, 0);
}


.fade-enter .title_line.animated h1,
.fade-leave-active .title_line.animated h1 {
  opacity: 0;
  -webkit-transform: translate3d(0, 200%, 0);
  transform: translate3d(0, 200%, 0);
}

.title_line.animated {
  overflow: hidden;
}

.title_line.animated.title_second_line h1 {
  transition-delay: 0.2s;
}

.title_line.animated.title_third_line h1 {
  transition-delay: 0.35s;
}

.title_line.animated.title_firth_line h1 {
  transition-delay: 0.5s;
}


@media screen and (max-width: 771px) {
  .title{
    margin-top: 0px;
  }

  .title_mobile{
    display: inline;
  }

  .title_mobile h1{
    line-height: 110%;
  }
  
  .title_line.animated h1 {
    display: none;
    font-size: inherit;
    line-height: 140%;
  }
}
</style>
