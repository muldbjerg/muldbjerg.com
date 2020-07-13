<template>
  <Layout>
    <div class="home">
      <main class="homePage wrapper">
        <div class="title" :class="title_in">
          <div class="title_line title_first_line animated">
            <h1>Frontend developer &</h1>
          </div>
          <div class="title_line title_second_line animated">
            <h1>product designer</h1>
          </div>
          <div class="title_line title_third_line animated">
            <h1>from Aarhus {{ this.randomEmoji() }}</h1>
          </div>
        </div>

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

// import "../assets/js/test.js";

export default {
  components: { homeCases, homeCompetencies, homeBlog },
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
      class: "index"
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
.title_line.animated h1 {
  font-size: 48px;
  line-height: 64px;
  margin: 0px;
  -webkit-transition: all 0.4s var(--standard-easing);
  transition: all 0.4s var(--standard-easing);
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
  .title_line.animated h1 {
    font-size: 32px;
    line-height: 40px;
  }
}
</style>
