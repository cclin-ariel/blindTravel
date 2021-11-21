<template>
  <div>
    <div class="container">
      <div class="fixed-top">
        <CyclingSearchBar />
      </div>
      <div class="mt-5 pt-5 text-center title Noto-Sans">
        盲選小旅行幫選擇困難的你決定下一次旅行目的地📍
      </div>
      <div class="text-center city Noto-Serif fs-3 mb-4"><span class="text-bldGreen">{{ randomCity }}</span> 的自行車路線如何？</div>
      <RoutesGallery :CityFromLanding="randomCity" :updateCityList="cityList" />
    </div>
    <CyclingFooter />
  </div>
</template>
<script>
import CyclingSearchBar from "./CyclingSearchBar.vue";
import RoutesGallery from "./RoutesGallery.vue";
import CyclingFooter from "./CyclingFooter.vue";
export default {
  components: {
    CyclingSearchBar,
    RoutesGallery,
    CyclingFooter,
  },
  data() {
    return {
      randomCity: "",
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
          chinese: "臺中市",
          english: "Taichung",
        },
      ],
    };
  },
  created() {
    this.getRandomCity();
  },
  methods: {
    getRandomCity() {
      const vm = this;
      let arrIndex = Math.floor(Math.random() * vm.cityList.length);
      vm.randomCity = vm.cityList[arrIndex].chinese;
      // console.log('randomCity',vm.randomCity);
    },
  },
};
</script>
<style scoped>
.title {
  color: #343a40;
}

</style>
