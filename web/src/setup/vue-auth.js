import Vue from "vue";
import router from "@/router";
import VueAxios from "vue-axios";
import axios from "@/setup/axios.js";
import VueAuth from "@websanova/vue-auth";

Vue.use(VueAxios, axios);

Vue.router = router;

Vue.use(VueAuth, {
  auth: require("@websanova/vue-auth/drivers/auth/bearer.js"),
  http: require("@websanova/vue-auth/drivers/http/axios.1.x.js"),
  router: require("@websanova/vue-auth/drivers/router/vue-router.2.x.js"),
  authRedirect: { name: "login" },
  notFoundRedirect: { name: "home" },
  tokenDefaultName: "access_token",
  tokenStore: ["cookie", "localStorage"],
  loginData: { url: "auth" },
  logoutData: {
    redirect: { name: "login" },
    makeRequest: false
  },
  fetchData: { enabled: false },
  refreshData: { enabled: false }
});
