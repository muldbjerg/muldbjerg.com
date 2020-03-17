<template>
  <div>
    <div class="carousel">
      <div class="carouselImage fade" v-for="image in this.images" :key="image">
        <g-image :src="getImagePath(image)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      interval: null
    };
  },
  props: ["images", "carouselInterval"],
  mounted() {
    var slideIndex = 1;

    this.interval = setInterval(function() {
      var slides = document.getElementsByClassName("carouselImage");

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slideIndex++;

      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = "block";
    }, this.carouselInterval);
  },
  destroyed() {
    clearInterval(this.interval);
  },
  methods: {
    getImagePath: function(pic) {
      try {
        return require("../assets/portfolio/" + pic);
      } catch (ex) {
        console.log(pic + " failed");
        return "";
      }
    }
  }
};
</script>

<style scoped>
.carouselImage {
  display: none;
  vertical-align: middle;
  margin-bottom: -10px;
}

.carouselImage:first-child {
  display: block;
}

.carouselImage img {
  -webkit-transition: all 1.4s var(--standard-easing);
  transition: all 1.4s var(--standard-easing);
}

.carouselImage:hover img {
  transform: scale(1.1);
}

.fade {
  animation-name: fade-image;
  animation-duration: 0.6s;
  animation-timing-function: var(--standard-easing);
}

@-webkit-keyframes fade-image {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-image {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
