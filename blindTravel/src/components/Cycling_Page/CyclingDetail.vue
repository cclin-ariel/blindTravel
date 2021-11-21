<template>
  <div>
    <CyclingSearchBar />
    <RouteDetailGallery :RouteFromDetail="RouteDeatail" />
    <div
      class="
        col-md-4 col-sm-12
        card
        m-2
        shadow
        routeCard
        Noto-Serif
        mx-auto
        text-center
        justify-self-center
      "
      @click="toDetail(this.route.City, this.route.RouteName)"
    >
      <p class="title py-1 mt-2 text-bldGreen text-center fw-light fs-5">
        {{ this.route.City }} {{ this.route.RouteName }}
      </p>
      <div>
        <span class="pe-2">
          <svg
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect width="11" height="16" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_13_17"
                  transform="translate(-0.00909091) scale(0.0484848 0.0333333)"
                />
              </pattern>
              <image
                id="image0_13_17"
                width="21"
                height="30"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAYAAADD0FVVAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFaADAAQAAAABAAAAHgAAAAB/yyMfAAABbElEQVRIDa2U4VXDIBSFW/vHnxmBEeIEZYS4QTawG+gIGYER4gTNBtYJygZmg3ovDT1YeQTEd86Vx+O+L0A5bjdydFjaQy2kIcYMnaAJel9yDOtB2Bm6ZOgIDz+ajAGrObDQ84WeXqIaLITm0vwXmEcuhcT8ChwXDf7yCDFTae14RV7vo7Q55VcPIPPoqeDTeYK20DP0CaXC8Swc0pfHSDevK9Vj2CMBWW9piMQBNalv4vFTcRIWpbqzE5q6o06AaqHOsvvggEQ6ygfWGjqDaJGnnmBPbwdJUNbP0Au0h16hFJD+2yZmTFio1QjGxv9QhpN/CAf1HIWkdpfWw8LRYFIDPoQwn6sKqPWQ2GhQ/Mtu+xjM1xSS0pdgfbMfdz5ZRgIfIb3Mcwb+57I5RppyruHHE1oD6wwoT9Wsge7XhxVwd9+QM+cuLBS7hjEHIHl0BDqjxg9WxRu6w93qKlrQPCEneAhq1SmPO+ZSvgFxhzi43TtKWAAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
          {{ this.route.Town }}
        </span>
        <span class="ps-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.33333 5.40667C3.73999 5.40667 3.25999 4.92667 3.25999 4.33334C3.25999 4.04867 3.37308 3.77566 3.57437 3.57437C3.77566 3.37309 4.04866 3.26 4.33333 3.26C4.92666 3.26 5.40666 3.74 5.40666 4.33334C5.40666 4.618 5.29358 4.89101 5.09229 5.0923C4.891 5.29359 4.61799 5.40667 4.33333 5.40667V5.40667ZM4.33333 1.33334C2.66666 1.33334 1.33333 2.66667 1.33333 4.33334C1.33333 6.58 4.33333 9.90667 4.33333 9.90667C4.33333 9.90667 7.33333 6.58 7.33333 4.33334C7.33333 2.66667 6 1.33334 4.33333 1.33334ZM11.6667 5.40667C11.382 5.40667 11.109 5.29359 10.9077 5.0923C10.7064 4.89101 10.5933 4.618 10.5933 4.33334C10.5933 4.19238 10.6211 4.05281 10.675 3.92259C10.729 3.79237 10.808 3.67404 10.9077 3.57437C11.0074 3.47471 11.1257 3.39564 11.2559 3.3417C11.3861 3.28776 11.5257 3.26 11.6667 3.26C11.8076 3.26 11.9472 3.28776 12.0774 3.3417C12.2076 3.39564 12.326 3.47471 12.4256 3.57437C12.5253 3.67404 12.6044 3.79237 12.6583 3.92259C12.7122 4.05281 12.74 4.19238 12.74 4.33334C12.74 4.618 12.6269 4.89101 12.4256 5.0923C12.2243 5.29359 11.9513 5.40667 11.6667 5.40667ZM11.6667 1.33334C10 1.33334 8.66666 2.66667 8.66666 4.33334C8.66666 6.58 11.6667 9.90667 11.6667 9.90667C11.6667 9.90667 14.6667 6.58 14.6667 4.33334C14.6667 2.66667 13.3333 1.33334 11.6667 1.33334V1.33334ZM11.6667 10.6667C10.82 10.6667 10.0667 11.2 9.78666 12H6.21333C6.03668 11.501 5.66944 11.0925 5.19208 10.8638C4.71473 10.6351 4.16619 10.605 3.66666 10.78C3.41838 10.867 3.18968 11.0021 2.99364 11.1775C2.7976 11.3529 2.63806 11.5653 2.52413 11.8024C2.41021 12.0396 2.34414 12.2968 2.3297 12.5595C2.31527 12.8222 2.35275 13.0851 2.44 13.3333C2.61904 13.8336 2.98876 14.2427 3.4684 14.4713C3.94805 14.6998 4.49866 14.7294 5 14.5533C5.56666 14.3533 5.99999 13.9 6.21333 13.3333H9.79333C10.16 14.3733 11.3067 14.92 12.3333 14.5533C12.5824 14.4672 12.8119 14.3328 13.0088 14.1577C13.2057 13.9826 13.3661 13.7703 13.4807 13.533C13.5953 13.2957 13.6619 13.0382 13.6767 12.7751C13.6914 12.512 13.654 12.2486 13.5667 12C13.28 11.2 12.52 10.6667 11.6667 10.6667ZM11.6667 13.6667C11.4014 13.6667 11.1471 13.5613 10.9596 13.3738C10.772 13.1862 10.6667 12.9319 10.6667 12.6667C10.6667 12.4015 10.772 12.1471 10.9596 11.9596C11.1471 11.772 11.4014 11.6667 11.6667 11.6667C11.9319 11.6667 12.1862 11.772 12.3738 11.9596C12.5613 12.1471 12.6667 12.4015 12.6667 12.6667C12.6667 12.9319 12.5613 13.1862 12.3738 13.3738C12.1862 13.5613 11.9319 13.6667 11.6667 13.6667Z"
              fill="black"
            />
          </svg>
          {{ this.route.CyclingLength / 1000 }} km
        </span>
      </div>
      <!-- start of map -->
      <div class="map my-4">
        <!-- <GoogleMap
              ref="mapRef"
              api-key="AIzaSyCd-AjuswdlIANt6_dua-zgVMf1jU1kf78"
              style="width: 100%; height: 200px"
              :center="this.center"
              :zoom="3"
            >
              <Polyline :options="this.path" />
            </GoogleMap> -->
      </div>
      <!-- end of map -->
      <p>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.33333 5.40667C3.73999 5.40667 3.25999 4.92667 3.25999 4.33334C3.25999 4.04867 3.37308 3.77566 3.57437 3.57437C3.77566 3.37309 4.04866 3.26 4.33333 3.26C4.92666 3.26 5.40666 3.74 5.40666 4.33334C5.40666 4.618 5.29358 4.89101 5.09229 5.0923C4.891 5.29359 4.61799 5.40667 4.33333 5.40667V5.40667ZM4.33333 1.33334C2.66666 1.33334 1.33333 2.66667 1.33333 4.33334C1.33333 6.58 4.33333 9.90667 4.33333 9.90667C4.33333 9.90667 7.33333 6.58 7.33333 4.33334C7.33333 2.66667 6 1.33334 4.33333 1.33334ZM11.6667 5.40667C11.382 5.40667 11.109 5.29359 10.9077 5.0923C10.7064 4.89101 10.5933 4.618 10.5933 4.33334C10.5933 4.19238 10.6211 4.05281 10.675 3.92259C10.729 3.79237 10.808 3.67404 10.9077 3.57437C11.0074 3.47471 11.1257 3.39564 11.2559 3.3417C11.3861 3.28776 11.5257 3.26 11.6667 3.26C11.8076 3.26 11.9472 3.28776 12.0774 3.3417C12.2076 3.39564 12.326 3.47471 12.4256 3.57437C12.5253 3.67404 12.6044 3.79237 12.6583 3.92259C12.7122 4.05281 12.74 4.19238 12.74 4.33334C12.74 4.618 12.6269 4.89101 12.4256 5.0923C12.2243 5.29359 11.9513 5.40667 11.6667 5.40667ZM11.6667 1.33334C10 1.33334 8.66666 2.66667 8.66666 4.33334C8.66666 6.58 11.6667 9.90667 11.6667 9.90667C11.6667 9.90667 14.6667 6.58 14.6667 4.33334C14.6667 2.66667 13.3333 1.33334 11.6667 1.33334V1.33334ZM11.6667 10.6667C10.82 10.6667 10.0667 11.2 9.78666 12H6.21333C6.03668 11.501 5.66944 11.0925 5.19208 10.8638C4.71473 10.6351 4.16619 10.605 3.66666 10.78C3.41838 10.867 3.18968 11.0021 2.99364 11.1775C2.7976 11.3529 2.63806 11.5653 2.52413 11.8024C2.41021 12.0396 2.34414 12.2968 2.3297 12.5595C2.31527 12.8222 2.35275 13.0851 2.44 13.3333C2.61904 13.8336 2.98876 14.2427 3.4684 14.4713C3.94805 14.6998 4.49866 14.7294 5 14.5533C5.56666 14.3533 5.99999 13.9 6.21333 13.3333H9.79333C10.16 14.3733 11.3067 14.92 12.3333 14.5533C12.5824 14.4672 12.8119 14.3328 13.0088 14.1577C13.2057 13.9826 13.3661 13.7703 13.4807 13.533C13.5953 13.2957 13.6619 13.0382 13.6767 12.7751C13.6914 12.512 13.654 12.2486 13.5667 12C13.28 11.2 12.52 10.6667 11.6667 10.6667ZM11.6667 13.6667C11.4014 13.6667 11.1471 13.5613 10.9596 13.3738C10.772 13.1862 10.6667 12.9319 10.6667 12.6667C10.6667 12.4015 10.772 12.1471 10.9596 11.9596C11.1471 11.772 11.4014 11.6667 11.6667 11.6667C11.9319 11.6667 12.1862 11.772 12.3738 11.9596C12.5613 12.1471 12.6667 12.4015 12.6667 12.6667C12.6667 12.9319 12.5613 13.1862 12.3738 13.3738C12.1862 13.5613 11.9319 13.6667 11.6667 13.6667Z"
            fill="black"
          />
        </svg>
        {{ this.route.RoadSectionStart }}
      </p>
      <div class="direction">
        <div v-if="!oneway" class="mb-4">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 12.25L12.8333 9.91667M10.5 12.25L10.5 1.75L10.5 12.25ZM10.5 12.25L8.16666 9.91667L10.5 12.25Z"
              stroke="#7CA23C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.49999 1.75L5.83333 4.08333M3.49999 1.75L3.49999 12.25L3.49999 1.75ZM3.49999 1.75L1.16666 4.08333L3.49999 1.75Z"
              stroke="#7CA23C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <p>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.33333 5.40667C3.73999 5.40667 3.25999 4.92667 3.25999 4.33334C3.25999 4.04867 3.37308 3.77566 3.57437 3.57437C3.77566 3.37309 4.04866 3.26 4.33333 3.26C4.92666 3.26 5.40666 3.74 5.40666 4.33334C5.40666 4.618 5.29358 4.89101 5.09229 5.0923C4.891 5.29359 4.61799 5.40667 4.33333 5.40667V5.40667ZM4.33333 1.33334C2.66666 1.33334 1.33333 2.66667 1.33333 4.33334C1.33333 6.58 4.33333 9.90667 4.33333 9.90667C4.33333 9.90667 7.33333 6.58 7.33333 4.33334C7.33333 2.66667 6 1.33334 4.33333 1.33334ZM11.6667 5.40667C11.382 5.40667 11.109 5.29359 10.9077 5.0923C10.7064 4.89101 10.5933 4.618 10.5933 4.33334C10.5933 4.19238 10.6211 4.05281 10.675 3.92259C10.729 3.79237 10.808 3.67404 10.9077 3.57437C11.0074 3.47471 11.1257 3.39564 11.2559 3.3417C11.3861 3.28776 11.5257 3.26 11.6667 3.26C11.8076 3.26 11.9472 3.28776 12.0774 3.3417C12.2076 3.39564 12.326 3.47471 12.4256 3.57437C12.5253 3.67404 12.6044 3.79237 12.6583 3.92259C12.7122 4.05281 12.74 4.19238 12.74 4.33334C12.74 4.618 12.6269 4.89101 12.4256 5.0923C12.2243 5.29359 11.9513 5.40667 11.6667 5.40667ZM11.6667 1.33334C10 1.33334 8.66666 2.66667 8.66666 4.33334C8.66666 6.58 11.6667 9.90667 11.6667 9.90667C11.6667 9.90667 14.6667 6.58 14.6667 4.33334C14.6667 2.66667 13.3333 1.33334 11.6667 1.33334V1.33334ZM11.6667 10.6667C10.82 10.6667 10.0667 11.2 9.78666 12H6.21333C6.03668 11.501 5.66944 11.0925 5.19208 10.8638C4.71473 10.6351 4.16619 10.605 3.66666 10.78C3.41838 10.867 3.18968 11.0021 2.99364 11.1775C2.7976 11.3529 2.63806 11.5653 2.52413 11.8024C2.41021 12.0396 2.34414 12.2968 2.3297 12.5595C2.31527 12.8222 2.35275 13.0851 2.44 13.3333C2.61904 13.8336 2.98876 14.2427 3.4684 14.4713C3.94805 14.6998 4.49866 14.7294 5 14.5533C5.56666 14.3533 5.99999 13.9 6.21333 13.3333H9.79333C10.16 14.3733 11.3067 14.92 12.3333 14.5533C12.5824 14.4672 12.8119 14.3328 13.0088 14.1577C13.2057 13.9826 13.3661 13.7703 13.4807 13.533C13.5953 13.2957 13.6619 13.0382 13.6767 12.7751C13.6914 12.512 13.654 12.2486 13.5667 12C13.28 11.2 12.52 10.6667 11.6667 10.6667ZM11.6667 13.6667C11.4014 13.6667 11.1471 13.5613 10.9596 13.3738C10.772 13.1862 10.6667 12.9319 10.6667 12.6667C10.6667 12.4015 10.772 12.1471 10.9596 11.9596C11.1471 11.772 11.4014 11.6667 11.6667 11.6667C11.9319 11.6667 12.1862 11.772 12.3738 11.9596C12.5613 12.1471 12.6667 12.4015 12.6667 12.6667C12.6667 12.9319 12.5613 13.1862 12.3738 13.3738C12.1862 13.5613 11.9319 13.6667 11.6667 13.6667Z"
            fill="black"
          />
        </svg>

        {{ this.route.RoadSectionEnd }}
      </p>
    </div>
    <!-- <RoutesGallery :CityFromDetail="cityToRoutesGallery" /> -->
    <CyclingFooter />
  </div>
