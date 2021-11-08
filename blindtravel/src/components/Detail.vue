<template>
  <div>
    <div class="fixed-top">
      <SearchBar />
    </div>
    <div class="container detail-info">
      <img
        src="https://picsum.photos/700/400"
        class="img-fluid detail-img mt-5 pt-5"
        alt="spot-image"
      />
      <div class="article-area mt-5">
        <div class="title text-center fs-1 Noto-Serif">帆船鼻大草原</div>
        <hr />
        <div class="container">
          <div class="address text-center p-5 Noto-Serif">
            <span>
              <i class="fas fa-map-marker-alt"></i>
            </span>
            臺東縣951綠島鄉溫泉路167號
          </div>
          <div class="leading Noto-Serif">
            帆船鼻位於綠島東南角，有「綠島地毯」之稱，可由朝日溫泉售票口旁邊的小徑沿步道而上。由於地形突出，地勢又高出四周，屬東北季季風可長驅直入的衝風帶；再加上後天的放牧，遂形成低草原景觀。草原邊緣懸崖可以俯視朝日溫泉與海參坪，也是綠島居高臨下欣賞日出、月昇，沐浴海風的最佳景點之一，每年四、五月可觀賞到南十字星座丰采，每年春秋候更是賞鳥的極佳去處。
          </div>
          <div class="article-info Noto-Sans my-4">
            由朝日溫泉售票口旁邊的小徑走進去，沿步道而上，就來到有「綠島地毯」之稱的帆船鼻草原。帆船鼻位於綠島東南角，平坦的海岬台地上綠草如茵，與四周的藍天碧海，構成看不到綠意與藍色盡頭的極佳的景緻，草原邊緣懸崖可以俯視朝日溫泉與海參坪，也是綠島居高臨下欣賞日出、月昇，沐浴海風的最佳景點之一。從帆船鼻往北眺望，遠處海參坪一帶的海崖及嵯峨奇岩，矗立海岸；近處能夠居高臨下俯視朝日溫泉的溫泉池及新穎的建築設施；往西為白沙灣的大片珊瑚裙礁，天氣晴朗時，南方海天交接處可見到蘭嶼，也是綠島極佳的日出賞景點，美妙景致讓人留連忘返。
          </div>
          <div class="leading pt-5 Noto-Serif">其他資訊</div>
          <hr />
          <div class="container Noto-Sans">
            <div class="row my-4">
              <div class="col-1 my-auto"><i class="fas fa-subway"></i></div>
              <div class="col-11 border-left">
                南下：於花蓮火車站前搭乘花蓮客運，往豐濱、靜浦或台東方向班車，在富岡漁港站下車後步行至富岡漁港，轉乘渡船前往綠島。北上：自台東火車站前搭乘台灣好行東部海岸線或鼎東客運海線班車，在富岡漁港站下車後步行至富岡漁港，轉乘渡船前往綠島。綠島：島上設有環島公車，搭乘公車至朝日溫泉下車，沿朝日溫泉售票口旁邊的小徑走進去(查詢電話：089-672510)。
              </div>
            </div>
            <div class="row my-4">
              <div class="col-1 my-auto"><i class="fas fa-phone"></i></div>
              <div class="col-11 border-left">
                <p class="my-auto">
                  <a href="tel:+886-8-9672026" class="text-decoration-none"
                    >886-8-9672026</a
                  >
                </p>
              </div>
            </div>
            <div class="row my-4">
              <div class="col-1 my-auto"><i class="fas fa-clock"></i></div>
              <div class="col-11 border-left">全天候開放</div>
            </div>
            <div class="row my-4">
              <div class="col-1 my-auto dollar-sign">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div class="col-11 border-left">免費</div>
            </div>
            <div class="row my-4">
              <div class="col-1 my-auto">
                <i class="fas fa-info-circle"></i>
              </div>
              <div class="col-11 border-left">
                1、帆船鼻為凸出海岬，地勢極高且海風強勁，請注意不要靠懸崖太近，以策安全。2、愛護大自然生物，並請維護環境整潔。3、夏季日照與冬季寒風甚強，請預作防範。
              </div>
            </div>
          </div>
          <div class="leading mt-5 pt-3 Noto-Serif">同縣市其他景點</div>
          <hr />
        </div>
      </div>
      <div class="gallery">
        <ImageGallery />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import SearchBar from "./SearchBar.vue";
import ImageGallery from "./ImageGallery.vue";
import Footer from "./Footer.vue";

export default {
  name: "Detail",
  components: {
    SearchBar,
    ImageGallery,
    Footer,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
.detail-img {
  width: 100%;
  /* max-height: 641px; */
}
.gallery {
  padding: 0 12px;
}
.border-left {
  border-left: 0.5px solid #343a40;
}

.article-info {
  font-size: 14px;
  color: #343a40;
}
.row.my-4 > .col-1.my-auto.dollar-sign {
  padding-left: 3px;
}
.row.my-4 > .col-1.my-auto {
  padding-left: 0;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
  .detail-info {
    max-width: 1072px;
  }
}
</style>
