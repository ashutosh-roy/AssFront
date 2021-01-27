import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TestBuilder from "../views/TestBuilder.vue";
import Subject from "../views/SubjectAdd.vue";
import SubjectIndivisual from "../views/SubjectIndivisual.vue";
import supportPage from "../views/Support.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/subject",
    name: "Subject",
    component: Subject
  },
  {
    path: "/subject/:slug",
    name: "SubjectIndivisual",
    component: SubjectIndivisual
  },
  {
    path: "/builder",
    name: "TestBuilder",
    component: TestBuilder
  },
  {
    path: "/",
    name: "home",
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
