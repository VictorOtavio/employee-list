import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const loadView = view => {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ "@/views/" + view + ".vue");
};

const routes = [
  {
    path: "/",
    name: "home",
    component: loadView("PageHome"),
    meta: { auth: true }
  },
  {
    path: "/login",
    name: "login",
    component: loadView("PageLogin"),
    meta: { auth: false }
  }
];

const router = new VueRouter({
  routes
});

export default router;
