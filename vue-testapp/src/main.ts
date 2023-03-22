import { createApp } from "vue";
import { IonicVue } from "../../vue-ionic-patternlib/src/index";
import App from "./App.vue";
import "./style.css";

import "../../vue-ionic-patternlib/src/style.css";

createApp(App).use(IonicVue).mount("#app");
