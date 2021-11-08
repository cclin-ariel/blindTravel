<template>
  <div>
    <div class="container pt-4">
      <div class="fixed-top">
        <SearchBar />
      </div>
      <div class="result-title mx-auto text-center my-5 pt-5">
        <div v-if="isRandom" class="city-title fs-3">
          <span class="text-bldGreen">台北市</span> 的景點如何？
        </div>
        <div v-if="!isRandom" class="city-title fs-3">
          <span class="text-bldGreen">台北市</span> 的搜尋結果
        </div>
        <div class="spot-num mt-2">總共 329 個景點</div>
      </div>
    </div>
    <ImageGallery />
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
      isRandom: false,
    };
  },
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
