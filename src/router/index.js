import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Subject from "../views/SubjectAdd.vue";
import SubjectIndivisual from "../views/SubjectIndivisual.vue";
import TestView from "../views/TestView.vue";
import QuestionPaperBuilder from "../views/QuestionPaperBuilderView.vue";
import supportPage from "../views/Support.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/support/",
    name: "Support",
    component: supportPage
  },
  {
    path: "/subject/",
    name: "Subject",
    component: Subject
  },
  {
    path: "/subject/:subjectID/",
    name: "SubjectIndivisual",
    component: SubjectIndivisual
  },
  {
    path: "/subject/:subjectID/:testID/",
    name: "TestView",
    component: TestView
  },
  {
    path: "/subject/:subjectID/:testID/QPBuilder/",
    name: "QuestionPaperBuilder",
    component: QuestionPaperBuilder
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
