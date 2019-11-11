<template>
  <div id="homeCases">
    <overviewCase
      v-for="(overviewCase, index) in portfolio"
      :key="overviewCase.date"
      :id="'case' + index"
      :content="overviewCase"
      :index="calcIndex(index)"
      class="col-sm-5 case"
    ></overviewCase>
    <div class="col-sm-6" id="readMore">
      <!-- <router-link to="/blog">See more projects</router-link> -->
      <textButton text="See more projects" url="work" />
    </div>
  </div>
</template>

<script>
import cases from "../../cases.json";
// import portfolioJson from "../portfolio-en.json";
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
    },
    giveCasesClasses: function() {
      var caseOffsets = ["offset-7", "", "offset-6", "offset-1", "offset-7"];
      for (var i = 1; i <= Object.keys(cases).length; i++) {
        document
          .getElementById("case" + i)
          .classList.add("col-sm-" + caseOffsets[i - 1]);
      }
    }
  },
  mounted() {
    this.giveCasesClasses();
  },
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

@media screen and (max-width: 900px) {
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
}

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
