<template>
  <div id="homeCases">
    <div class="cases" v-for="(overviewCase, index) in portfolio" :key="overviewCase.date">
      <overviewCase
        :id="'case' + index"
        :content="overviewCase"
        :index="index"
        class="col-sm-5 case"
        v-if="index <= 4"
      ></overviewCase>
    </div>

    <div class="clearfix"></div>
    <div class="col-sm-4 col-sm-offset-1" id="readMore">
      <textButton text="See all projects" url="work" />
    </div>
  </div>
</template>

<script>
import cases from "../../cases.json";
import overviewCase from "../overviewCase.vue";
import textButton from "../../atoms/textButton.vue";

export default {
  name: "homeCases",
  components: { overviewCase, textButton },
  data: function() {
    return {
      portfolio: cases
    };
  },
  methods: {
    calcIndex(val) {
      if (val < 10) {
        val = "0" + val;
      }
      return val;
    }
  },
  mounted() {},
  watch: {
    portfolio: function(val) {
      this.giveCasesClasses();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homeCases {
  clear: both;
  padding-top: 50px;
}

.case a {
  text-decoration: none;
}

#case2 {
  margin-top: -200px;
}

#case3 {
  margin-top: -50px;
}

#case4 {
  margin-top: 60px;
}

#case5 {
  margin-top: -200px;
}

#readMore {
  text-align: right;
  margin-top: -100px;
}

[data-aos="aos-case"] {
  /* transform: matrix(0.9, 0.02, -0.02, 0.9, 0, 100); */
  transform: matrix(0.8, 0.1, -0.02, 0.9, 0, 100);
  transition: all 0s ease;
}

[data-aos="aos-case"].aos-animate {
  transform: matrix(1, 0, 0, 1, 0, 0);
  opacity: 1;
}

/* @media screen and (max-width: 768px) {
  #case1 {
    margin-top: -200px;
  }

  #case2 {
    margin-top: 20px;
  }

  #case3 {
    margin-top: 30px;
  }

  #case4 {
    margin-top: -200px;
  }

  #readMore {
    margin-top: -50px;
  }
} */

@media screen and (max-width: 771px) {
  .case a {
    text-decoration: none;
  }

  #case0,
  #case1,
  #case2,
  #case3,
  #case4 {
    margin-top: 60px;
  }

  #readMore {
    text-align: center;
    margin-top: 60px;
  }
}
</style>
