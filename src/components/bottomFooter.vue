<template>
  <footer id="bottomFooter">
    <div class="wrapper">
      <div class="col-sm-4 col-md-3 footerWidget">
        <p>Stay updated</p>
        <ul>
          <li>
            <a href="https://dribbble.com/Muldbjerg" target="_blank" rel="noopener">
              <div class="footerLinkLine">
                <p></p>
              </div>Dribbble
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/muldbjerg/" target="_blank" rel="noopener">
              <div class="footerLinkLine">
                <p></p>
              </div>Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/steffen-%C3%B8sterby-muldbjerg-b7b67421/"
              target="_blank"
              rel="noopener"
            >
              <div class="footerLinkLine">
                <p></p>
              </div>LinkedIN
            </a>
          </li>
        </ul>
      </div>
      <div class="col-sm-4 footerWidget">
        <p>Contact info</p>
        <ul>
          <li>
            <a onclick="(function(e){e.preventDefault();})(event)">+45 42 32 16 63</a>
          </li>
          <li>
            <a href="mailto:steffen@muldbjerg.com">steffen@muldbjerg.com</a>
          </li>
        </ul>
      </div>
      <div class="col-sm-12" id="desigedIn">
        <router-link :to="'/credit/'">
          <!-- <img src="../assets/highfive.svg" alt> -->
          <div>
            Designed in
            <br />
            <img src="../assets/img/aarhus.png" alt="Frontend" loading="lazy" />
            <!-- Designed and handcraftet in
            <br />Aarhus, Denmark.-->
          </div>
        </router-link>
      </div>
    </div>
    <div class="clearfix"></div>
  </footer>
</template>

<script>
export default {
  name: "bottomFooter",
  components: {},
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bottomFooter {
  clear: both;
  width: 100%;
  background-color: var(--brand-secondary);
  padding: 60px 0 30px 0;
}

.footerWidget li {
  font-family: "DM Sans", -apple-system, "Avenir", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 1.8;
  letter-spacing: 1.5px;
  font-weight: bold;
}

.footerWidget a {
  text-decoration: none;
  background-color: transparent;
  float: left;
  color: var(--text-color);
}

.footerWidget p {
  text-transform: uppercase;
  font-family: "DM Sans", -apple-system, "Avenir", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  margin-bottom: 20px;
  font-size: 12px;
  letter-spacing: 1px;
}

.footerWidget ul li {
  clear: both;
}

.footerWidget ul li a .footerLinkLine {
  padding-top: 20px;
  float: left;
}

.footerWidget ul li a .footerLinkLine p {
  width: 0px;
  height: 2px;
  float: left;
  /* margin: 20px 0px 0 0; */
  background-color: var(--text-color);

  transition: all 0.2s var(--standard-easing);
}

.footerWidget ul li a:hover .footerLinkLine p {
  margin-right: 10px;
  width: 40px;
  transition: all 0.2s var(--standard-easing);
}

#desigedIn {
  clear: both;
  text-align: center;
  line-height: 1.3;
  margin-top: 30px;
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "DM Mono", monospace;
}

#desigedIn div {
  float: right;
}

#desigedIn img {
  width: 90px;
  margin-top: 3px;
  transition: all 0.2s var(--standard-easing);
}

#desigedIn a:hover{
  color: var(--text-color);
}

#desigedIn a:hover img {
  transform: scale(1.1) rotate(3deg);
}

#h5fyr {
  clear: both;
  text-align: right;
  /* text-transform: uppercase; */
  line-height: 1.3;
  margin-top: 30px;
  font-size: 12px;
}

#h5fyr div {
  float: right;
}

#h5fyr img {
  width: 20px;
  float: right;
  margin-left: 20px;
}

@media screen and (max-width: 771px) {
  .footerWidget {
    clear: both;
    margin-bottom: 80px;
  }

  .footerWidget p {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 550px) {
  .footerWidget li {
    font-size: 18px;
  }

  .footerWidget ul li a:hover .footerLinkLine p {
    width: 0px;
    margin: 0px;
  }
}
</style>
