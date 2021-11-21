<template>
  <div>
    <footer class="footer mt-auto py-3 text-white text-center">
      <div class="green-footer bg-bldGreen py-5">
        <p class="title fs-4 px-auto Noto-Serif">
          <span>沒有喜歡的嗎？</span>
          <span>試試看別的地點👇🏻 </span>
        </p>
        <pre class="title fs-4 px-auto Noto-Serif">
沒有喜歡的嗎？
試試看別的地點👇🏻 
        </pre>
        <div class="search-bar">
          <CyclingSearchBar />
        </div>
        <!-- </div> -->
      </div>
      <div class="black-footer py-5">
        <div class="createdBy py-0 my-0 Noto-Serif">
          <p>
            Designed by
            <a href="https://www.instagram.com/kou.ikusen/">Kiks</a> and
            Developed by
            <a href="https://twitter.com/wahaha47168">cclin</a> with ❤️
          </p>
          <pre class="Noto-Sans lh-lg">
Designed by<a href="https://www.instagram.com/kou.ikusen/">Kiks</a>
Developed by<a href="https://twitter.com/wahaha47168">cclin</a>
with ❤️
          </pre>
        </div>
        <div class="copyright Noto-Sans">
          <p class="text-white-50">
            &copy; 2021 Kiks & cclin. All Rights Reseved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import CyclingSearchBar from "./CyclingSearchBar.vue";
export default {
  name: "Footer",
  components: {
    CyclingSearchBar,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
.black-footer {
  background-color: #222222;
}
.createdBy {
  font-size: 16px;
  letter-spacing: 0.64px;
}
.copyright {
  font-size: 12px;
}
pre.title,
.createdBy > pre {
  display: block;
}
p.title,
.createdBy > p {
  display: none;
}
.green-footer.bg-bldGreen {
  padding-top: 80px;
  padding-bottom: 80px;
  letter-spacing: 2px;
}
.search-bar {
  margin-top: 24px;
  margin-bottom: 0;
}
.black-footer {
  padding-top: 40px;
  padding-bottom: 40px;
}
@media (min-width: 768px) {
  .title {
    /* width: 100%; */
    display: inline;
  }
  pre.title,
  .createdBy > pre {
    display: none;
  }
  p.title,
  .createdBy > p {
    display: block;
  }
  .green-footer.bg-bldGreen {
    padding-top: 160px;
    padding-bottom: 160px;
  }
  .search-bar {
    margin-top: 40px;
    margin-bottom: 0;
  }
  .black-footer {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}
</style>
