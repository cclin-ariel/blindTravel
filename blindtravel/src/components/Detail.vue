<template>
  <div>
    <div class="fixed-top">
      <SearchBar />
    </div>
    <div class="container detail-info">
      <img
        v-if="spot.Picture.PictureUrl1"
        :src="spot.Picture.PictureUrl1"
        class="img-fluid detail-img mt-5 pt-5"
        alt="spot-image"
      />
      <div class="mt-5">
        <div class="title text-center fs-1 Noto-Serif">{{ spot.Name }}</div>
        <hr class="mb-1" />
        <div class="container article-area">
          <div v-if="spot.Address" class="address text-center p-3 Noto-Serif">
            <span>
              <i class="fas fa-map-marker-alt"></i>
            </span>
            {{ spot.Address }}
          </div>
          <div v-if="spot.Description" class="leading Noto-Serif lh-lg">
            {{ spot.Description }}
          </div>
          <div
            v-if="spot.DescriptionDetail"
            class="article-info Noto-Sans my-4"
          >
            {{ spot.DescriptionDetail }}
          </div>
          <div class="leading pt-5 Noto-Serif">其他資訊</div>
          <hr />
          <div class="container Noto-Sans">
            <div v-if="spot.TravelInfo" class="row my-4">
              <div class="col-1 my-auto"><i class="fas fa-subway"></i></div>
              <div class="col-11 border-left">
                {{ spot.TravelInfo }}
              </div>
            </div>
            <div class="row my-4">
              <div v-if="spot.Phone" class="col-1 my-auto">
                <i class="fas fa-phone"></i>
              </div>
              <div class="col-11 border-left">
                <p class="my-auto">
                  <a :href="`${spot.Phone}`" class="text-decoration-none">{{
                    spot.Phone
                  }}</a>
                </p>
              </div>
            </div>
            <div v-if="spot.OpenTime" class="row my-4">
              <div class="col-1 my-auto"><i class="fas fa-clock"></i></div>
              <div class="col-11 border-left">{{ spot.OpenTime }}</div>
            </div>
            <div v-if="spot.TicketInfo" class="row my-4">
              <div class="col-1 my-auto dollar-sign">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div class="col-11 border-left">{{ spot.TicketInfo }}</div>
            </div>
            <div v-if="spot.Remarks" class="row my-4">
              <div class="col-1 my-auto">
                <i class="fas fa-info-circle"></i>
              </div>
              <div class="col-11 border-left">
                {{ spot.Remarks }}
              </div>
            </div>
          </div>
          <div class="leading mt-5 pt-3 Noto-Serif">同縣市其他景點</div>
          <hr />
        </div>
      </div>
      <div class="gallery">
        <ImageGallery :isLoading="isLoading" :updateCityImage="tempCity" />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import SearchBar from "./SearchBar.vue";
import ImageGallery from "./ImageGallery.vue";
import Footer from "./Footer.vue";
import jsSHA from "jssha";

export default {
  name: "Detail",
  components: {
    SearchBar,
    ImageGallery,
    Footer,
  },
  data() {
    return {
      isLoading: false,
      tempCity: "",
      spot: {
        Picture: {},
        City: "", //send to ImageGallery component
      },
      IDFromImgGallery: "",
    };
  },
  created() {
    this.IDFromImgGallery = this.$route.params.id;
    this.getdetailByID();
  },
  mounted() {},

  methods: {
    getdetailByID() {
      const vm = this;
      const axios = require("axios");
      const api = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=ID%20eq%20'${vm.IDFromImgGallery}'&$top=30&$format=JSON`;

      axios
        .get(api, {
          headers: this.getAuthorizationHeader(),
        })
        .then((response) => {
          [vm.spot] = response.data;
          vm.tempCity = vm.spot.City;
          // console.log(vm.tempCity);
          
          // console.log("getdetailByID", vm.spot);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.getAuthorizationHeader();
    },

    getAuthorizationHeader() {
      //  填入自己 ID、KEY 開始
      let AppID = "769b6e9f60594d2397e5ae2e24a5c5e3";
      let AppKey = "qM6fHVPRJkxJTxVkDwJL8ddKJ1A";
      //  填入自己 ID、KEY 結束
      let GMTString = new Date().toGMTString();
      let ShaObj = new jsSHA("SHA-1", "TEXT");
      ShaObj.setHMACKey(AppKey, "TEXT");
      ShaObj.update("x-date: " + GMTString);
      let HMAC = ShaObj.getHMAC("B64");
      let Authorization =
        'hmac username="' +
        AppID +
        '", algorithm="hmac-sha1", headers="x-date", signature="' +
        HMAC +
        '"';
      return { Authorization: Authorization, "X-Date": GMTString };
    },
  },
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
  .article-area {
    padding: 0 200px;
  }
  .detail-info {
    max-width: 1072px;
  }
}
</style>
