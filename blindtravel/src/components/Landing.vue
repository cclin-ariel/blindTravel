<template>
  <div>
    <div class="d-flex" v-if="titleShowing">
      <div
        class="
          Landing-Page-First-Impression
          text-center text-bldGreen
          bg-white
          d-flex
          mx-auto
        "
      >
        <div class="align-self-center">
          <div class="Page-Title">盲選小旅行</div>
          <p class="Page-subtitle">你在裡面會更美</p>
        </div>
      </div>
    </div>
    <div v-if="!titleShowing">
      <div class="fixed-top">
        <SearchBar />
      </div>
      <ImageGallery :isLoading="isLoading" updateCityImage="none" />
    </div>
  </div>
</template>
<script>
import SearchBar from "./SearchBar.vue";
import ImageGallery from "./ImageGallery.vue";

export default {
  components: {
    SearchBar,
    ImageGallery,
  },
  data() {
    return {
      titleShowing: true,
      isLoading: true,
    };
  },
  methods: {
    showingFirstImpression() {
      const vm = this;
      window.setTimeout(() => (vm.titleShowing = false), 1500);
    },
  },
  mounted() {
    this.showingFirstImpression();
  },
};
</script>

<style scoped>
.Landing-Page-First-Impression {
  height: 100vh;
}

.Page-Title {
  font-family: "Noto Serif TC", serif;
  font-size: 2.5rem;
  letter-spacing: 11.2px;
}
.Page-subtitle {
  font-family: "Noto Serif TC", serif;
  font-size: 0.5rem;
  letter-spacing: 3.2px;
}

@media (min-width: 768px) {
  .Page-Title {
    font-size: 4.5rem;
  }
  .Page-subtitle {
    font-size: 1.5rem;
  }
}
</style>
