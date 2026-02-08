import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import VideoList from "../pages/VideoList.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/videos",
    name: "videos",
    component: VideoList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
