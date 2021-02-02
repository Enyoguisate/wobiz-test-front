import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Alert from "@/components/common/Alert";
import Spinner from "@/components/common/Spinner";

createApp(App)
  .component("alert-component", Alert)
  .component("spinner-component", Spinner)
  .use(store)
  .use(router)
  .mount("#app");
