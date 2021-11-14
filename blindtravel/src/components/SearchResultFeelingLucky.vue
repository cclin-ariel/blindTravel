<template>
  <div>
    <div class="container pt-4">
      <div class="fixed-top">
        <SearchBar />
      </div>
      <div class="result-title mx-auto text-center my-5 pt-5">
        <div class="city-title fs-3">
          <span class="text-bldGreen">{{ city }}</span> 的景點如何？
        </div>
        <!-- <div class="spot-num mt-2">總共 329 個景點</div> -->
      </div>
    </div>
    <ImageGallery :isLoading="isLoading" :updateCityImage="city" />
    <Footer />
  </div>
</template>
<script>
// import jsSHA from "jssha";
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
      isLoading: false,
      city: "",
      enCity: "",
      tempSpots: [],
      imageSpots: [],
      cityList: [
        {
          chinese: "臺北市",
          english: "Taipei",
        },
        {
          chinese: "新北市",
          english: "NewTaipei",
        },
        {
          chinese: "桃園市",
          english: "Taoyuan",
        },
        {
          chinese: "臺南市",
          english: "Tainan",
        },
        {
          chinese: "高雄市",
          english: "Kaohsiung",
        },
        {
          chinese: "基隆市",
          english: "Keelung",
        },
        {
          chinese: "新竹市",
          english: "Hsinchu",
        },
        {
          chinese: "新竹縣",
          english: "HsinchuCounty",
        },
        {
          chinese: "苗栗縣",
          english: "MiaoliCounty",
        },
        {
          chinese: "彰化縣",
          english: "ChanghuaCounty",
        },
        {
          chinese: "南投縣",
          english: "NantouCounty",
        },
        {
          chinese: "雲林縣",
          english: "YunlinCounty",
        },

        {
          chinese: "嘉義縣",
          english: "ChiayiCounty",
        },

        {
          chinese: "嘉義市",
          english: "Chiayi",
        },
        {
          chinese: "屏東縣",
          english: "PingtungCounty",
        },
        {
          chinese: "宜蘭縣",
          english: "YilanCounty",
        },
        {
          chinese: "花蓮縣",
          english: "HualienCounty",
        },
        {
          chinese: "臺東縣",
          english: "TaitungCounty",
        },
        {
          chinese: "金門縣",
          english: "KinmenCounty",
        },
        {
          chinese: "澎湖縣",
          english: "PenghuCounty",
        },
        {
          chinese: "連江縣",
          english: "LienchiangCounty",
        },
      ],
    };
  },
  mounted() {
    this.getSpotImage();
  },
  methods: {
    getSpotImage() {
      const vm = this;
      let arrIndex = Math.floor(Math.random() * vm.cityList.length);
      vm.city = vm.cityList[arrIndex].chinese;
    },
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
