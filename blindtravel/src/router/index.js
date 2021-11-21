import { createRouter, createWebHashHistory } from "vue-router";
import Landing from "@/components/Landing.vue";
import SearchResult from "@/components/SearchResult.vue";
import SearchResultFeelingLucky from "@/components/SearchResultFeelingLucky.vue";
import Detail from "@/components/Detail.vue";
import CyclingLanding from "@/components/Cycling_Page/CyclingLanding.vue";
import CyclingDetail from "@/components/Cycling_Page/CyclingDetail.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/searchResult/:city",
    name: "SearchResult",
    component: SearchResult,
  },
  {
    path: "/searchResultFeelingLucky",
    name: "SearchResultFeelingLucky",
    component: SearchResultFeelingLucky,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
  //cycling
  {
    path: "/cycling/landing/",
    name: "CyclingLanding",
    component: CyclingLanding,
  },
  {
    path: "/cycling/detail/",
    name: "CyclingDetail",
    component: CyclingDetail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
