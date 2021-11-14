<template>
  <div>
    <div class="search-bar px-2">
      <nav class="navbar shadow navbar-expand-md rounded bg-white mx-auto px-0">
        <div class="container-fluid">
          <div class="logo pe-2">
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
          </div>
          <a class="navbar-brand text-bldGreen" href="#"> 盲選小旅行</a>

          <ul class="navbar-nav me-auto mb-2 mb-md-0"></ul>

          <form class="d-flex">
            <input
              class="form-control-s me-2 ps-2 Noto-Sans"
              type="search"
              placeholder="搜尋縣市"
              aria-label="搜尋縣市"
            />
            <router-link :to="'/searchResult'">
              <button
                class="btn btn-outline-primary Noto-Sans px-2"
                type="submit"
              >
                搜尋
              </button>
            </router-link>
          </form>
          <div class="ps-2">
            <p class="OR text-black-50 my-auto">或是...</p>
          </div>
          <router-link :to="'/searchResultFeelingLucky'">
            <button
              class="btn btn-bldGreen text-white Noto-Sans px-2"
            >
              試試手氣！
            </button>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",

  data() {
    return {
      // isRandom: "",
    };
  },

  mounted() {},

  methods: {
    // sendRadomToResultpage(isRandom) {
    //   console.log("isRandom:", isRandom);
    //   this.$emit("emit-value-update", isRandom);
    // },
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
input {
  width: 130px;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
  nav {
    margin: 20px 40px;
    max-width: 1200px;
  }
  input {
    width: 200px;
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
