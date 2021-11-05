<template>
  <div>
    <nav
      class="navbar shadow navbar-expand-md fixed-top rounded bg-white mx-auto"
    >
      <div class="container-fluid">
        <span>LOGO</span>
        <!-- <div class="collapse navbar-collapse" id="navbarCollapse"> -->
        <a class="navbar-brand text-bldGreen" href="#"> 盲選小旅行</a>
        <!-- <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> -->
        <ul class="navbar-nav me-auto mb-2 mb-md-0"></ul>
        <!-- </div> -->

        <form class="d-flex">
          <input
            class="form-control-s me-2 ps-2"
            type="search"
            placeholder="搜尋縣市"
            aria-label="搜尋縣市"
          />
          <button class="btn btn-outline-primary" type="submit">搜尋</button>
        </form>
        <p class="text-black-50 my-auto px-2">或是...</p>

        <button class="btn btn-bldGreen text-white" type="submit">
          試試手氣！
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SearchBar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
button {
  font-family: "Noto Sans TC", sans-serif;
}
input {
  font-family: "Noto Sans TC", sans-serif;
}
nav p {
  font-size: 10px;
}
p.text-black-50.my-auto.px-2,
.navbar-brand {
  visibility: hidden;
  width: 5px;
}
input {
  width: 140px;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
  .box {
    /* width: 100%;

    display: flex;
    justify-content: center; */
  }
  nav {
    margin: 20px 40px;
    max-width: 1200px;
    /* display: flex;

    justify-content: center; */
  }
  input {
    width: 200px;
  }
  p.text-black-50.my-auto.px-2,
  .navbar-brand {
    visibility: visible;
    width: 60px;
  }
}
</style>
