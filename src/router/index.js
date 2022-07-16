import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "homePro",
    component: () => import("../views/IndexPro.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
