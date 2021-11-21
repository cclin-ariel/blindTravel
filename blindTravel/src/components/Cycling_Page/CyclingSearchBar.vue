<template>
  <div>
    <div class="search-bar px-2">
      <nav class="navbar shadow navbar-expand-md rounded bg-white mx-auto px-0">
        <div class="container-fluid">
          <div class="logo pe-2">
            <router-link to="/cycling/landing">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.914"
                height="35.577"
                viewBox="0 0 31.914 35.577"
              >
                <g
                  id="Group_2"
                  data-name="Group 2"
                  transform="translate(-303.136 -115.166)"
                >
                  <path
                    id="Icon_ionic-md-pin"
                    data-name="Icon ionic-md-pin"
                    d="M12.375,2.25A5.586,5.586,0,0,0,6.75,7.763C6.75,11.9,12.375,18,12.375,18S18,11.9,18,7.763A5.586,5.586,0,0,0,12.375,2.25Zm0,7.481a1.969,1.969,0,1,1,2.009-1.969A1.97,1.97,0,0,1,12.375,9.731Z"
                    transform="translate(306.925 132.743)"
                    fill="#7ca23c"
                  />
                  <path
                    id="Icon_ionic-md-glasses"
                    data-name="Icon ionic-md-glasses"
                    d="M33.75,12.375H19.125v.007h-2.25v-.007H2.25V15.75h.773l.352,1.512c1.125,4.746,2.848,6.363,6.75,6.363s6.75-1.223,6.75-6.363V15.75S16.98,14.625,18,14.625s1.125,1.125,1.125,1.125v1.533c0,5.133,2.96,6.342,6.82,6.342s5.555-1.758,6.68-6.342l.352-1.533h.773V12.375Z"
                    transform="translate(301.3 111.368)"
                    fill="#7ca23c"
                  />
                  <path
                    id="Path_3218"
                    data-name="Path 3218"
                    d="M22.2,10.726a6.744,6.744,0,0,1,5.321-3.06,5.2,5.2,0,0,1,3.567,1.423,4.991,4.991,0,0,1,1.2,1.637"
                    transform="translate(283 109)"
                    fill="none"
                    stroke="#7ca23c"
                    stroke-linecap="round"
                    stroke-width="3"
                  />
                </g>
              </svg>
            </router-link>
          </div>
          <a class="navbar-brand text-bldGreen" href="#">盲選小旅行</a>

          <ul class="navbar-nav me-auto mb-2 mb-md-0"></ul>

          <!-- <form class="d-flex"> -->
          <!-- <select
              class="form-select me-2 ps-2 Noto-Sans form-select-sm"
              aria-label="Default select example"
              @change="updateValue($event)"
            >
              <option selected>搜尋縣市</option>
              <option
                v-for="city in cityList"
                :key="city.id"
                :value="city.chinese"
              >
                {{ city.chinese }}
              </option>
            </select> -->
          <!-- <div>
              <button
                class="search-btn btn btn-outline-primary Noto-Sans px-2"
                type="submit"
                @click="citySearch"
              >
                搜尋
              </button>
            </div> -->
          <!-- </form> -->
          <!-- <div class="ps-2">
            <p class="OR text-black-50 my-auto">或是...</p>
          </div> -->
          <div>
            <button
              class="btn btn-bldGreen text-white Noto-Sans px-2 luckyBtn"
              @click="luckyTryAgain"
            >
              試試手氣！
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99999 15.8333C6.84094 15.8333 8.33333 14.3409 8.33333 12.5C8.33333 10.659 6.84094 9.16666 4.99999 9.16666C3.15904 9.16666 1.66666 10.659 1.66666 12.5C1.66666 14.3409 3.15904 15.8333 4.99999 15.8333Z"
                  stroke="white"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 15.8333C16.8409 15.8333 18.3333 14.3409 18.3333 12.5C18.3333 10.659 16.8409 9.16666 15 9.16666C13.159 9.16666 11.6667 10.659 11.6667 12.5C11.6667 14.3409 13.159 15.8333 15 15.8333Z"
                  stroke="white"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.99999 12.5L6.66666 6.66666H12.9167"
                  stroke="white"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.99999 4.16666H7.49999"
                  stroke="white"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 12.5L12.5 4.16666H15.8333"
                  stroke="white"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8333 4.16666H16.25C16.5815 4.16666 16.8995 4.29835 17.1339 4.53277C17.3683 4.76719 17.5 5.08514 17.5 5.41666C17.5 5.74818 17.3683 6.06612 17.1339 6.30054C16.8995 6.53496 16.5815 6.66666 16.25 6.66666H15.8333"
                  stroke="white"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "CyclingSearchBar",

  data() {
    return {
      city: "",
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
      ],
    };
  },
  mounted() {
    // console.log(this.$route.name);
  },
  methods: {
    // updateValue(e) {
    //   this.city = e.target.value;
    //   console.log(this.city);
    // },
    // citySearch() {
    //   if (!this.city) {
    //     return;
    //   } else {
    //     this.$router.push(`/searchResult/${this.city}`);
    //   }
    // },
    luckyTryAgain() {
      if (this.$route.name === "CyclingLanding") {
        window.location.reload();
      } else {
        this.$router.push("/cycling/landing");
        // window.location.reload();
      }
    },
  },
};
</script>
<style scoped>
nav p {
  font-size: 10px;
}
.OR,
.navbar-brand {
  display: none;
  width: 5px;
}
.search-btn {
  min-width: 50px;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
  nav {
    margin: 20px 40px;
    max-width: 1200px;
  }

  .search-btn {
    width: 80px;
  }
  .OR,
  .navbar-brand {
    display: block;
    width: 60px;
  }
  .navbar-brand {
    letter-spacing: 3px;
  }
}
</style>
