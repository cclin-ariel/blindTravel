import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import jsSHA from "jssha";


import axios from "axios";
import VueAxios from "vue-axios";

import "./assets/all.scss";

createApp(App)
  .use(router, VueAxios, axios, jsSHA)
  .mount("#app");
