import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import supportPage from "../views/Support.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/support",
    name: "Support",
    component: supportPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
