<template>
  <!-- <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
          <g-link :to="node.path">{{node.title}}</g-link>
  </li>-->
  <div id="homeBlog">
    <div class="wrapper">
      <div class="col-sm-4 col-sm-offset-7" id="topBlogDescription">
        <h3>Hello Blog</h3>
        <p>On the blog I show my projects and experiments</p>
        <g-link to="/blog">Go check it out</g-link>
      </div>

      <overviewBlogPost
        class="col-sm-6"
        id="topBlogPost"
        v-if="$static.allWordPressPost.edges.length > 0"
        :content="$static.allWordPressPost.edges[0].node"
      />

      <overviewBlogPost
        class="col-sm-4 col-sm-offset-1"
        id="homeBlogPost2"
        v-if="$static.allWordPressPost.edges.length > 1"
        :content="$static.allWordPressPost.edges[1].node"
      />

      <overviewBlogPost
        class="col-sm-4 col-sm-offset-1"
        id="homeBlogPost3"
        v-if="$static.allWordPressPost.edges.length > 2"
        :content="$static.allWordPressPost.edges[2].node"
      />

      <div class="col-sm-7" id="readMore">
        <textButton text="Read more" url="blog" />
      </div>
    </div>
    <div class="theend"></div>
  </div>
</template>


<static-query>
query Home {
  allWordPressPost (perPage: 10) {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</static-query>

<script>
import overviewBlogPost from "../overviewBlogPost.vue";
import textButton from "../textButton.vue";

export default {
  name: "homeBlog",
  components: { overviewBlogPost, textButton },
  data: function() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homeBlog {
  clear: both;
  background-color: var(--brand-color-light);
  transform: translateY(1px);
  margin-top: 500px;
  padding-bottom: 150px;
}

#topBlogPost {
  margin-top: -300px;
}

#topBlogDescription {
  margin-top: -190px;
  margin-bottom: 100px;
}

#topBlogDescription p {
  margin-top: 30px;
  font-size: 18px;
  line-height: var(--standard-line-height);
}

#homeBlogPost2 {
  margin-top: 100px;
}

#homeBlogPost3 {
  margin-top: -100px;
}

#readMore {
  padding-top: 200px;
  text-align: right;
}

@media screen and (max-width: 771px) {
  #topBlogDescription {
    padding-top: 100px;
  }

  #topBlogPost {
    margin-top: 100px;
  }

  #readMore {
    padding-top: 100px;
    text-align: center;
  }

  #homeBlogPost3 {
    margin-top: 100px;
  }

  #homeBlog {
    margin-top: 300px;
    padding-bottom: 80px;
  }
}
</style>
