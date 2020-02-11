<template>
  <Layout>
    <main class="wrapper pageOffset">
      <h1>404</h1>

      <div class="col-sm-10 col-sm-offset-1" style="padding: 100px 0 150px 0;">
        <sayHi />
      </div>
    </main>
  </Layout>
</template>

<script>
import SayHi from "../components/sayHi.vue";

export default {
  components: { SayHi },
  metaInfo: {
    title: "Site not found"
  }
};
</script>

<style scoped>
.infoText {
  font-size: 24px;
  line-height: 1.4;
}

.pageOffset {
  padding-top: 50px;
}

h1 {
  font-size: 32px;
  margin-bottom: 25px;
}

p {
  margin-bottom: 15px;
}

.contactinfo {
  font-size: 14px;
  text-align: right;
  margin-top: 100px;
}

.profilePicture {
  margin: 60px 0;
}
</style>