</template>
<script>
import CyclingSearchBar from "./CyclingSearchBar.vue";
import RouteDetailGallery from "./RouteDetailGallery.vue";
// import RoutesGallery from "./RoutesGallery.vue";
import CyclingFooter from "./CyclingFooter.vue";
import jsSHA from "jssha";

export default {
  name: "CyclingDetail",
  components: {
    CyclingSearchBar,
    RouteDetailGallery,
    // RoutesGallery,
    CyclingFooter,
  },
  props: {
    updateCityList: {
      defualt: "none",
    },
  },
  data() {
    return {
      //   isLoading: false,
      RouteDeatail: {}, //for detail page
      cityToRoutesGallery: "",
      cityListFromGallery: [],
      CityFromLanding: "",
      RouteNameFromLanding: "",
      // center: { lat: 121.281251997646, lng: 24.9359849969926 },
      // path: {
      //   path: [
      //     { lat: 121.281251997646, lng: 24.9359849969926 },
      //     { lat: 121.281230000165, lng: 24.9239209964582 },
      //   ],
      //   geodesic: true,
      //   strokeColor: "#FF0000",
      //   strokeOpacity: 1.0,
      //   strokeWeight: 2,
      // },
    };
  },

  created() {
    // this.CityFromLanding = this.$route.params.city;
    // this.RouteNameFromLanding = this.$route.params.routeNmae;

    console.log("created detail", this.$route.params.cityList);
  },
  beforeMount() {
    // this.cityListFromGallery = JSON.parse(this.$route.params.cityList);
    // this.getdetailByRouteName();
  },
  mounted() {
    console.log("cityListFromGallery", this.cityListFromGallery);
  },

  methods: {
    getdetailByRouteName() {
      const vm = this;
      const axios = require("axios");
      const URI = encodeURI(vm.RouteNameFromLanding)
        .replace(/%5B/g, "[")
        .replace(/%5D/g, "]");
      const city = this.cityTranslateing(this.CityFromLanding);
      const api = `https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/${city}?$filter=RouteName%20eq%20'${URI}'&$format=JSON`;
      axios
        .get(api, {
          headers: vm.getAuthorizationHeader(),
        })
        .then((response) => {
          [vm.RouteDeatail] = response.data;
          //   this.cityToRoutesGallery = vm.cityTranslateing(vm.RouteDeatail.City);
          this.cityToRoutesGallery = vm.RouteDeatail.City;

          console.log(
            "test cityToRoutesGallery.result",
            this.cityToRoutesGallery
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      vm.getAuthorizationHeader();
    },
    cityTranslateing(chCity) {
      const vm = this;

      console.log(chCity);
      const result = vm.cityListFromGallery.filter(
        (city) => city.chinese === chCity
      )[0];
      console.log("cityTranslateing", result);
      if (result.english) {
        return result.english;
      } else {
        return chCity;
      }
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
