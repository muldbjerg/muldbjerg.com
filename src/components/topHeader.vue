<template>
  <header>
    <div class="header wrapper">
      <div id="logo">
        <h2>
          <router-link to="/">Steffen Muldbjerg</router-link>
        </h2>
      </div>
      <div id="navigation">
        <ul>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/work">Work</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="headerArea"></div>
  </header>
</template>

<script>
export default {
  name: "topHeader",
  components: {},
  data: function() {
    return {
      currentPage: ""
    };
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  left: 0;
  right: 0;
  z-index: 99999;
}

#logo h2 {
  font-size: 14px;
  text-transform: capitalize;
  margin-top: 7px;
  letter-spacing: 1px;
  color: var(--text-color);
}

#logo h2 a {
  color: var(--text-color);
  text-decoration: none;
  background-color: transparent;
}

#logo h2 a:hover {
}

#navigation ul {
  display: inline;
  text-align: right;
  list-style: none;
}

#navigation ul li {
  float: right;
  cursor: pointer;
}

#navigation ul li a {
  position: relative;
  padding: 15px;
  color: var(--text-color);
  font-size: var(--standard-text-size);
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  transition: color 0.2s var(--standard-easing);
}

#navigation ul li a:hover{
  color: var(--brand-color);
}

#navigation ul li a.router-link-active::after {
  content: "";
  display: inline-block;
  position: absolute;
  margin: 0 auto;
  width: 6px;
  height: 6px;
  background: var(--brand-color);
  border-radius: 5px;

  position: absolute;
  bottom: 3px;
  left: calc(50% - 3px);
}

@media screen and (max-width: 771px) {
  #navigation ul li a {
    font-size: 16px;
    padding: 15px 10px;
  }
}

/* Fixes weird letter-spacing in Safari & Firefox */
@media not all and (min-resolution:.001dpcm) { 
  @media { 
    #logo h2 { 
      letter-spacing: 0px;
    } 
  }
}

@supports (-moz-appearance:none) and (text-align-last:auto) { 
  #logo h2 { 
    letter-spacing: 0px;
  } 
}
</style>
