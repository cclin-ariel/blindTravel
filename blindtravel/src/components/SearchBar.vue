<template>
  <div>
    <nav class="navbar shadow navbar-expand-md fixed-top mx-5 mt-3 rounded">
      <div class="container-fluid">
        <span>LOGO</span>
        <a class="navbar-brand text-bldGreen" href="#"> 盲選小旅行</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0"></ul>
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
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
