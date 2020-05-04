<template>
  <Layout>
    <main class="wrapper pageOffset">
      <div class="col-sm-6">
        <h1 class="animated">
          This website is built with awesome tools and resources
          <span>🤟</span>
        </h1>
        <p
          class="animated"
          style="transition-delay:0.1s"
        >And websites should come with end credits, so here is mine:</p>
      </div>
      <div class="rollCredits col-sm-8 col-sm-offset-2 animated" style="transition-delay:0.3s">
        <div class="creditRowTitle">
          <h5>Fonts</h5>
        </div>
        <div class="creditRow">
          <div class="col-sm-4 label">Headline font</div>
          <div class="col-sm-8 credit">
            Hans Kendrick (by
            <a href="https://hanken.co" target="_blank" rel="noopener">hanken.co</a>)
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="creditRow">
          <div class="col-sm-4 label">Content font</div>
          <div class="col-sm-8 credit">
            Work Sans (by
            <a
              href="https://weiweihuanghuang.github.io/"
              target="_blank"
              rel="noopener"
            >Wei Huang</a>)
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="creditRow">
          <div class="col-sm-4 label">Detail font</div>
          <div class="col-sm-8 credit">
            Inconsolata (by
            <a href="https://levien.com/" target="_blank" rel="noopener">Raph Levien</a>)
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="creditRowTitle">
          <h5>Frontend tools</h5>
        </div>
        <div class="creditRow">
          <div class="col-sm-4 label">Framework</div>
          <div class="col-sm-8 credit">
            <a href="https://vuejs.org/" target="_blank" rel="noopener">VueJs</a> made even faster by
            <a
              href="https://gridsome.org/"
              target="_blank"
              rel="noopener"
            >Gridsome</a>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="creditRow">
          <div class="col-sm-4 label">Coded in</div>
          <div class="col-sm-8 credit">
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener"
            >Visual Studio Code</a>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="creditRow">
          <div class="col-sm-4 label">Blog CMS</div>
          <div class="col-sm-8 credit">
            Headless
            <a href="https://wordpress.org/" target="_blank" rel="noopener">Wordpress</a>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="creditRow">
          <div class="col-sm-4 label">Keeping track of time</div>
          <div class="col-sm-8 credit">
            <a href="https://momentjs.com/" target="_blank" rel="noopener">Moment.js</a> ⌚
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="creditRowTitle">
          <h5>Design tools</h5>
        </div>
        <div class="creditRow">
          <div class="col-sm-4 label">Designed in</div>
          <div class="col-sm-8 credit">
            <a href="https://www.sketch.com/" target="_blank" rel="noopener">Sketch</a>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="creditRow">
          <div class="col-sm-4 label">Illustrations</div>
          <div class="col-sm-8 credit">
            <a
              href="https://www.adobe.com/products/illustrator.html"
              target="_blank"
              rel="noopener"
            >Adobe Illustrator</a>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="clearfix"></div>
    </main>
  </Layout>
</template>

<script>
export default {
  components: {},
  metaInfo: {
    title: "Website end credits",
    meta: [
      {
        name: "description",
        content:
          "Muldbjerg.com are made with top notch tools. Here is the end credits for it."
      }
    ]
  }
};
</script>

<style scoped>
.pageOffset {
  padding-top: 50px;
}

h1 {
  line-height: 1;
  margin-bottom: 20px;
}

h1 span {
  display: inline-block;
  animation: rockOn 4s infinite;
  animation-timing-function: var(--standard-easing);
}

.rollCredits {
  margin-top: 40px;
}

.creditRow {
  margin: 20px 0;
}

.creditRowTitle {
  margin: 60px 0 20px 0;
}

.label {
  font-size: 12px;
  letter-spacing: 0.3px;
  font-weight: bold;
  text-transform: uppercase;
}

.credit {
  font-family: "HansKendrick_regular", -apple-system, "Avenir", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  line-height: 1.2;
  font-size: 24px;
}

@-webkit-keyframes rockOn {
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(0deg);
  }
  35% {
    transform: rotate(-23deg);
  }
  40% {
    transform: rotate(0deg);
  }
  45% {
    transform: rotate(-23deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@-moz-keyframes rockOn {
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(0deg);
  }
  35% {
    transform: rotate(-23deg);
  }
  40% {
    transform: rotate(0deg);
  }
  45% {
    transform: rotate(-23deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@-o-keyframes rockOn {
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(0deg);
  }
  35% {
    transform: rotate(-23deg);
  }
  40% {
    transform: rotate(0deg);
  }
  45% {
    transform: rotate(-23deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes rockOn {
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(0deg);
  }
  35% {
    transform: rotate(-23deg);
  }
  40% {
    transform: rotate(0deg);
  }
  45% {
    transform: rotate(-23deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>