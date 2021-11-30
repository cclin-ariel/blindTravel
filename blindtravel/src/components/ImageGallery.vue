<template>
  <div>
    <div>
      <div class="grid-area">
        <router-link
          v-for="spot in imageSpots"
          :key="spot.ID"
          class="photo photo-container"
          :to="`/detail/${spot.ID}`"
        >
          <div class="shadow title Noto-Serif">
            <p>{{ spot.Name }}</p>
            <p>{{ spot.City }}</p>
          </div>
          <img
            class="pic"
            :src="spot.Picture.PictureUrl1"
            alt="spot.Picture.PictureDescription1"
          />
        </router-link>
      </div>
    </div>
    <div :class="{ hidden: !isLoading }" class="d-flex justify-content-center">
      <div class="spinner-border text-secondary m-5" role="status">
        <span class=""></span>
      </div>
    </div>
  </div>
</template>
<script>
import jsSHA from "jssha";
export default {
  name: "ImageGallery",
  props: ["isLoading", "updateCityImage"],

  data() {
    return {
      tempSpots: [],
      imageSpots: [], // v-for
      tempID: "",
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
      enCity: "",
    };
  },
  watch: {
    updateCityImage() {
      this.getSpotImage();
    },
  },
  mounted() {
    if (this.updateCityImage) {
      this.getSpotImage();
    }
  },
  methods: {
    getSpotImage() {
      const vm = this;
      const axios = require("axios");
      //get random image
      if (vm.updateCityImage === "none") {
        // console.log("updateCityImage", vm.updateCityImage);

        const allSpotsApi =
          "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=200&$format=JSON";
        axios
          .get(allSpotsApi, {
            headers: vm.getAuthorizationHeader(),
          })
          .then((response) => {
            // get the radom list
            vm.tempSpots = vm.getRandomSpotsArr(response.data, 1000);
            // filter
            vm.tempSpots.forEach((spot) => {
              if (spot.Picture.PictureUrl1) {
                vm.imageSpots.push(spot);
              }
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      //get city image
      else if (this.updateCityImage !== "none") {
        // console.log("updateCityImage", this.updateCityImage);

        this.enCity = this.cityTranslateing(this.updateCityImage);
        const citySpotsApi = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${vm.enCity}?$top=60&$format=JSON`;
        axios
          .get(citySpotsApi, {
            headers: vm.getAuthorizationHeader(),
          })
          .then((response) => {
            // console.log(response.data);

            vm.tempSpots = response.data;
            vm.tempSpots.forEach((spot) => {
              if (spot.Picture.PictureUrl1) {
                vm.imageSpots.push(spot);
              }
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      this.getAuthorizationHeader();
    },
    cityTranslateing(chCity) {
      // const vm = this;
      const result = this.cityList.filter((city) => city.chinese === chCity)[0];
      // console.log("cityTranslateing", result.english);

      if (result.english) {
        return result.english;
      } else {
        return false;
      }
    },
    getRandomSpotsArr(arr, num) {
      //新建一個陣列,將傳入的陣列複製過來,用於運算,而不要直接操作傳入的陣列;
      let temp_array = [];
      for (let index in arr) {
        temp_array.push(arr[index]);
      }
      //取出的數值項,儲存在此陣列
      let return_array = [];
      for (let i = 0; i < num; i++) {
        //判斷如果陣列還有可以取出的元素,以防下標越界
        if (temp_array.length > 0) {
          //在陣列中產生一個隨機索引
          let arrIndex = Math.floor(Math.random() * temp_array.length);
          //將此隨機索引的對應的陣列元素值複製出來
          return_array[i] = temp_array[arrIndex];
          //然後刪掉此索引的陣列元素,這時候temp_array變為新的陣列
          temp_array.splice(arrIndex, 1);
        } else {
          //陣列中資料項取完後,退出迴圈,比如陣列本來只有10項,但要求取出20項.
          break;
        }
      }
      return return_array;
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
.grid-area {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3px;
  margin-top: 65px;
}

.col-md-2 {
  padding: 0;
}
.photo:hover > .title {
  display: block;
}
.photo:hover > img {
  filter: blur(2px) grayscale(90%);
  transition: 0.3s;
  object-fit: cover;
}
.photo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo > img {
  object-fit: cover;
  max-height: 241px;
  height: 100%;
  width: 100%;
}

.title {
  display: none;
  position: absolute;
  top: 30%;
  color: rgb(247, 240, 230);
  z-index: 99;
}

.title p:first-child {
  font-size: 1.2em;
  letter-spacing: 3.2px;
  text-align: center;
}
.title p:last-child {
  font-size: 0.1em;
  letter-spacing: 1.6px;
  text-align: center;
  margin: 0;
}
.photo-container {
  width: 100%;
  height: 0;
  padding: 0;
  padding-bottom: 45%;
  margin: 0;
}
.pic {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 5px;
}
@media (max-width: 576px) {
  .grid-area {
    grid-template-columns: 1fr;
    grid-gap: 2px;
    margin-top: 65px;
  }
  .title {
    top: 30%;
  }
  .title p:first-child {
    font-size: 1.8em;
    letter-spacing: 3.2px;
    text-align: center;
  }
  .title p:last-child {
    font-size: 0.8em;
  }
}
@media (min-width: 1024px) {
  .grid-area {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 3px;
    margin-top: 90px;
  }
  .title p:first-child {
    font-size: 1.1em;
    letter-spacing: 3.2px;
    text-align: center;
  }
  .title p:last-child {
    font-size: 0.8em;
    letter-spacing: 1.6px;
    text-align: center;
  }
}
</style>
