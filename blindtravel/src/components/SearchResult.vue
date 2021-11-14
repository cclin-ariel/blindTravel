<template>
  <div>
    <div class="container pt-4">
      <div class="fixed-top">
        <SearchBar />
      </div>
      <div class="result-title mx-auto text-center my-5 pt-5">
        <div class="city-title fs-3">
          <span class="text-bldGreen">{{ city }}</span> 的搜尋結果
        </div>
        <!-- <div class="spot-num mt-2">總共 329 個景點</div> -->
      </div>
    </div>
    <ImageGallery :updateCityImage="city" />
    <Footer />
  </div>
</template>
<script>
import SearchBar from "./SearchBar.vue";
import ImageGallery from "./ImageGallery.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    SearchBar,
    ImageGallery,
    Footer,
  },
  data() {
    return {
      city: "",
    };
  },
  created() {
    this.city = this.$route.params.city;
  },
  watch:{    $route(to, from) {
      if (to !== from) {
        location.reload();
      }
    },},
  methods: {},
};
</script>
<style scoped>
.result-title {
  font-family: "Noto Serif TC", serif;
  color: #343a40;
}
.city-title {
  letter-spacing: 3.2px;
}
.spot-num {
  line-height: 40px;
  letter-spacing: 0.8px;
}
</style>
