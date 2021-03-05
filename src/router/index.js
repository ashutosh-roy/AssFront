import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import multipleTypeQuestions from "../components/forms/multipleType.vue"
import MatchTheFollowing from "../components/forms/MatchTheFollowing.vue";
import QPBuilder from "../views/QPBuilder.vue";
import TestView from "../views/Tests.vue";
import TestConfiguration from "../views/TestConfiguration.vue";
import Topics from "../views/Topics.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Topics",
    component: Topics
  },
  {
    path: "/QPBuilder",
    name: "Question Paper Builder",
    component: QPBuilder
  },
  {
    path: "/MatchTheFollowing",
    name: "assessmentquestions",
    component: MatchTheFollowing
  },
  {
    path: "/test",
    name: "Test",
    component: TestView
  },
  {
    path: "/testConfiguration",
    name: "Test Configuration",
    component: TestConfiguration,
    props: true
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
